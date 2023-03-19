import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { timeConverter, sortData, sortDataReverse } from '../utils/auxiliary';

export default function Fiveminutes({sortype}) {

  const allperiods = useSelector(state => state.thunk.unitetime)
  const [sorted, setSort] = useState([])

  useEffect(() => {
    if(allperiods.fiveminutes){
    setSort([...allperiods.fiveminutes])
    }
  },[allperiods.fiveminutes])

  useMemo(() => {
    if(sortype.sort){
      if(sortype.isSorted){
    sortData(allperiods.fiveminutes, sortype.sort, sorted, setSort)
    } else {
    sortDataReverse(allperiods.fiveminutes, sortype.sort, sorted, setSort)}}
  }, [sortype, sorted]);

  return (
    <>
    {sorted.length !==0 ? sorted.map((el) => 
                <tr key={Math.random()}>
                <td className="col">{timeConverter(el.Date)}</td>
                <td className="col">{el.High}</td>
                <td className="col">{el.Low}</td>
                <td className="col">{el.Open}</td>
                <td className="col">{el.Close}</td>
                <td className="col" style={el.calculated > 0 ? {color: 'green'}: {color: 'red'}}>{el.calculated}</td>
              </tr>
      )  : <tr><td colSpan={'6'} className={'message'}><div className='spinner'></div><p>We are waiting for upcomming data...</p></td></tr>}
      </>
  )
}
