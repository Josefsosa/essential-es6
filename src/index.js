/*
let
 */

let type = 'bear'

while (true) {
  let type = "polar"
  console.log(type)
  break
}
console.log(type)

/*
 * const in ES6
 */

const PI = Math.PI
//PI = 105 is not allowed

console.log("PI = " + PI)

//Constants are great for setting up permanent immutable libraries or values.
// const moment = require('moment')


/*
 * class, extends, super
 */
class Bear {
    constructor(){
      this.type = 'bear'
    }
  says (say){
    console.log(this.type + ' says ' + say)
  }
}
let bear = new Bear()
bear.says('huff')

//New extend class from Bear With super()
class Grizzly extends Bear{
  constructor(){
    super()
    this.type = 'grizzly'
  }
}

let gbear = new Grizzly()
gbear.says('growl')

/*
 * multiline strings
 */
let bears = `
    grizzly
    polar
    Koala`

/*
 * arrow functions
 */
let listbears = ['polar', 'grizly', 'koala'].filter((bear) => {
  return bear != 'koala'
})
console.log(listbears)

class Dogs{
  constructor (){
    this.type = 'Bulldog'
  }
  barks (sound){
    setTimeout(() => {
      console.log('Wait 1 second ' + this.type + ' now bark ' + sound)
    },1000)
  }
}
var dog = new Dogs()
dog.barks()

/*
* Cool real in line string concatenation style
* */
let car = 'ferarri'
let sound = 'zoom zoom'

console.log(`the red ${car} goes ${sound}`)

let cat = 'symiese'
let sonos = 'miaoo'
let petco = {cat, sonos}
console.log(petco)

let wildecat = {typo: 'tiger', many: 2}
let {typo, many} = wildecat
console.log(many, typo)

//Default Permaeters
//Old
function cabrito1 (types){
  types = types || 'grizzly'
  console.log(types)
}
cabrito1()

//New
function cabrito2 (types='grizzly'){
  console.log(types)
}
cabrito2()

function cabritos3(...tepos){
  console.log(tepos)
}
cabritos3('cabrones', 'chingones', 'reteputos', 'more')
console.log(cabritos3().toString())



