import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMinute = createAsyncThunk(
'minute/getMinute',
async () => {
  const response = await fetch('https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume')
  const formattedResponce = await response.json()
  console.log('fetching')
  console.log(formattedResponce)
}
)

export const getfiveMinutes = createAsyncThunk(
  'fiveminutes/getfiveMinutes',
  async () => {
    const response = await fetch('https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume')
    const formattedResponce = await response.json()
    return formattedResponce
  }
  )

export const getHour = createAsyncThunk(
  'minute/getHours',
  async () => {
    const response = await fetch('https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume')
    const formattedResponce = await response.json()
    return formattedResponce
  }
  )

export const getWeek = createAsyncThunk(
  'week/getWeek',
  async () => {
    const response = await fetch('https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=1&Precision=Hours&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume')
    const formattedResponce = await response.json()
    return formattedResponce
  }
  )


const initialState = {
  minute: [],
  fiveminutes: [],
  hour : [],
  week: []
};

export const thunkSlice = createSlice({
  name: 'thunk',
  initialState,
  extraReducers: {
    [getMinute.fulfilled]: (state, action) => {
      state.minute.push(action.payload)
    },
    [getfiveMinutes.fulfilled]: (state, action) => {
      state.fiveminutes = action.payload
    },
    [getHour.fulfilled]: (state, action) => {
      state.hour = action.payload
    },
    [getWeek.fulfilled]: (state, action) => {
      state.week = action.payload
    },
  },
});

export default thunkSlice.reducer;

    


