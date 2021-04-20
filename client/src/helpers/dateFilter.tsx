export const dateFilter = (array) => {
    const dates = array.map( order => {
        return new Date(order.updatedAt);
    })
    // console.log('dates.slice :', dates[0].toString().slice(0,3));

    let week = {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0,
    }

    dates.forEach( date => {
        switch ( date.toString().slice(0,3) ) {
            case "Mon":
                return week.mon ++
            case "Tue":
                return week.tue ++
            case "Wed":
                return week.wed ++
            case "Thu":
                return week.thu ++
            case "Fri":
                return week.fri ++
            case "Sat":
                return week.sat ++
            case "Sun":
                return week.sun ++
            default:
                return week;
        }
    });

    return week;

};