<template>
  <div class="wrapper" ref="btscroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'BScroll',
  data() {
    return {
      scroll:null,
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.btscroll,{
      click:true,

    });

  }
}
</script>

<style>

</style>