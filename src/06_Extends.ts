;(() => {
  // 定義一個父類別
  class Person {
    name: string
    age: number
    gender: string
    constructor(name: string, age: number, gender: string) {
      this.name = name
      this.age = age
      this.gender = gender
    }
    sayHi(msg: string) {
      console.log(`i'm ${this.name}, msg=${msg}`)
    }
  }

  // 定義一個子類別
  class student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 初始化父類別,這邊就是調用父類別的建構式
      super(name, age, gender)
    }
    sayHi(msg: string): void {
      console.log(`I'm student's sayHi method. msg=${msg}`)
      super.sayHi(msg)
    }
  }

  // 創建一個student實體
  const student01: student = new student("tim", 28, "man")
  student01.sayHi("hihi")
})()
