import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMinute, getFiveMinutes, getHour, getWeek } from './thunkSlice';
import { messageReceived } from './headerSlice';
import { changePeriodHandler } from './thunkSlice';
import Header from './components/Header';
import './App.css';

function App() {

  const [tab, setTab] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const data = useSelector(state => state.socket.data)
  const dispatch = useDispatch()

  let currentDate = new Date()

  const firstRequest = `${currentDate.getMonth() + 1}/${currentDate.getDate() - 1}/${currentDate.getFullYear()}`
  const secondRequest = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`

  useEffect(() => {
    const socket = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon');
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'SUBSCRIBE', instruments: ["s-aapl"] }));
      console.log('Connected to WebSocket server');
    };
    socket.onmessage = (event) => {
      const inner = JSON.parse(event.data)["s-aapl"]
      dispatch(messageReceived(inner))
      dispatch(getMinute(changePeriodHandler('30', `${firstRequest}`, `${firstRequest}`)))
      dispatch(getFiveMinutes(changePeriodHandler('30', `${firstRequest}`, `${firstRequest}`)))
      dispatch(getHour(changePeriodHandler('30', `${secondRequest}`, `${secondRequest}`)))
      dispatch(getWeek(changePeriodHandler('30', `${secondRequest}`, `${secondRequest}`)))
      setLoaded(true)
    }
  }, [dispatch])

  return (
    <div className={'main'}>
      <div className={'container'}>
        {loaded &&

          <Header setTab={setTab} data={data} />

        }

      </div>
    </div>
  );
}

export default App;
