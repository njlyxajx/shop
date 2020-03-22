<template>
  <div class="goodsItem" refs="picture" @click="clickItem">
    <img :src="goodslist.show.img" alt="">
    <div class="title">
      <p>{{goodslist.title}}</p>
      <span class="price">¥{{goodslist.price}}</span>
      <span class="collect">收藏{{goodslist.cfav}}</span>
    </div>
  </div>
 
</template>

<script>

export default {
  name:"GoodsListItem",
  props:{
    goodslist:{
      type:Object
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  methods:{
    clickItem(){
      this.$router.push({
        path:'/detail/' + this.goodslist.iid,
      })
    }
  }
}
</script>

<style>
  .goodsItem{
    width: 46%;
    box-sizing: border-box;
    overflow:hidden; 
  }
  .goodsItem img{
    width: 100%;
    height: 85%;
    font-size: 0;
    border-radius: 8px;
  }
  .goodsItem .title{
    width: 100%;
    line-height: 20px;
    font-size:  14px;
  }
  .goodsItem .title p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap; 
  }
  .goodsItem .price{
    color: #f40;
  }
  .goodsItem .collect{
    margin-left: 10px;
  }
</style>