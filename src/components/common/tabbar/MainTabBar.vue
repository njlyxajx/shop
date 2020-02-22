<template>
   <tab-bar>
      <tab-bar-item path="/home">
        <span slot="item-icon" class="iconfont">&#xe600;</span>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <span slot="item-icon" class="iconfont">&#xe61e;</span>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <span slot="item-icon" class="iconfont">&#xe613;</span>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profiles">
        <span slot="item-icon" class="iconfont">&#xe607;</span>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
export default {
  name:"MainTabBar",
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style>

</style>