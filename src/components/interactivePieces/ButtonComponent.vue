<template>
  <div class="navbar-add-album">
    <button v-on:click="mainClickEvent"> {{ ButtonContent }} </button>
  </div>
</template>

<script>
export default {
name: "ButtonComponent",
  props:{
    ButtonContent: String
  },
  methods:{
    mainClickEvent(){
      this.$emit('button-clicked-event')
    }
  }
}
</script>

<style scoped>

.navbar-add-album button{
  color: white;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px white solid;
  transition: 0.1s ease-in-out;
  margin: 10px 0px;
}

.navbar-add-album button:hover{
  transform: scale(1.1);
}

.navbar-add-album button:active{
  background-color: white;
  color: black;
}

</style>