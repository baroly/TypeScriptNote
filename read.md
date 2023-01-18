語法與規則
===
###### tags: `tyscript`
- [教學網址](https://www.youtube.com/playlist?list=PLmOn9nNkQxJEfr-CKr9KoHWFoWj_7glnx)
- [教學筆記網址](https://24kcs.github.io/vue3_study/00_%E8%AF%BE%E7%A8%8B%E4%BB%8B%E7%BB%8D.html)
# 調用其他 .ts
- 在```a.ts```中調用另一個```b.ts```，語法如下 **(a.ts與ab.ts是相同路徑下)**
    - a.ts
        ```typescript=
        import "./b"
        document.write("It just a trush message")
        ```
    - b.ts
        ```typescript=
        ;(() => {
          console.log("Test")
        })()
        ```

# Base-基本類型
- TypeScript支持JavaScript幾乎相同的資料類型，還額外提供實用的列舉類型方便使用

## boolean
- code
    ```typescript=
    //boolean
    let check: boolean = true
    console.log(check)
    ```

## number
- code
    ```typescript=
    // number
    let a1: number = 10 // 十進制
    let a2: number = 0b1000 // 二進制
    let a3: number = 0o77 // 八進制
    let a4: number = 0xa0 // 十六進制
    console.log(a1 + "_" + a2 + "_" + a3 + "_" + a4)
    ```

## string
- code
    ```typescript=
    // string
    let s1: string = "床前明月光,"
    let s2: string = "疑似地上霜,"
    let s3: string = "舉頭望明月,"
    let s4: string = "低頭吃便當。"
    console.log(`${s1}${s2}`)
    console.log(`${s3}${s4}`)
    ```

- 可以直接拚接string
    ```typescript=
    // string + number
    let mess: string = " 對我來說就是零錢"
    let money01: number = 100000000
    console.log(money01 + mess)
    ```

## Undefined、null
- 兩者可以成為其他類型的子類型，也就是說其他類型宣告後可以賦值```Undefined``` **or** ```null```， **但前提是要先把```tsconfig.json```內的```"strict"```配置改成```false```**

- code- 基本配置
    ```typescript=
    //undefined、null
    let nll: null = null
    let udefined: undefined = undefined
    console.log(nll)
    console.log(udefined)
    ```
- code- 其他類型賦予```undefined``` or ```null```
    ```typescript=
    let a5: number = undefined
    console.log(a5)
    ```

## Array
- code
    ```typescript=
    // Array
    // defind01
    let arr1: number[] = [1, 2, 3, 4]
    console.log(arr1)
    // defind02
    let arr2: Array<number> = [5, 6, 7, 8]
    console.log(arr2)
    ```

## Tuple--元組
1. Array只能定義同類型，如果想要有不同類型就要使用元組
2. 一開始就定義好元組規則，連同空間大小都被定義好
3. 內容的順序必須依找宣告的順序，並且內容不能多也不能少
- code
    ```typescript=
    // tuple-元組
    let arr3: [string, number, boolean] = ["Tim", 1000, false]
    console.log(arr3)
    ```

## enum-列舉
1. Enum的類宣告好後，默認從零開始編號
2. 可以自定義編號
3. 可以透過array的取值方式，反向獲得Enum的值
- code- 默認編號
    ```typescript=
    // enum
    enum Color {
        red,
        blue,
        green,
    }
    let color1: Color = Color.blue
    console.log(color1)
    console.log(Color.red + "_" + Color.blue + "_" + Color.green)
    //這邊輸出為: 0_1_2
    ```

- code- 自定義編號- 01
    ```typescript=
    // enum
    enum Color {
        red = 1,
        blue,
        green,
    }
    let color1: Color = Color.blue
    console.log(color1)
    console.log(Color.red + "_" + Color.blue + "_" + Color.green)
    //這邊輸出為: 1_2_3
    ```

- code- 自定義編號- 02
    ```typescript=
    // enum
    // enum
    enum Color {
        red = 1,
        blue = 4,
        green = 8,
    }
    let color1: Color = Color.blue
    console.log(color1)
    console.log(Color.red + "_" + Color.blue + "_" + Color.green)
    //這邊輸出為: 1_4_8
    ```

- code- 獲得Enum元素
    ```typescript=
    // enum- get element
    enum Color {
        red,
        blue,
        green,
    }
    console.log(Color[1])
    //這邊輸出為: blue
    ```

## any
1. 用於開發過程中，在未知接收值的屬性時使用
2. 用於接收值的屬性分辨，分辨好再給予相對應的類型
- code
    ```typescript=
    // any
    let value1: any = 100
    console.log(value1)
    value1 = 'it maybe a string'
    console.log(value1)
    let arr4: any[] = [1000, "lalala", true]
    console.log(arr4)
    ```

## void
1. 用於方法沒有回傳值時使用
2. 告知開發者該方法沒有回傳內容
- code
    ```typescript=
    // void
    function printMsg(): void {
    console.log("I just want to go home~~~")
    }
    console.log(printMsg())
    // 這邊輸出為: I just want to go home~~~
    //            undefined
    ```

## object
- code
    ```typescript=
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
    ```


## 聯合類型
- 用於取值時，為多種類型的其中一種
- code
    ```typescript=
    // 聯合類型
    function getData(data: string | number) {
    return data
    }
    console.log(getData(123))
    console.log(getData("haha"))
    // console.log(getData(true)) // it's error here
    ```

## 類型斷言
- 用於告訴編譯器，知道自己在做什麼，以至於不會編譯失敗
- 使法有兩種

|(<類型>變數名)|(變數名 as 類型)|
|--|--|
- code
    ```typescript=
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
    ```

## 類型推斷
- typescript會在沒有明確指定類型的情況下，自動推斷一個類型 **(如:Python)**
- code
    ```typescript=
    // 類型推斷
    let msg = 123
    // msg = 'yayaya'   // 這邊會抱錯，因為上面TS會推斷msg為number，所以不能再賦予number以外的value
    console.log(msg)

    let msgAng // 這邊在宣告時，直接不放值，編譯器會自動宣告成any
    msgAng = 123
    msgAng = "yoyoyo"
    console.log(msgAng)
    ```

# Interface-介面
1. TS的核心原則之一，用於對物件所具有的內部屬性，做結構類型檢查
2. 使用Interface來規範類型

## 介面初探
- 需求: 創建一個類別，需要對其屬性進行類別規範，規範如下

    |屬姓名|型別|Nullable|權限|
    |--|--|--|--|
    |id|number|false|read only|
    |name|string|false|--|
    |age|number|false|--|
    |sex|string|true|--|

1. 定義一個介面，來規範類中的屬性類別
    ```typescript=
    interface IPerson {
        id: number
        name: string
        age: number
        sex: string
    }
    ```

2. 創建一個物件，類別指定前面創建的介面
    ```typescript=
    const person: IPerson = {
        id: 1,
        name: "Tim",
        age: 28,
        sex: "woman",
    }
    ```

3. 使用關鍵字```readonly```宣告該屬性只能讀取，不能修改
    - 語法:
    ```typescript=
    readonly '變數名': 類別
    ```
    - code
    ```typescript=
    interface IPerson {
        readonly id: number
        name: string
        age: number
        sex: string
    }
    ```

4. 使用關鍵字```?```，設定該屬性在創建時，可以先不填，也就是可為nullable
    - 語法:
    ```typescript=
    '變數名'?: 類別
    ```
    - code
    ```typescript=
    interface IPerson {
        readonly id: number
        name: string
        age: number
        sex?: string
    }
    ```

5. 到這邊就完成需求，依照介面```IPerson```，創建物件方式可以如下
    ```typescript=
    const person1: IPerson = {
        id: 1,
        name: "FuyuNana",
        age: 28,
    }
    const person2: IPerson = {
        id: 1,
        name: "FuyuNana",
        age: 28,
        sex: 'woman'
    }
    ```

## 可選屬性
- 透過使用關鍵字```?```關鍵字，來定義該屬性可以不填
- 語法:
    ```typescript=
    '變數名'?: 類別
    ```

## 只讀屬性
- 使用關鍵字```readonly```宣告該屬性只能讀取，不能修改
- 當作 **變數** 使用時，使用```const```
- 當作 **屬性** 使用時，使用```readonly```
- 語法:
    ```typescript=
    readonly '變數名': 類別
    ```

## 函數類型
- 通過介面的方式作為函數的類型來使用
    1. 為了使用介面表示函數類型，需要給介面定義一個調用簽名
    2. 就像是一個只有參數列表和返回職類型的函數定義
    3. 參數列表裡的每個參數都需要名子和類型

- code
    ```typescript=
    // 1. 定義一個介面,用來做為某個函數的類型使用
    interface ISearchFun {
        (sourceData: string, substring: string): boolean
    }

    // 2. 定義一個函數,該類型就是上面定義的介面
    const searchString: ISearchFun = function (
        sourceData: string,
        substring: string
    ): boolean {
        return sourceData.search(substring) > -1
    }

    // 3. 調用函數
    console.log(searchString("Go home Bro", "Go"))
    // 這邊輸出true
    ```

## 類類型
- 使類別來實作介面
    - 與```java```或```C#```的介面基本作用一樣，TS可以用它來明確的強制一個類去符合規範

- code
    ```typescript=
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
    ```

## 一個類可以實現多個介面
- 類別透過```,```可以來實現多個介面

- code
    ```typescript=
    // 1. 定義第一個介面
    interface IFly {
        fly()
    }

    // 2. 定義第二個介面
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
    ```

## 介面繼承介面
- 使用```extends```,讓介面來繼承介面,方便之後實作時不需要將介面全部列出

- code
    ```typescript=
    interface IFly {
        fly()
    }

    // 2. 定義第二個介面
    interface ISwim {
        swim()
    }
    // 3. 使用介面去繼承其他介面
    interface IAbility extends IFly, ISwim {}

    // 4. 類別實作介面
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
    ```

# Class-類

## 基本範例


## 繼承

## 修飾符--公共、私有、保護

## readonly修飾符

## 存取器

## 靜態屬性

## 抽象類
- code
```typescript=

```
# Function-函數

# Generics-泛型

# Other-其他