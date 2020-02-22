<template>
  <div class="swiper">
    <slot></slot>
  </div>
</template>

<script>
import SwiperItem from './SwiperItem'
export default {
  name:'Swiper',
  components:{
    SwiperItem,
  }
}
</script>

<style>

</style>