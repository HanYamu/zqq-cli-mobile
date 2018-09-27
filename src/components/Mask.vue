<template>
    <div :class="hidden ? 'ui-dialog' : 'ui-dialog hidden'" @click.capture.self="dialogClick">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    dialogClick() {
      this.$emit("dialog-click", "dialogClick OK");
    }
  }
};
</script>

<style lang="less">
.ui-dialog {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.35);
}
.hidden {
  display: none;
}
</style>
