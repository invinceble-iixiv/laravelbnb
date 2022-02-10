
require("./bootstrap");
window.Vue = require('vue');
import VueRouter from "vue-router";
import router from "./routes";


Vue.component(
    'example-component',
     require('./components/ExampleComponent.vue').default()
     );

Vue.use(VueRouter);

 const app = new Vue({
     el: '#app',
     router,
});


