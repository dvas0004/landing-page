<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{data_msg}}</h3>
    <h5 v-if="exp_tree" style="margin-left: 40px; margin-right: 40px">
      I've tried to be completely upfront about the amount of time spent on each skill. As you know, spending 5 years in a particular position
      doesn't necessarily mean you spent 5 years doing or learning one thing. So in general the amount of time depicted for each skill is my
      honest estimation as to how much *actual* time i've spent on the skill, rather than a chronological time. For example, I've been doing Java
      on-and-off since university - but it wouldn't be fair to say I have 10+ years experience (from when I graduated). The real figure is closer to 
      5+ years if you count just the "on" periods.

      I've purposely left out some skills to avoid clutter.
    </h5>
    <h5 v-if="exp_tree" style="margin-left: 40px; margin-right: 40px">
      In order of columns shown: "Companies I worked for", "position held", "general skill", "specific skill"
    </h5>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    exp_tree: Boolean
  },
  computed:{
    data_msg : function() {
      if (this.exp_tree === true){
        return "Skill Tree"
      } else {
        return "Click the circles below to start exploring"
      }        
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
