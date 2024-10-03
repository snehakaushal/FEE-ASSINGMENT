const car = {
    brand: "swift",
    model: "nano",
    year: 2021,
    start() {
        console.log("ok");
    },
    stop() {
        console.log("not ok");
    }
};

console.log(car.brand);  
console.log(car.model);  


car.start();  
car.stop();   
