//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (arrColors) => {
  var n = ""

  arrColors.forEach(color => {
    var i = COLORS.indexOf(color)
    if(n.length == 2) return false;
    n = n + i.toString()
  });

  return parseInt(n)
};

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];