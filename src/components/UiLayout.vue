<template>
    <div class="ui-layout">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../style/variable.less";
.ui-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: @bg-countainer;
}
</style>
