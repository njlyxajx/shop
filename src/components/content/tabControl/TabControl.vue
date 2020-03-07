<template>
  <div class="tab-control" >
    <div v-for="(item,index) in titles" class="tab-controls-item" @click="handle(index)">
      <span :class="{actived:cur===index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data() {
    return {
      cur:0,
    }
  },
  methods: {
    handle(index){
      this.cur = index;
      this.$emit("goodsType",index);
    }
  },
}
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    height: 40px;
    margin-bottom: 10px;
  }
  .tab-controls-item{
    width: 60px;
  }
  .tab-controls-item span{
    padding: 5px 0;
    width: 40px;
  }
  .actived{
    color: lightpink;
    border-bottom: 4px solid lightpink;
  }
</style>