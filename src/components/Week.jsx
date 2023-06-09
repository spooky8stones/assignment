import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { timeConverter, sortData, sortDataReverse } from '../utils/auxiliary';

export default function Week({sortype}) {

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
  }, [allperiods.week])

  useMemo(() => {
    if(sortype.sort){
      if(sortype.isSorted){
    sortData(allperiods.week, sortype.sort, sorted, setSort)
    } else {
    sortDataReverse(allperiods.week, sortype.sort, sorted, setSort)}}
  }, [sortype, sorted]);

  useEffect(() => {
    if(allperiods.week){
    setSort([...allperiods.week])
    }
  },[allperiods.week])

  return (
    <>
    {sorted.length !== 0 ? sorted.map((el) => 
                <tr key={Math.random()}>
                <td className="col">{timeConverter(el.Date)}</td>
                <td className="col">{el.High}</td>
                <td className="col">{el.Low}</td>
                <td className="col">{el.Open}</td>
                <td className="col">{el.Close}</td>
                <td className="col" style={el.calculated > 0 ? {color: 'green'}: {color: 'red'}}>{el.calculated}</td>
              </tr>
      ) : <tr><td colSpan={'6'} className={'message'}><div className='spinner'></div><p>We are waiting for upcomming data...</p></td></tr>}
      </>
  )
}
