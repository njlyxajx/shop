<template>
    <li class="tab-bar-item" :class="{active:isActive}" @click="itemClick()" >
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </li>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String, 
  },
  data() {
    return {

    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick(){
      return this.$router.replace(this.path).catch(err => {});
    }
    
  },
};
</script>

<style>
 .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size:10px;
    color: gray;
  }
  .tab-bar-item span{
    font-size: 20px;
  }
  .active{
    color: #f40;
    animation: scl .1s forwards;
  }
  @keyframes scl {
    from{
      transform: scale(0);
    }
    to{
      transform: scale(1);
    }
  }
</style>