<template>
  <div class="searchbar-container">
    <div class="searchbar-form">
      <input class="searchbar-input"
             placeholder="Search Albums Here!!!"
             v-model="userInput"/>
      <button class="searchbar-btn" v-on:click="OnButtonClick()">Search</button>
    </div>
  </div>
</template>

<script>
export default {
name: "SearchBar",
  data(){
    return{
      userInput:"",
    };
  },
  methods:{
    OnButtonClick(){
      this.$emit("button-clicked", this.userInput);
    }
  }
}
</script>

<style scoped>

.searchbar-container{
  color: white;
  box-sizing: border-box;
  margin: 20px;
}

.searchbar-input{
  font-size: 15px;
  color: white;
  height: 40px;
  width: 200px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
}

.searchbar-input:focus{
  background-color: white;
  color: black;
  border-color: black;
}

.searchbar-btn{
  border-radius: 5%;
  height: 40px;
  background-color: transparent;
  color: white;
  padding: 10px;
  margin: 10px;
}


</style>