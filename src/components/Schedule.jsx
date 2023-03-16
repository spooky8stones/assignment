import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Timemenu from './Timemenu';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";


export default function Shedule() {

  const [shedule, setShedule] = useState([])
  const points = useSelector(state => state.thunk.unitetime)


  const pointShedule = []
  console.log(shedule)
  console.log(points)


  useEffect(()=>{
    if(points.minute){
      const result = points.minute.map((minute) => pointShedule.push(
      {
        "name": minute.StartTime,
        "Close": minute.Close
      }
          ))
          setShedule(pointShedule)
        }
  }, [points.minute])

  return (
    <div className='container'>
      <ul style={{padding: '0'}}>
      <li>1 Minute</li>
      <li>5 Minutes</li>
      <li>1 Hour</li>
      <li>1 Week</li>
    </ul>
    <hr style={{width: '95vw', border: 'none', margin: '0'}}/>
      <div className={'shedule'}>
      <AreaChart
        width={800}
        height={500}
        data={shedule}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Close" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
    </div>
  );
}
