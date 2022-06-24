let d = new Date();
const localOffset = d.getTimezoneOffset();
d = addMinutes(d, localOffset);
console.log(d);