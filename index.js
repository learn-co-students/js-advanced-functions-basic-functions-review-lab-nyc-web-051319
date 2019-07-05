// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function(ad = "special") {
    return `You are ${flair}${ad}${flair}!`
  }
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2
  },
  subtract: function(num1, num2) {
    return num1 - num2
  },
  multiply: function(num1, num2) {
    return num1 * num2
  },
  divide: function(num1, num2) {
    return num1 / num2
  }
}

function actionApplyer(int, array) {
  let result = int
  for (let i = 0; i < array.length; i++) {
    result = array[i](int)
    int = result
  }
  return result
}
