<template>
  <div class="swiper-item">
    <slot name="picture"></slot>
    <slot name="dotted"></slot>
  </div>
</template>

<script>
export default {
  name:'SwiperItem'
}
</script>

<style>
  .swiper-item{
    color: rebeccapurple
  }
</style>
