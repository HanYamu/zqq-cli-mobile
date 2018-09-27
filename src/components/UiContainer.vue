<template>
    <div class="ui-container">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.ui-container {
  flex: 1;
  overflow: auto;
  // &&::-webkit-scrollbar {
  //   display: none;
  // }
}
</style>
