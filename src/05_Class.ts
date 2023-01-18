;(() => {
  // TS中,類的定義與使用
  class Person {
    // 定義屬性
    name: string
    age: number
    gender: string
    // 定義建構函數
    // 可以在屬性宣告後,直接賦值,當創建實體十,沒有填入,將會使用這邊輸入的預設值
    constructor(
      name: string = "Leo",
      age: number = 25,
      gender: string = "man"
    ) {
      // 對實體內的屬性進行初始化
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 定義實體方法
    sayHi(msg: string) {
      console.log(`HI, my name is ${this.name}.`, msg)
    }
  }

  const person01: Person = new Person("Tim", 28, "man")
  person01.sayHi("Go home.")
  const person02: Person = new Person()
  person02.sayHi("I want go home.")
})()
