// Code your solution in this file!

const returnFirstTwoDrivers=(myArray)=>(myArray.slice(0,2));

const returnLastTwoDrivers =(myArray)=>(myArray.slice(-2));

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(number){
    const cb=(fare)=>(fare*number);

    return cb;
}


const  fareDoubler =(fare)=>(createFareMultiplier(2)(fare));

const  fareTripler =(fare)=>(createFareMultiplier( 3)(fare));



console.log(fareDoubler(10));

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){



return returnFirstTwoDrivers(drivers);
}

