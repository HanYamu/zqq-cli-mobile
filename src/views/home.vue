<template>
  <div class="all">
    <ui-layout>
      <ui-head title="首页" :noBack="true"></ui-head>
      <ui-container>
        <div @click="toAbout({name: 'test1'})">{{msg1}}</div>
        <div @click="toAbout({name: 'test2'})">{{msg2}}</div>
      </ui-container>
    </ui-layout>
    <!-- 如果有一些需要定位的标签或者弹框，请写在layout下面， -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      msg1: "click me to test1",
      msg2: "click me to test2"
    };
  },
  created() {
    this.ajaxTest();
  },
  methods: {
    toAbout(view) {
      this.$router.push(view);
    },
    ajaxTest() {
      this.$post("homePropGetTopSuanli").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less">
.all {
  height: 100%;
  height: 100%;
}
</style>
