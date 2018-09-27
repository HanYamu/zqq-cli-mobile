<template>
  <ui-layout>
    <ui-head title="测试"></ui-head>
    <ui-container>
      <div>{{msg}}</div>
    </ui-container>
  </ui-layout>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      msg: "hello word"
    };
  },
  methods: {}
};
</script>
