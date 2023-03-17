import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Oneminute from './Oneminute';
import Fiveminutes from './Fiveminutes';
import Onehour from './Onehour';
import Week from './Week';
import Timemenu from './Timemenu';
import sortArrows from '../assets/sortArrows.png'

export default function Table() {
  
  const [curtab, setCurtab] = useState('minute')
  const [sortype, setSortype] = useState('')
  
  let tabData 

  switch (curtab) {
    case 'minute':
      tabData = <Oneminute sortype={sortype}/>
      break;
      case 'fiveminutes':
      tabData = <Fiveminutes sortype={sortype}/>
      break;
      case 'hour':
      tabData = <Onehour sortype={sortype}/>
      break;
      case 'week':
      tabData = <Week sortype={sortype}/>
      break;
    default:
      tabData = <Oneminute/>
      break;
  }

  return (
    <div style={{width: '95%'}}>
    <Timemenu tab={setCurtab}/>
    <div className="container" style={{padding: '0'}}>
  <table className="table" style={{border:'1px solid #d1d1d1'}}>
    <thead style={{backgroundColor:'#f5f5f5'}}>
      <tr>
        <th onClick={() => {setSortype('date')}} className="col">Date<img alt='arrow' src={sortArrows} style={{height: '15px', marginLeft: '5px'}}/></th>
        <th onClick={() => {setSortype('high')}} className="col">High<img alt='arrow' src={sortArrows} style={{height: '15px', marginLeft: '5px'}}/></th>
        <th onClick={() => {setSortype('low')}} className="col">Low<img alt='arrow' src={sortArrows} style={{height: '15px', marginLeft: '5px'}}/></th>
        <th onClick={() => {setSortype('open')}} className="col">Open<img alt='arrow' src={sortArrows} style={{height: '15px', marginLeft: '5px'}}/></th>
        <th onClick={() => {setSortype('close')}} className="col">Close<img alt='arrow' src={sortArrows} style={{height: '15px', marginLeft: '5px'}}/></th>
        <th onClick={() => {setSortype('change')}} className="col">% Change<img alt='arrow' src={sortArrows} style={{height: '15px', marginLeft: '5px'}}/></th>
      </tr>
    </thead>
    <tbody>
      {tabData}
    </tbody>
  </table>
</div>
    </div>
  )
}
