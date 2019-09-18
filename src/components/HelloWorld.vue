<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{data_msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return { 
      data_msg: "Click the circles below to start exploring"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}
h3 {
  text-align: center;
}
a {
  color: #42b983;
}
</style>
