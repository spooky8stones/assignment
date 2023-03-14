import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table() {

  

  return (
    <div>
    <ul>
      <li>1 Minute</li>
      <li>5 Minutes</li>
      <li>1 Hour</li>
      <li>1 Week</li>
    </ul>
    <hr style={{width: '95vw', border: 'none', margin: '0'}}/>
    <div class="container">
  <table class="table">
    <thead>
      <tr>
        <th class="col">Date</th>
        <th class="col">High</th>
        <th class="col">Low</th>
        <th class="col">Open</th>
        <th class="col">Close</th>
        <th class="col">% Change</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col">Row 1, Column 1</td>
        <td class="col">Row 1, Column 2</td>
        <td class="col">Row 1, Column 3</td>
        <td class="col">Row 1, Column 4</td>
        <td class="col">Row 1, Column 5</td>
        <td class="col">Row 1, Column 6</td>
      </tr>
      <tr>
        <td class="col">Row 2, Column 1</td>
        <td class="col">Row 2, Column 2</td>
        <td class="col">Row 2, Column 3</td>
        <td class="col">Row 2, Column 4</td>
        <td class="col">Row 2, Column 5</td>
        <td class="col">Row 2, Column 6</td>
      </tr>
      <tr>
        <td class="col">Row 3, Column 1</td>
        <td class="col">Row 3, Column 2</td>
        <td class="col">Row 3, Column 3</td>
        <td class="col">Row 3, Column 4</td>
        <td class="col">Row 3, Column 5</td>
        <td class="col">Row 3, Column 6</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}
