// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}; 

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
};

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function(x) {
        return x * 5
    }
};

const increased  = createFareMultiplier();

function fareDoubler(increased) {
    return (increased * 2)
};

function fareTripler(increased) {
    return (increased * 3)
} 

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}