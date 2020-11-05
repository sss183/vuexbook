<template>
       <div class="total">
         总价格：<span>￥{{$store.getters.totalPrice}}</span>
         总数量：<span>{{$store.getters.totalNum}}</span>
       </div>
</template>

<script>
export default {
  
};
</script>
<style lang="">
    .total{
       width: 600px;
       margin: 0 auto;
       text-align: center; 
    }
</style>
