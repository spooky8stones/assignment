export const timeConverter = (time) => {
    const isoDate = time;
    const date = new Date(isoDate);
    return date.toLocaleString('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    }

export const timeConverterHeader = (data) => {
        const isoDate = data.lastUpdate;
        const date = new Date(isoDate);
        return date.toLocaleString('en-US', { 
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          timeZoneName: 'short',
          timeZone: 'UTC' 
        });
        }

        export const change = (el) => {
          return ((el.Close - el.Open)/el.Close*100).toFixed(2)
        }

export const sortData = (data, type, state, stateSeter) => {
        if(data){
          switch (type) {
            case 'date':
              stateSeter(state.sort((d1, d2) =>{
                return new Date(d2.Date) - new Date(d1.Date)}))
              break;
              case 'high':
                stateSeter(state.sort((h1, h2) =>{
                  return h2.High - h1.High
                })) 
              break;
              case 'low':
                stateSeter(state.sort((l1, l2) =>{
                  return l2.Low - l1.Low}))
              break;
              case 'open':
                stateSeter(state.sort((o1, o2) =>{
                  return o2.Open - o1.Open}))
              break;
              case 'close':
                stateSeter(state.sort((c1, c2) =>{
                  return c2.Close - c1.Close}))
              break;
              case 'change':
              
              break;
            default:
              
              break;
          }
        }}