;(() => {
  // 1. 定義一個介面
  interface IFly {
    // fly()只有皮,沒有內容
    fly()
  }

  // 2. 定義一個類,類別就是上面定義的介面
  class Person1 implements IFly {
    //實現介面的方法
    fly() {
      console.log("I can fly now.")
    }
  }

  const person01: Person1 = new Person1()
  person01.fly()

  interface ISwim {
    swim()
  }

  // 3. 定義一個類去實現IFly與ISwim,兩個介面
  class Person2 implements IFly, ISwim {
    fly() {
      console.log("I can fly now. I'm Supper-Man.")
    }
    swim() {
      console.log("I can swim now")
    }
  }

  const person02: Person2 = new Person2()
  person02.fly()
  person02.swim()

  // 4. 使用介面去繼承其他介面
  interface IAbility extends IFly, ISwim {}

  class Person3 implements IAbility {
    fly() {
      console.log("I can fly now. I'm Supper-Man. i'm invincible.")
    }
    swim() {
      console.log("I can swim now. There's notthing can faster than me.")
    }
  }

  const person03: Person3 = new Person3()
  person03.fly()
  person03.swim()
})()
