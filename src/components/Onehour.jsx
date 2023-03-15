import React, { useEffect } from 'react';
import { getData } from '../thunkSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changePeriodHandler } from '../thunkSlice';
import { timeConverter } from '../utils/auxiliary';

export default function Onehour() {

  const allperiods = useSelector(state => state.thunk.unitetime)
  const dispatch = useDispatch()

  return (
    <>
    {allperiods.hour && allperiods.hour.map((el) => 
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
