import Loading from "../Loading";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

// 测试分组
describe("Loading", () => {
  // mount
  test("should change slot when using slot", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Loading, {
      slots: {
        default: "Button",
      },
    });

    debugger;

    // 断言
    expect(wrapper.text()).toBe("Button");
  });
});
