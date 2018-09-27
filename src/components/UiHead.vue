<template>
    <div class="ui-head">
      <div class="head-left">
        <div v-if="!noBack" class="head-back" @click="back"></div>
        <slot name="left"></slot>
      </div>
      <div class="head-title">
        <p v-text="title" class="head-title-text"></p>
      </div>
      <div class="head-right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    backClick: {
      type: Function
    },
    noBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      if (this.backClick) {
        this.backClick();
      } else {
        this.$back();
      }
    }
  }
};
</script>

<style lang="less">
@import "../style/variable.less";
.ui-head {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background-color: @bg-head;
  padding-top: @head-top;
  color: #fff;
  .head-left {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    overflow: hidden;
  }
  .head-back {
    width: 35px;
    height: 35px;
    background: url(../assets/img/back-zqq.png) no-repeat center;
    background-size: 20px 20px;
  }
  .head-title {
    flex: 1;
    height: @head-height;
    line-height: @head-height;
    text-align: center;
    .head-title-text {
      width: 100%;
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .head-right {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    overflow: hidden;
  }
}
</style>
