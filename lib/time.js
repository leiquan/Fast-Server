const timestamp = () => {
    let d = new Date();
    let year = d.getFullYear(),
        month = (d.getMonth() + 1) < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1),
        day = d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate(),
        hour = d.getHours() < 10 ? ('0' + d.getHours()) : d.getHours(),
        minute = d.getMinutes() < 10 ? ('0' + d.getMinutes()) : d.getMinutes();
    second = d.getSeconds() < 10 ? ('0' + d.getSeconds()) : d.getSeconds();
    return `${year}${month}${day}${hour}${minute}${second}`;
}

const datestamp = () => {
    let d = new Date();
    let year = d.getFullYear(),
        month = (d.getMonth() + 1) < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1),
        day = d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate(),
        hour = d.getHours() < 10 ? ('0' + d.getHours()) : d.getHours(),
        minute = d.getMinutes() < 10 ? ('0' + d.getMinutes()) : d.getMinutes();
    second = d.getSeconds() < 10 ? ('0' + d.getSeconds()) : d.getSeconds();
    return `${year}${month}${day}`;
}

const datestring = () => {
    let d = new Date();
    let year = d.getFullYear(),
        month = (d.getMonth() + 1) < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1),
        day = d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate();
    return `${year}-${month}-${day}`;
}

const timestring = () => {
    let d = new Date();
    let year = d.getFullYear(),
        month = (d.getMonth() + 1) < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1),
        day = d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate(),
        hour = d.getHours() < 10 ? ('0' + d.getHours()) : d.getHours(),
        minute = d.getMinutes() < 10 ? ('0' + d.getMinutes()) : d.getMinutes(),
        second = d.getSeconds() < 10 ? ('0' + d.getSeconds()) : d.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

module.exports = { timestamp, datestamp, datestring, timestring };