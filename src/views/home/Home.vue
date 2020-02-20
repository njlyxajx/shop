<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h2 slot="center">购物街</h2>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'Home',
  components:{
    NavBar
  }
}
</script>

<style>
  .home-nav{
    color:var(--color-tint);
  }
  .center{
    flex: 1;
    text-align: center;
    line-height: 44px;
    color: aliceblue
  }
  .nav-bar{
    display: flex;
    height: 44px;
    background-color: lightpink
  }
</style>