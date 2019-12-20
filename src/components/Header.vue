<template>
  <div class="header">
    sdfsd
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      list: [
        { age: 10, price: 20 },
        { age: 30, price: 100 },
        { age: 40, price: 10 },
        { age: 60, price: 70 }
      ]
    }
  },
  mounted () {
    this.changeArra()
  },
  methods: {
    changeArra () {
      console.log(this.add(this.list))
    },
    add (arr) {
      let obj = {}
      arr.map(value => {
        Object.keys(value).map(key => {
          if (obj[key]) {
            obj[key] += value[key]
          } else {
            obj[key] = value[key]
          }
        })
      })
      return obj
    }
  }
}
</script>
<style scoped lang="stylus">

</style>
