<template>
  <div class="totop">
    <span class="iconfont">&#xe614;</span>
  </div>
</template>

<script>
export default {
  name:'ToTop'
}
</script>

<style>
.totop{
  position: fixed;
  bottom: 10%;
  right: 5%;
}
.totop span{
  font: 2em bold;
  color: #f40;
  background-color: #fff;
  border-radius: 50%;
}
</style>