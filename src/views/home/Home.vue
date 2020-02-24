<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h2 slot="center">购物街</h2>
    </nav-bar>
    <main-swiper :res="banners" class="swiper"></main-swiper>
    <recommend-view :recommend="recommends"></recommend-view>
    <div class="center-picture">
      <img src="~assets/img/homeMenu.jpg" alt="">
    </div>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>列1</li>
      <li>列2</li>
      <li>列3</li>
      <li>列4</li>
      <li>列5</li>
      <li>列6</li>
      <li>列7</li>
      <li>列8</li>
      <li>列9</li>
      <li>列10</li>
      <li>列11</li>
      <li>列12</li>
      <li>列13</li>
      <li>列14</li>
      <li>列15</li>
      <li>列16</li>
      <li>列17</li>
      <li>列18</li>
      <li>列19</li>
      <li>列20</li>
      <li>列21</li>
      <li>列22</li>
      <li>列23</li>
      <li>列24</li>
      <li>列25</li>
      <li>列26</li>
      <li>列27</li>
      <li>列28</li>
      <li>列29</li>
      <li>列30</li>
      <li>列31</li>
      <li>列32</li>
      <li>列33</li>
      <li>列34</li>
      <li>列35</li>
      <li>列36</li>
      <li>列37</li>
      <li>列38</li>
      <li>列39</li>
      <li>列40</li>
      <li>列41</li>
      <li>列42</li>
      <li>列43</li>
      <li>列44</li>
      <li>列45</li>
      <li>列46</li>
      <li>列47</li>
      <li>列48</li>
      <li>列49</li>
      <li>列50</li>
    </ul>
  </div>
 
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import MainSwiper from 'components/common/swiper/MainSwiper';
import RecommendView from './RecommendView'
import TabControl from 'components/content/tabControl/TabControl'
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
    TabControl,
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
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 10;
  }
  .center-picture img{
    width: 100%;
  }
  .swiper{
    margin-top: 44px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
</style>