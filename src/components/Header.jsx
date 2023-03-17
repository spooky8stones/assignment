import React, { useState } from 'react';
import Arrow from './Arrow';
import { timeConverterHeader } from '../utils/auxiliary';

export default function Header({data, setTab}) {

const historyHandler = () => {
  setTab('table')
}

const overviewHandler = () => {
  setTab('shedule')
}

  return (
<>
          <div className={'header'}>
            <div>
        <p className={'stockname'}>
          Apple Inc
        </p>
        <p className={'uptodate'}>As of: {timeConverterHeader(data)}</p>
        </div>
        <div className={'actual'}>
          
          <div className={'onstock'}>{data.previousClose > data.last ? <Arrow rotate={{transform: 'rotate(180deg)'}} width={'30%'} height={'30%'} fill={'red'}/> : <Arrow fill={'green'} width={'30%'} height={'30%'}/> }<div style={{width: '50%'}}><p style={{marginLeft: '10px', margin: '0', textAlign: 'center'}}>{data.last}</p></div></div>
        <div className={'changed'}>
        <span>{data.previousClose > data.last ? '' : '+' }{data.change}</span>
        <span>{data.previousClose > data.last ? '' : '+' }({data.percentChange})</span>
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
        </>      
  )
}
