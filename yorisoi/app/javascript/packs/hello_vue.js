/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from "vue";
import App from "../app.vue";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      dark: {
        primary: "#09194F",
        secondary: "#00808A",
        white: "#fefefe",
        gray: "#1a1a1a",
      },
      light: {
        primary: "#09194F",
        secondary: "#00808A",
        white: "#fefefe",
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const el = document.body.appendChild(document.createElement("hello"));

  const app = new Vue({
    vuetify,
    el,
    render: (h) => h(App),
  }).$mount("#app");
});
