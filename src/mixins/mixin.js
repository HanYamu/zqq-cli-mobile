import Vue from "vue";
import UiLayout from "../components/UiLayout.vue";
import UiHead from "../components/UiHead.vue";
import UiContainer from "../components/UiContainer.vue";
Vue.mixin({
  components: { UiLayout, UiHead, UiContainer },
  data() {
    return {};
  },
  methods: {
    $loading() {
      this.$store.commit("setAjaxLoading", true);
    },
    $loaded() {
      this.$store.commit("setAjaxLoading", false);
    },
    $to(view) {
      this.$router.push(view);
    },
    $back() {
      this.$store.commit("setTransitionName", "pop-out");
      window.history.back("-1");
    }
  }
});
