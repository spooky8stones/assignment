import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
'thunk/getMinute',
async (newadress) => {
  const response = await fetch(newadress)
  const formattedResponce = await response.json()
  return formattedResponce
}
)
const ADRESS = 'https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume'

export const changePeriodHandler = (time, fromData, toData) => {
  return `https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${time}&Precision=Minutes&StartTime=${fromData}&EndTime=${toData}%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`
}


// export const getfiveMinutes = createAsyncThunk(
//   'thunk/getfiveMinutes',
//   async () => {
//     const response = await fetch('https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume')
//     const formattedResponce = await response.json()
//     return formattedResponce
//   }
//   )

// export const getHour = createAsyncThunk(
//   'thunk/getHours',
//   async () => {
//     const response = await fetch('https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=30&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume')
//     const formattedResponce = await response.json()
//     return formattedResponce
//   }
//   )

// export const getWeek = createAsyncThunk(
//   'thunk/getWeek',
//   async () => {
//     const response = await fetch('https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=1&Precision=Hours&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume')
//     const formattedResponce = await response.json()
//     return formattedResponce
//   }
//   )


const initialState = {

  unitetime: 
  { currentData: ADRESS },

};

export const thunkSlice = createSlice({
  name: 'thunk',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getData.fulfilled, (state, action) => {
        state.unitetime.minute = action.payload
    })
    // .addCase(getfiveMinutes.fulfilled, (state, action) => {
    //     state.unitetime.fiveminutes = action.payload
    // })
    // .addCase(getHour.fulfilled, (state, action) => {
    //     state.unitetime.hour = action.payload
    // })
    // .addCase(getWeek.fulfilled, (state, action) => {
    //     state.unitetime.week = action.payload
    // })
}
});

export const timeRequest = thunkSlice.reducer;

    


