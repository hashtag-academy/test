function timeConverter (unixTime){
    let timeNow = new Date(unixTime),
        months = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"],
        year = timeNow.getFullYear(),
        month = months[timeNow.getMonth()],
        date = timeNow.getDate(),
        hour = timeNow.getHours(),
        min = timeNow.getMinutes(),
        sec = timeNow.getSeconds(),
        time = `${date} ${month} ${year} року ${hour} годин${ends(hour)} ${min} хвилин${ends(min)} ${sec} секунд${ends(sec)}`
    return time
}

// function ends (number) {
//     number = number.toString()
//     if (number >= 11 && number <= 14) {
//         return ""
//     } else if (number[number.length - 1] == 1) {
//         return "а"
//     } else if (number[number.length - 1] > 1 && number[number.length - 1] < 5) {
//         return "и"
//     }
//     return ""
// }

// setInterval(() => {
//     console.log( timeConverter( Date.now() ) )
// }, 1000);

function ends (number) {
    number = number.toString().slice(-2)
    if (number >= 11 && number <= 14) {
        return "ень"
    } else if (number[number.length - 1] == 1) {
        return "ня"
    } else if (number[number.length - 1] > 1 && number[number.length - 1] < 5) {
        return "ні"
    }
    return "ень"
}

let myHRN = prompt ("Enter HRN")
alert(myHRN + " Грив" + ends(myHRN))