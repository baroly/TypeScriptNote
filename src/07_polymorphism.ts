;(() => {
  // 定義父類別
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }

    run(distance: number = 5) {
      console.log(`${this.name} is run about ${distance} meters`)
    }
  }

  // 定義第一個子類別
  class Dog extends Animal {
    name: string
    constructor(name: string) {
      super(name)
      this.name = name
    }
    run(distance: number = 10) {
      console.log(`${this.name} is run about ${distance} meters`)
    }
  }
  // 定義第二個子類別
  class Cat extends Animal {
    name: string
    constructor(name: string) {
      super(name)
      this.name = name
    }
    run(distance: number = 15) {
      console.log(`${this.name} is run about ${distance} meters`)
    }
  }

  // 一般建立實體方式
  console.log("Normally\n=================")
  const dog1: Dog = new Dog("Doly")
  const cat1: Cat = new Cat("Lily")
  dog1.run()
  cat1.run()

  // 多形建立實體方式
  console.log("\n\nPolymorphism\n=================")
  const dog2: Animal = new Dog("Bamboo")
  const cat2: Animal = new Cat("Kity")
  dog2.run()
  cat2.run()

  // 使用方式
  console.log("\n\nHow to use polymorphism\n=================")
  function showRun(ani: Animal) {
    ani.run()
  }
  showRun(new Dog("Barky"))
  showRun(new Cat("Pagy"))
})()
