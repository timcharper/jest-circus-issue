const { getState } = require("jest-circus");

function isStateSymbol(k) {
  return typeof k === "symbol" && k.toString().includes("STATE_SYMBOL");
}

describe("lol", () => {
  console.log(getState().currentDescribeBlock);
  const stateKeys = Reflect.ownKeys(global).filter(isStateSymbol);
  const stateFromGlobal = stateKeys.map((k) => global[k].currentDescribeBlock);
  console.log(stateKeys);
  console.log({ stateFromGlobal });
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});
