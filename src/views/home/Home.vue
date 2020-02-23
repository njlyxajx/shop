<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h2 slot="center">购物街</h2>
    </nav-bar>
    <main-swiper :res="banners"></main-swiper>
    <recommend-view :recommend="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import MainSwiper from 'components/common/swiper/MainSwiper';
import RecommendView from './RecommendView'
import {getHomeData} from 'network/home' //单独封装函数方便日后维护
export default {
  name:'Home',
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  components:{
    NavBar,
    MainSwiper,
    RecommendView,
  },
  
  created(){  //生命周期函数，组件被创建开始网路数据
    //1、请求多个数据
    getHomeData().then(res =>{
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
    
  } 
}
</script>

<style>
  .home-nav{
    color:var(--color-tint);
  }

  
</style>