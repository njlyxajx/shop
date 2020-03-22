<template>
  <div>
    <nav-bar id="detail-nav">
      <div slot="left" class="back" @click="back()">
        <
      </div>
      <div slot="center" id="detail-title">
        <div v-for="(item,index) in title" class="title" @click="clickItem(index)" :class="{active:index===cur}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
  name:'DetailNav',
  components:{
    NavBar
  },
  data() {
    return {
      title:['商品','标题','评论','推荐'],
      cur:0,
    }
  },
  methods:{
    clickItem(index){
      this.cur = index;
    },
    back(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  #detail-nav{
    box-shadow: 0 2px 2px #eee;
  }
  #detail-title{
    display:flex;
  }
  .title{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: lightpink;
  }
  .back{
    font-size: 20px;
    text-align: center;
    line-height: 44px;
  }
</style>