<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">城市</div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped lang="stylus">
  @import "~assets/styls/variable.styl"
  .header
    display flex
    line-height: $headerHeight
    background: $bgColor
    color #fff
    .header-left
      width 43px
      float left
    .header-input
      flex 1
    .header-right
      width 60px
      float right
</style>
