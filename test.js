import { assert } from "chai";
import descendingOrder from "./Descending-Order/Descending-Order-Solution.js";
const DescendingTests = () => {
  describe("Basic tests", () => {
    // Define an individual test case
    it("Testing for fixed tests", () => {
      assert.strictEqual(descendingOrder(0), 0);
      assert.strictEqual(descendingOrder(1), 1);
      assert.strictEqual(descendingOrder(111), 111);
      assert.strictEqual(descendingOrder(15), 51);
      assert.strictEqual(descendingOrder(1021), 2110);
      assert.strictEqual(descendingOrder(123456789), 987654321);
    });
  });
}

DescendingTests();