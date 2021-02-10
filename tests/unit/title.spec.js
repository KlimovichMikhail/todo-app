import { mount } from "@vue/test-utils";
import Title from "@/components/Title.vue";

describe("Title.vue", () => {
  it("отрисовывает заголовок", () => {
    const wrapper = mount(Title);

    console.log(wrapper.html());
  });
});
