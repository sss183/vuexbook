<template>
  <div class="lunbo">
    <h2>首页&nbsp;&nbsp;/<span>轮播图列表</span></h2>
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  computed: {
     count(){
        return this.$store.state.count
     }
  },
}
</script>
<style lang="">
.lunbo h2 {
  font-size: 16px;
  margin: 10px 0px 0px 15px;
}
.lunbo h2 > span {
  font-size: 16px;
  color: #636569;
  margin-left: 5px;
}
</style>