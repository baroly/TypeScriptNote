// BaseClass
;(() => {
  // boolean
  let check: boolean = true
  console.log(check)

  // number
  let a1: number = 10 // 十進制
  let a2: number = 0b1000 // 二進制
  let a3: number = 0o77 // 八進制
  let a4: number = 0xa0 // 十六進制
  console.log(a1 + "_" + a2 + "_" + a3 + "_" + a4)

  // string
  let s1: string = "床前明月光,"
  let s2: string = "疑似地上霜,"
  let s3: string = "舉頭望明月,"
  let s4: string = "低頭吃便當。"
  console.log(`${s1}${s2}`)
  console.log(`${s3}${s4}`)

  // string + number
  let mess: string = " 對我來說就是零錢"
  let money01: number = 100000000
  console.log(money01 + mess)

  // undefined、null
  let nll: null = null
  let udefined: undefined = undefined
  console.log(nll)
  console.log(udefined)

  let a5: number = undefined
  console.log(a5)

  // Array
  // defind01
  let arr1: number[] = [1, 2, 3, 4]
  console.log(arr1)
  // defind02
  let arr2: Array<number> = [5, 6, 7, 8]
  console.log(arr2)

  // tuple-元組
  let arr3: [string, number, boolean] = ["Tim", 1000, false]
  console.log(arr3)

  // enum
  enum Color {
    red,
    blue,
    green,
  }
  let color1: Color = Color.blue
  console.log(color1)
  console.log(Color.red + "_" + Color.blue + "_" + Color.green)

  // enum- get element
  console.log(Color[1])

  // any
  let value1: any = 100
  console.log(value1)
  value1 = "it maybe a string"
  console.log(value1)
  let arr4: any[] = [1000, "lalala", true]
  console.log(arr4)

  // void
  function printMsg(): void {
    console.log("I just want to go home~~~")
  }
  console.log(printMsg())

  // Object
  function getObj(obj: object): object {
    console.log(obj)
    return {
      name: "卡卡西",
      age: 29,
    }
  }
  console.log(getObj({ name: "佐助", age: "man" }))
  // print: {name: '佐助', age: 'man'}
  //        {name: '卡卡西', age: 29}
  // console.log(getObj('aa'))  it's error here
  console.log(new String("aa")) //it's ok here
  // print: String {'aa'}
  console.log(String)
  // print: String() { [native code] }

  // 聯合類型
  function getData(data: string | number) {
    return data
  }
  console.log(getData(123))
  console.log(getData("haha"))
  // console.log(getData(true)) // it's error here

  // 類型斷言
  function getData01(data: string | number): number {
    if ((<string>data).length) {
      return (data as string).length
    } else {
      return data.toString().length
    }
  }
  console.log(123)
  console.log("123")

  // 類型推斷
  let msg = 123
  // msg = 'yayaya'   // 這邊會抱錯，因為上面TS會推斷msg為number，所以不能再賦予number以外的value
  console.log(msg)

  let msgAng // 這邊在宣告時，直接不放值，編譯器會自動宣告成any
  msgAng = 123
  msgAng = "yoyoyo"
  console.log(msgAng)
})()
