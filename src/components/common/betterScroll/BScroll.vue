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
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
    }
  },
  data() {
    return {
      scroll:null,
    }
  },
  mounted(){
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.btscroll,{
      click:true,
      probeType: this.probeType, //是否需要实时监听
      pullUpLoad:this.pullUpLoad
    });
    //2.监听滚动位置
    this.scroll.on('scroll',(position)=>{
      this.$emit("scrollY",position)
    })
    //3.监听上拉事件
    this.scroll.on('pullingUp',()=>{
      this.$emit("pullingUp")
    })
  },
  methods: {
    //上拉操作完毕，可以继续操作
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
}
</script>

<style>

</style>