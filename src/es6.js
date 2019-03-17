let fn1 = (...res) => {
  console.log.apply(console, res)
}

let obj = {
  name: '赵四',
  age: 19
}

fn1(obj)

@people
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  work () {
    console.log(this.name + '正在大笑')
  }
}

let P1 = new Person('李四', 25)

P1.work()

function people(target) {
  console.log(target)
}
