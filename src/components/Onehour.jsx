import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { timeConverter, sortData, sortDataReverse } from '../utils/auxiliary';

export default function Onehour({sortype}) {

  const allperiods = useSelector(state => state.thunk.unitetime)
  const [sorted, setSort] = useState([])

  useEffect(() => {
    if(allperiods.hour){
    setSort([...allperiods.hour])
    }
  },[allperiods.hour])

  useMemo(() => {
    if(sortype.sort){
      if(sortype.isSorted){
    sortData(allperiods.hour, sortype.sort, sorted, setSort)
    } else {
    sortDataReverse(allperiods.hour, sortype.sort, sorted, setSort)}}
  }, [sortype, sorted]);

  return (
    <>
    {sorted !==0 ? sorted.map((el) => 
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
