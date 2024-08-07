import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import IntroBanner from "../components/IntroBanner.vue";

describe("IntroPreview.vue", () => {
  it("renders the component correctly", () => {
    const wrapper = mount(IntroBanner);

    const paragraph = wrapper.find("p");
    expect(paragraph.exists()).toBe(true);
    expect(paragraph.text()).toBe(
      "Search for the book you want, add it to your cart and order. The best books are here! Start searching now!"
    );

    const heading = wrapper.find("h1");
    expect(heading.exists()).toBe(true);
    expect(heading.text()).toBe("The most popular books are here!");
  });
});
