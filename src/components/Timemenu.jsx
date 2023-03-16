import React from 'react'

export default function Timemenu({tab}) {
  return (
    <>
    <ul style={{padding: '0'}}>
      <li onClick={() => {tab('minute')}}>1 Minute</li>
      <li onClick={() => {tab('fiveminutes')}}>5 Minutes</li>
      <li onClick={() => {tab('hour')}}>1 Hour</li>
      <li onClick={() => {tab('week')}}>1 Week</li>
    </ul>
    <hr style={{width: '95vw', border: 'none', margin: '0'}}/>
    </>
  )
}
