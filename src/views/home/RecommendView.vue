<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <div class="recommend-title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommend:{
      type:Array,
    }
  },
}

</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
  }
  .recommend-item{
    margin:10px;
    flex:1;
    font-size: 13px;
  }
  .recommend-item img{
    width: 60px;
  }
</style>