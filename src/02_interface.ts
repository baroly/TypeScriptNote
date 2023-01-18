;(() => {
  interface IPerson {
    readonly id: number
    name: string
    age: number
    sex?: string
  }

  const person: IPerson = {
    id: 1,
    name: "FuyuNana",
    age: 28,
  }
})()
