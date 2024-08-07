import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AppHeader from "../components/AppHeader.vue";

describe("AppHeader.vue", () => {
  it("renders the header correctly", () => {
    const wrapper = mount(AppHeader, {});

    const svg = wrapper.find("svg");
    expect(svg.exists()).toBe(true);
  });
});
