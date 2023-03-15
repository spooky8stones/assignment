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