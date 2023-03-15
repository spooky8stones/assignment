import React, { useEffect } from 'react';
import { getData } from '../thunkSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changePeriodHandler } from '../thunkSlice';

export default function Week() {

  const allperiods = useSelector(state => state.thunk.unitetime)
  const dispatch = useDispatch()

  let currentDate = new Date()
  const dataRequest = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`

  useEffect(()=>{
    dispatch(getData(changePeriodHandler('59', dataRequest, dataRequest)))
  }, [])
  
  const timeConverter = (time) => {
    const isoDate = time;
    const date = new Date(isoDate);
    return date.toLocaleString('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    }

  return (
    <>
    {allperiods.minute && allperiods.minute.map((el) => 
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
