<template>
  <div class="navbar-container">
    <div class="navbar-user-container">
      <img class="navbar-user-image"
           src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
           alt="User Image, right here"/>
      <h1 class="navbar-user">Hello, {{ userName }}!</h1>
    </div>
    <h1 class="main-page-title"> Albums owned by the "Family"</h1>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components:{
  },
  props:{
    userName: String
  },
  data(){
  return{
      userInput: ""
    };
  }
}
</script>

<style scoped>

.navbar-container {
  box-sizing: border-box;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin: 0px 0px 10px 0px;
}

.navbar-user-container{
  box-sizing: border-box;
  justify-content: left;
  grid-column: 1;
  display: flex;
  align-items: center;
  background-color: #575757;
  margin: 10px;
  padding: 10px;
  width: 50%;
}

.navbar-user{
  padding: 0px 0px 0px 15px;
  font-size: 25px;
  color: white;
}

.navbar-user-image{
  width: 100px;
  border-radius: 5%;
  box-shadow: 1px 1px 10px 1px black;
}

.main-page-title{
  text-align: center;
  color: white;
  padding: 10px;
  width: 100%;
}

</style>