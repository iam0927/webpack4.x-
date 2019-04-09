import './common.css'
import './index.less'

require('./es6.js')

require('./assest/js/static.js')

import img from './spiderman.jpeg'

let photo = new Image()

photo.src = img

document.body.appendChild(photo)

function sum(a, b) {
  return a + b
}

let getSum = sum(14, 20)

console.log(getSum)
