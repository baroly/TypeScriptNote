;(() => {
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
})()
