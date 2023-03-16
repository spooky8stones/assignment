import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { change } from './utils/auxiliary';

export const getMinute = createAsyncThunk(
'thunk/getMinute',
async (newadress) => {
  const response = await fetch(newadress)
  const formattedResponce = await response.json()
  return formattedResponce
})

export const getFiveMinutes = createAsyncThunk(
  'thunk/getFiveMinutes',
  async (newadress) => {
    const response = await fetch(newadress)
    const formattedResponce = await response.json()
    return formattedResponce
  }
)

export const getHour = createAsyncThunk(
  'thunk/getHour',
  async (newadress) => {
    const response = await fetch(newadress)
    const formattedResponce = await response.json()
    return formattedResponce
  })

  export const getWeek = createAsyncThunk(
    'thunk/getWeek',
    async (newadress) => {
      const response = await fetch(newadress)
      const formattedResponce = await response.json()
      return formattedResponce
    })

const ADRESS = 'https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume'

export const changePeriodHandler = (time, fromData, toData) => {
  return `https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${time}&Precision=Minutes&StartTime=${fromData}&EndTime=${toData}%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`
}

const initialState = {

  unitetime: 
  { currentData: ADRESS },

};


export const thunkSlice = createSlice({
  name: 'thunk',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getMinute.fulfilled, (state, action) => {
        state.unitetime.minute = action.payload
        state.unitetime.minute = state.unitetime.minute.map((obj) => {return {...obj, calculated: change(obj)}})
    })
    .addCase(getFiveMinutes.fulfilled, (state, action) => {
        state.unitetime.fiveminutes = action.payload
        state.unitetime.fiveminutes = state.unitetime.fiveminutes.map((obj) => {return {...obj, calculated: change(obj)}})
    })
    .addCase(getHour.fulfilled, (state, action) => {
        state.unitetime.hour = action.payload
        state.unitetime.hour = state.unitetime.hour.map((obj) => {return {...obj, calculated: change(obj)}})
    })
    .addCase(getWeek.fulfilled, (state, action) => {
        state.unitetime.week = action.payload
        state.unitetime.week = state.unitetime.week.map((obj) => {return {...obj, calculated: change(obj)}})
    })
}
});

export const timeRequest = thunkSlice.reducer;

    


