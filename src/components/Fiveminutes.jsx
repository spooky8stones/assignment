import React from 'react';
import { useSelector } from 'react-redux';
import { timeConverter, change } from '../utils/auxiliary';

export default function Fiveminutes() {

  const allperiods = useSelector(state => state.thunk.unitetime)

  return (
    <>
    {allperiods.fiveminutes !=0 ? allperiods.fiveminutes.map((el) => 
                <tr key={Math.random()}>
                <td className="col">{timeConverter(el.Date)}</td>
                <td className="col">{el.High}</td>
                <td className="col">{el.Low}</td>
                <td className="col">{el.Open}</td>
                <td className="col">{el.Close}</td>
                <td className="col" style={change(el) > 0 ? {color: 'green'}: {color: 'red'}}>{change(el)}</td>
              </tr>
      )  : <tr><td colSpan={'6'} className={'message'}><p>We are waiting for upcomming data...</p></td></tr>}
      </>
  )
}
