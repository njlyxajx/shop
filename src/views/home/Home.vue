<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h2 slot="center">购物街</h2>
    </nav-bar>
    <tab-control class="tab-control1" 
                  :titles="['流行','新款','精选']" 
                  @goodsType="goodsType" 
                  ref="tabcontrol1"
                  v-show="isTabFixed"></tab-control>
    <!-- 可滚动区域 -->
    <b-scroll class="content" 
              ref="bscroll" 
              :probe-type="3" 
              @scrollY="topvalue"
              :pull-up-load="true"
              @pullingUp="loadMore"> 
      <!-- 轮播图 -->
      <main-swiper :res="banners" class="swiper" @swiperImageLoad="imageLoad"></main-swiper>
      <recommend-view :recommend="recommends"></recommend-view>
      <div class="center-picture">
        <img src="~assets/img/homeMenu.jpg" alt />
      </div>
      <!-- 中间商品分类导航 -->
      <tab-control class="tab-control2" 
                  :titles="['流行','新款','精选']" 
                  @goodsType="goodsType" 
                  ref="tabcontrol2"></tab-control>
      <!-- 商品列表 -->
      <goods-list :goods="goods[current].list">
      </goods-list>
    </b-scroll>
    <!-- 返回顶部 --> 
    <to-top @click.native="backClick" ref="toTop" v-show="flag"></to-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import MainSwiper from "components/common/swiper/MainSwiper";
import RecommendView from "./RecommendView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BScroll from "components/common/betterScroll/BScroll";
import ToTop from "components/content/toTop/ToTop";

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
      },
      //默认为商品为流行
      current:"pop",
      flag:false,
      isTabFixed:true,
      tabOffsetTop:0,
    };
  },
  computed:{
    activated() {
      console.log('111')
    },
    deactivated() {
      console.log(222)
    },
  },
  components: {
    NavBar,
    MainSwiper,
    RecommendView,
    TabControl,
    GoodsList,
    BScroll,
    ToTop,
  },

  created() {
    /**
     * 生命周期函数，组件被创建开始网路数据
     * 请求多个数据
     */
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
    /**
     * 封装请求函数 便于多次调用请求数据
     */
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    imageLoad(){
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    /**
     * 展示数据类型
     */
    goodsType(index){
      switch(index){
        case 0:
          this.current = "pop"
          break
        case 1:
          this.current = "new"
          break
        case 2:
          this.current = "sell"
          break
      }
      this.$refs.tabcontrol1.cur = index;
      this.$refs.tabcontrol2.cur = index;
      
    },
    /**
     * 返回顶部 scrollTo(left,top,taketime)
     */
    backClick(){
      //先判断 bscroll组件是否已经渲染完成，再点击回到顶部按钮
      this.$refs.bscroll && this.$refs.bscroll.scroll.scrollTo(0,-44,500);
    },
    /**
     * 判断是否到达1000像素，返回顶部按钮显示
     */
    topvalue(position){
       this.$refs.bscroll && -position.y < 1000 ? this.flag = false : this.flag = true;
       //判断导航是否吸顶
       this.isTabFixed = (-position.y >=665);
    },
    /**
     * 加载更多
     */
    loadMore(){
      this.getHomeGoods(this.current);
      this.$refs.bscroll.scroll.finishPullUp();
    },
  },

};
</script>

<style scoped>
.home-nav {
  color: var(--color-tint);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1001;
  background-color: lightpink;
}
.center-picture img {
  width: 100%;
}
.swiper {
  margin-top: 44px;
}
.tab-control1 {
  /* position: sticky;  * css3吸顶功能 */
  position: relative;
  top: 44px;
  background-color: #fff;
  z-index: 100;
}

.content{
  position: absolute;
  top: 44px;
  bottom: 52px;
  left: 0;
  right: 0;
}

</style>