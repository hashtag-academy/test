// function timeConverter (unixTime){
//     let timeNow = new Date(unixTime),
//         months = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"],
//         year = timeNow.getFullYear(),
//         month = months[timeNow.getMonth()],
//         date = timeNow.getDate(),
//         hour = timeNow.getHours(),
//         min = timeNow.getMinutes(),
//         sec = timeNow.getSeconds(),
//         time = `${date} ${month} ${year} року ${hour} годин${ends(hour)} ${min} хвилин${ends(min)} ${sec} секунд${ends(sec)}`
//     return time
// }

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

// function ends (number) {
//     number = number.toString().slice(-2)
//     if (number >= 11 && number <= 14) {
//         return "ень"
//     } else if (number[number.length - 1] == 1) {
//         return "ня"
//     } else if (number[number.length - 1] > 1 && number[number.length - 1] < 5) {
//         return "ні"
//     }
//     return "ень"
// }

// let myHRN = prompt ("Enter HRN")
// alert(myHRN + " Грив" + ends(myHRN))


function rand (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function round (num) {
    return Math.floor(num * 100) / 100
}

class Car {
    static carBrands = ["Audi", "BMW", "KIA", "Renault", "Tesla"]
    constructor(fuel = rand(0, 42), acum = rand(0, 100)){
        this.carBrand = Car.carBrands[rand(0, Car.carBrands.length - 1)]
        if (this.carBrand != "Tesla") {
            this.fuel = fuel
        }
        this.acum = acum
    }
    set acumLevel (level) {
        this.acum = round(this.acum + level)
        if (this.acum > 100) {
            this.acum = 100
        } else if (this.acum < 0) {
            this.acum = 0
        }
    }
    set fuelLevel (level) {
        this.fuel = round(this.fuel + level)
        if (this.fuel < 0) {
            this.fuel = 0
        } else if (this.fuel > 42) {
            alert("Your fuel tank is full")
            this.fuel = 42
        }
    }
    drive (distance) {
        if (this.acum == 0) {
            alert("No acum!")
            return
        }
        if (this.fuel == 0 && this.carBrand != "Tesla") {
            alert("No fuel!")
            return
        }
        console.log(`Your ${this.carBrand} ready to drive`)
        for (let i = 1; i <= distance && this.acum > 0; i++) {
            if (this.carBrand == "Tesla") {
                this.acumLevel = -0.6
                console.log(`You have driven ${i}km\nAcum level ${this.acum}`)
                continue
            }
            if (this.fuel <= 0) break
            this.fuelLevel = -0.1
            this.acumLevel = 0.05
            console.log(`You have driven ${i}km\nFuel in the tank ${this.fuel}\nAcum level ${this.acum}`)
        }
        if (this.acum > 0 && this.carBrand == "Tesla" || this.fuel > 0) {
            alert("You have arrived to the right place")
        } else {
            alert("Hueston we got a problem!")
        }
    }
}

const myCar = new Car ()
console.dir(myCar)