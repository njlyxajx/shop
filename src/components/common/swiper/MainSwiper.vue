<template>
  <div class="main-swiper">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
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
        autoplay: {
          delay: 2000, //延迟2秒
          disableOnInteraction: false, //用户操作后不禁用自动轮播
        },
        loop:true,
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

.swiper-pagination-bullet-active {
  background-color: #f40;
}

</style>