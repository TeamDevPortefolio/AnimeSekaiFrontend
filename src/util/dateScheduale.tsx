export const getnextdays = () => {

    const dates = []
    const today = new Date()

    for (var i = -5; i < 10; i++) {
        const nextDate = new Date(today);

        nextDate.setDate(today.getDate() + i)
        const dayName = nextDate.toLocaleDateString('en-US', { weekday: 'long' });
        const dayNumber = nextDate.getDate(); // 27

        dates.push({
            weekday: `${dayName}`,
            days: `${dayNumber}`

        })



    }
    return dates

}

function getWeekView(startDate: Date,) {
    const today = new Date(startDate);
    const daysArr = [];

    for (var i = 0; i < 7; i++) {
        today.setDate(today.getDate() + i);
        console.log("nextDay", today.toISOString());

        daysArr.push(today.toISOString().split("T")[0]);
    }


    return daysArr;
}
function getMonthView(startDate: Date) {
    const today = new Date(startDate);
    const daysArr = [];

    for (var i = 0; i < 30; i++) {
        today.setDate(today.getDate() + i);
        console.log("nextDay", today.toISOString());

        daysArr.push(today.toISOString().split("T")[0]);
    }


    return daysArr;
}


export function caculateView(startDate: Date, period: string) {

    switch (period) {
        case 'week':
            return getWeekView(startDate)
        case 'month':
            return getMonthView(startDate)
        default:
            throw new Error("Période invalide");

    }
}