sleepDebtCalculator.js

/* This is a sleep debt calculator. The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal. 
*/
const getSleepHours = function (day) {
  if (day === 'monday') { 
    return 8;
  } else if (day === 'tuesday') { 
      return 7; 
  } else if (day === 'wednesday') { 
      return 6; 
  } else if (day === 'thursday') { 
      return 3; 
  } else if (day === 'friday') { 
      return 8; 
  } else if (day === 'saturday') { 
      return 12; 
  } else if (day === 'sunday') { 
      return 10; 
  } else { 
      return 'Please type a valid day of the week.'
  }
}; // defines number of hours slept each day

console.log(getSleepHours('monday'))
// test - works

const getActualSleepHours = function () {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 
}; // gets the number of hours slept each night

const getIdealSleepHours = function () {
  const idealHours = 8
    return idealHours * 7
}; // set the ideal weekly hours of sleep

console.log('This week you have slept for a total amount of' + ' ' + getActualSleepHours() + ' hours.')
console.log('You should have slept for ' + getIdealSleepHours() + ' hours!')
// test function works

const calculateSleepDebt = function() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    return 'You have got the perfect amount of sleep.' 
  } else if (actualSleepHours > idealSleepHours) {
    return 'You have overslept' + ' ' + actualSleepHours - idealSleepHours + 'hours.'
  } else if (actualSleepHours < idealSleepHours) {
    return 'Get some rest. You should sleep' + ' ' + (idealSleepHours - actualSleepHours) + ' ' + 'hours more.'
  }
};
 
 console.log(calculateSleepDebt())
 // test, function works