<template>
  <div>
     <h1> {{ msg }} </h1>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'I am a beautiful girl'
    }
  }
}
</script>
 
<style scoped> 
</style>
