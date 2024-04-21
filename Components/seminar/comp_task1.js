"use strict";
Vue.component("counter", {
  template: `<div>
            <p>{{ counter }}</p>
            <button @click='counterPlus'>+</button>
            <button @click='counterMinus'>-</button>
        </div>`,
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    counterPlus() {
      this.counter++;
    },
    counterMinus() {
      this.counter--;
    },
  },
});

new Vue({
  el: "#app",
});
