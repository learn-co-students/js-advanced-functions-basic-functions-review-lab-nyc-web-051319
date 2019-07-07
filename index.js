// Your code here

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap="*") {
  return function(adjective="special") {
    return `You are ${wrap}${adjective}${wrap}!`
  }
}

let Calculator = {
  add: function() {
    return 1 + 3
  },
  subtract: function() {
    return 1 - 3
  },
  multiply: function() {
    return 1 * 3
  },
  divide: function() {
    return 10 / 5
  }
}

function actionApplyer(int, arr) {
  if (arr.length === 0) {
    return int
  } else {
    let result = int
    for (var i = 0; i < arr.length; i++) {
      result = arr[i](result)
    }
    return result
  }
}
