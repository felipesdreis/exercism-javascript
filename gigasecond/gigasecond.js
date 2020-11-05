//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (oldDate) => {  
  var addTime =  Math.pow(10,9);
  oldDate.setSeconds(oldDate.getSeconds() + addTime);
  return oldDate
};
