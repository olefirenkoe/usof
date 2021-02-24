function dataFormated (date) {
    date = new Date(date)
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    if (month < 10) {
        month = `0${month}`;
    }if (day < 10) {
        day = `0${day}`;
    }if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (`${day}.${month}.${year} at ${hours}:${minutes}`);
}

export default dataFormated;