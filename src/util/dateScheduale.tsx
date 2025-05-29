export const getnextdays =()=>{

    const dates = []
    const today= new Date()
    
    for(var i = -5; i< 10;i++){
        const nextDate = new Date(today);
    
        nextDate.setDate(today.getDate()+i)    
        const dayName = nextDate.toLocaleDateString('en-US', { weekday: 'long' });
        const dayNumber = nextDate.getDate(); // 27
    
        dates.push({
        weekday:`${dayName}`,
        days:`${dayNumber}`
    
        })
    
    
    
    }
    return dates
    
    }