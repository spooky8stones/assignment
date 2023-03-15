import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timeConverter } from '../utils/auxiliary';

export default function Oneminute({sortype}) {

  const [sorted, setSort] = useState([])
  const allperiods = useSelector(state => state.thunk.unitetime)

  useEffect(() => {
    if(allperiods.minute)
    setSort([...allperiods.minute])
  },[allperiods.minute])

  useEffect(() =>{
    if(allperiods.minute){
      switch (sortype) {
        case 'date':
          setSort(sorted.sort((d1, d2) =>{
            return new Date(d2.Date) - new Date(d1.Date)}))
          break;
          case 'high':
            setSort(sorted.sort((h1, h2) =>{
              return h2.High - h1.High
            })) 
          break;
          case 'low':
            setSort(sorted.sort((l1, l2) =>{
              return l2.Low - l1.Low}))
          break;
          case 'open':
            setSort(sorted.sort((o1, o2) =>{
              return o2.Open - o1.Open}))
          break;
          case 'close':
            setSort(sorted.sort((c1, c2) =>{
              return c2.Close - c1.Close}))
          break;
          case 'change':
          
          break;
        default:
          
          break;
      }
    }
  }, [sortype])

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
