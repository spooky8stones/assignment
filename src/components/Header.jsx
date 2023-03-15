import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMinutes, getFiveMinutes, getHour, getMinute, getWeek } from '../thunkSlice';
import { messageReceived} from '../headerSlice';
import Arrow from './Arrow';
import Schedule from './Schedule';
import Table from './Table';
import { changePeriodHandler } from '../thunkSlice';
import { timeConverterHeader } from '../utils/auxiliary';

export default function Header() {

  const [tab, setTab] = useState(true)

  const data = useSelector(state => state.socket.data)
  const dispatch = useDispatch()


  let currentDate = new Date()

  const Request = `${currentDate.getMonth()+1}/${currentDate.getDate()-1}/${currentDate.getFullYear()}`
  const RequestFiveMinutes = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`
  const RequestHour = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`
  const RequestWeek = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`



  useEffect(()=>{
    const socket = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon');
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'SUBSCRIBE', instruments:["s-aapl"] }));
      console.log('Connected to WebSocket server');
    };
      socket.onmessage = (event) => {
        const inner = JSON.parse(event.data)["s-aapl"]
        dispatch(messageReceived(inner))
        dispatch(getMinute(changePeriodHandler('30',`${Request}`,`${Request}`)))
        dispatch(getFiveMinutes(changePeriodHandler('30',`${Request}`,`${Request}`)))
        dispatch(getHour(changePeriodHandler('30',`${RequestHour}`,`${RequestHour}`)))
        dispatch(getWeek(changePeriodHandler('5',`${RequestWeek}`,`${RequestWeek}`)))
      };   
  }, [dispatch])


const historyHandler = () => {
  setTab(true)
}

const overviewHandler = () => {
  setTab(false)
}

  return (
<div className={'main'}>
          <div className={'header'}>
            <div>
        <p className={'stockname'}>
          Apple Inc
        </p>
        <p className={'uptodate'}>As of: {timeConverterHeader(data)}</p>
        </div>

        <div className={'actual'}>
          <div className={'onstock'}>{data.previousClose > data.last ? <Arrow rotate={{transform: 'rotate(180deg)'}} fill={'red'}/> : <Arrow fill={'green'} width={'20%'} height={'20%'}/> }<p style={{marginLeft: '10px', margin: '0', textAlign: 'center'}}>{data.last}</p></div>
        <div className={'changed'}>
        <span>{data.previousClose > data.last ? '-' : '+' }{data.change}</span>
        <span>{data.previousClose > data.last ? '-' : '+' }{data.percentChange}</span>
        </div>
        </div>
        </div>
        <div style={{width: '95%'}}>
        <ul>
            <li onClick={overviewHandler}>Overview</li>
            <li onClick={historyHandler}>History</li>
          </ul>
          <hr style={{border: 'none', height: '2px', backgroundColor: '#e5e5e5', margin: '0'}}/>
        </div>
        {tab ? <Table/> : <Schedule/>}
        </div>      
  )
}
