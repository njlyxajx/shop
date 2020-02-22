<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.left {
  width: 60px;
}

.right {
  width: 60px;
}
.nav-bar {
  display: flex;
  height: 44px;
  background-color: lightpink;
}
.center {
  flex: 1;
  text-align: center;
  line-height: 44px;
  color: aliceblue;
}
</style>