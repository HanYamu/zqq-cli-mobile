import Vue from "vue";
import App from "./App.vue";
/** 引入路由 */
import router from "./router/router";
/** 引入vuex */
import store from "./store/store";
/** 引入过滤器 */
import "./filter/filter";
/** 引入vue全局混合 */
import "./mixins/mixin";
/** 引入localStorage */
import localStorage from "store";
Vue.prototype.$ls = localStorage;
/** 引入axios配置 */
import { axiosGet, axiosPost } from "./utils/ajax.js";
Vue.prototype.$get = axiosGet;
Vue.prototype.$post = axiosPost;
/** mint-ui */
import "mint-ui/lib/style.css";
import {
  Toast,
  MessageBox,
  InfiniteScroll,
  Spinner,
  DatetimePicker,
  Switch,
  Picker,
  Loadmore,
  Actionsheet,
  Popup
} from "mint-ui";
Vue.use(InfiniteScroll);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Switch.name, Switch);
Vue.component(Spinner.name, Spinner);
Vue.component(Picker.name, Picker);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Popup.name, Popup);
Vue.prototype.$toast = Toast;
Vue.prototype.$messageBox = MessageBox;

/** 引入样式 放于mint-ui之后便于重置某些mint-ui的样式 */
import "./style/index.less";
/** 设置为 false 以阻止 vue 在启动时生成生产提示。 */
Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
