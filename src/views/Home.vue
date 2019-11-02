<template>
  <div>
    <Header></Header>
  </div>
</template>
<script>
import Header from 'components/Header.vue'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'ymd'
    }
  },
  components: {
    Header
  }
}
</script>
