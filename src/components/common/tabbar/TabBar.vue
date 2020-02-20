<template>
  <div id="wrapper">
    <ul class="tab-bar">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
.tab-bar {
  display: flex;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f6f6f6;
  position: fixed;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
  padding: 5px 0;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: gray;
}
.tab-bar-item span {
  font-size: 20px;
}
</style>