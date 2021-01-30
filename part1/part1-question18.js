let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

function isOdd(num) { return num % 2;}

for (let i in statistics) {
    //console.log(statistics[i])


    if (i.charAt(0) == 'r') {
        console.log(`${statistics[i]}`);
    } else if (isOdd(statistics[i])) {
        console.log("He")
    }
}