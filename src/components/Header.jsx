import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../thunkSlice';
import { messageReceived} from '../headerSlice';
import Arrow from './Arrow';
import Schedule from './Schedule';
import Table from './Table';
import { changePeriodHandler } from '../thunkSlice';

export default function Header() {

  const [tab, setTab] = useState(true)

  const data = useSelector(state => state.socket.data)
  const dispatch = useDispatch()

  useEffect(()=>{
    const socket = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon');
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'SUBSCRIBE', instruments:["s-aapl"] }));
      console.log('Connected to WebSocket server');
    };
      socket.onmessage = (event) => {
        const inner = JSON.parse(event.data)["s-aapl"]
        dispatch(messageReceived(inner))
      };   
  }, [])

const timeConverter = () => {
const isoDate = data.lastUpdate;
const date = new Date(isoDate);
return date.toLocaleString('en-US', { 
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
  timeZone: 'UTC' 
});
}

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
        <p className={'uptodate'}>As of: {timeConverter()}</p>
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
