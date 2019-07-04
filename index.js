function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*") {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`
    }
}

const Calculator = {
    add: function(n1, n2){return n1 + n2},
    subtract: function(n1, n2){return n1 - n2},
    multiply: function(n1, n2){return n1 * n2},
    divide: function(n1, n2){return n1 / n2}
}

function actionApplyer(startInt, functArray) {
    functArray.forEach(element => {
        startInt = element(startInt)
    })
    return startInt
}