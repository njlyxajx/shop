<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h2 slot="center">购物街</h2>
    </nav-bar>
    <main-swiper :res="banners" class="swiper"></main-swiper>
    <recommend-view :recommend="recommends"></recommend-view>
    <div class="center-picture">
      <img src="~assets/img/homeMenu.jpg" alt />
    </div>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :goods="goods['pop'].list">
    </goods-list>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import MainSwiper from "components/common/swiper/MainSwiper";
import RecommendView from "./RecommendView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeData, getHomeGoods} from "network/home"; //单独封装函数方便日后维护

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    };
  },
  components: {
    NavBar,
    MainSwiper,
    RecommendView,
    TabControl,
    GoodsList
  },

  created() {
    //生命周期函数，组件被创建开始网路数据
    //1、请求多个数据
    this.getHomeData();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
    getHomeData(){
      getHomeData().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    //封装请求函数 便于多次调用请求数据
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res =>{
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style>
.home-nav {
  color: var(--color-tint);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}
.center-picture img {
  width: 100%;
}
.swiper {
  margin-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>