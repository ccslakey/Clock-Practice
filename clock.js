var moment = require('moment');


function Clock(time) {
    if (time) {
        return this.time = moment().format(time);
    } else {
        this.time = moment().format();
        return this
    }
}


// instantiate a clock
var clock = Clock();
console.log(clock.time)