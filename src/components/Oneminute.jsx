import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { timeConverter, change, sortData } from '../utils/auxiliary';

export default function Oneminute({sortype}) {

  const [sorted, setSort] = useState([])
  const allperiods = useSelector(state => state.thunk.unitetime)
  const [prevProps, setPrevProps] = useState('');

  useEffect(() => {
    setPrevProps(sortype);
    //     if(prevProps === sortype){
    //   setSort([...allperiods.minute])
    // }
  }, [sortype]);

  console.log(prevProps)


  useEffect(() => {
    if(allperiods.minute){
    setSort([...allperiods.minute])
  }
  },[allperiods.minute])

  useMemo(() =>{
    sortData(allperiods.minute, sortype, sorted, setSort)
  }, [sortype, sorted])

  return (
    <>
    {sorted.length != 0 ? sorted.map((el, i) => 
                <tr key={Math.random()}>
                <td className="col">{timeConverter(el.Date)}</td>
                <td className="col">{el.High}</td>
                <td className="col">{el.Low}</td>
                <td className="col">{el.Open}</td>
                <td className="col">{el.Close}</td>
                <td className="col" style={change(el) > 0 ? {color: 'green'}: {color: 'red'}}>{change(el)}</td>
              </tr>
      ) : <tr><td colSpan={'6'} className={'message'}><p>We are waiting for upcomming data...</p></td></tr>
      } 
      
      </>
  )
}
