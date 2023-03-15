import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { timeConverter } from '../utils/auxiliary';

export default function Week() {

  const [sorted, setSort] = useState([])

  const allperiods = useSelector(state => state.thunk.unitetime)

  useEffect(() => {
    if(allperiods.week){
    const lastHourData = [...allperiods.week].filter(obj => {
      const diff = new Date() - new Date(obj.Date);
      const diffInMinutes = diff / (1000 * 60);
      return diffInMinutes < 60;
    });
    setSort(lastHourData)}
  }, [])

  return (
    <>
    {sorted && sorted.map((el) => 
                <tr key={Math.random()}>
                <td className="col">{timeConverter(el.Date)}</td>
                <td className="col">{el.High}</td>
                <td className="col">{el.Low}</td>
                <td className="col">{el.Open}</td>
                <td className="col">{el.Close}</td>
                <td className="col">{((el.Close - el.Open)/el.Close*100).toFixed(2)}</td>
              </tr>
      )}
      </>
  )
}
