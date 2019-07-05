function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
function mondayWork(work = "go to the office"){
  return `This Monday, I will ${work}.`
}
function wrapAdjective(string="*"){
  return function(adjective="special"){
    return `You are ${string}${adjective}${string}!`
  }
}

const Calculator = {
  add: function() {
    return 1 + 3
  },
  subtract: function(){
    return 1 - 3
  },
  multiply: function(){
    return 1 * 3
  },
  divide: function(){
    return 10/5
  }
}

let actionApplyer = function(integer, array) {
  let a = integer
  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }
  return a
}//why does

// function actionApplyer(integer, array){
//   let i = 0
//   let value1 = array[i](integer)
//   let value2 = array[i + 1](value1)
//   let value3 = array[i + 2](value2)
//   return value3
// }
// function actionApplyer(integer, array) {
// 	let newArray = []
//   for (let i = 0; i < array.length; i++) {
//     let value = array[i](integer)
// 	   newArray.push(value)
//   }
// 	return newArray.length
// }
