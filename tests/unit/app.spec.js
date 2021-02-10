import { shallowMount, createLocalVue } from "@vue/test-utils";
import { createStore } from "vuex";
import App from "../../../src/App";

const localVue = createLocalVue();
localVue.use(createStore);

describe("unit tests for App", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      setState: jest.fn()
    };
    store = new createStore.Store({
      actions
    });
  });

  test("contain a App", () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.contains("div")).toBeTruthy();
  });
});
