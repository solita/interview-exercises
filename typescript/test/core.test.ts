import { helloWorld } from "../src/core"

describe("core", () => {
  test("Hello World returns nothing", () => {
    expect(helloWorld()).toBeUndefined()
  })
})