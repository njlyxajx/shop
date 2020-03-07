<template>
  <div class="main-swiper">                  <!--通过v-if判断，在组件收到需要渲染的数据后再加载swiper防止loop失效-->
    <swiper :options="swiperOption" ref="mySwiper" class="swiper" v-if="res.length">  
      <swiper-slide v-for="(item,index) in res" :key="index" class="swiper_item">
        <img :src="item.image" alt="轮播图" class="pic" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "MainSwiper",
  props: {
    res: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        loop:true,
        autoplay: {
          delay: 3000, 
          stopOnLastSlide:false,   //切换最后一张停止轮播
          disableOnInteraction:false, //用户操作后不禁用自动轮播
        },
        
        pagination: {
          //分页器
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style>
.swiper {
  width: 100%;
}
.pic {
  width: 100%;
}
/**
  分页器激活颜色
 */
.swiper-pagination-bullet-active {
  background-color: #f40;
}

</style>