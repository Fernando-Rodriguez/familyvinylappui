<template>
  <div class="main-form-container">
    <input type="text" required
           v-model="userInput"
           v-on:input="InputChanged"/>
    <label class="label-name">
      <span class="content-name">Name</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "InputCard",
  data(){
    return{
      userInput:"",
    };
  },
  methods:{
    InputChanged(){
      console.log(this.userInput);
      this.$emit("input-changed", this.userInput);
    }
  }
}
</script>

<style scoped>

.main-form-container{
  margin:20px;
  width: 500px;
  height: 50px;
  position: relative;
  overflow: hidden;
  color: white;
}

.main-form-container input {
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 2px solid white;
  padding-top: 20px;
  font-size: 16px;
  outline: none;
  background: transparent;
  color: white;
}

.main-form-container input:focus{
  outline: none;
}

.main-form-container .label-name{
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
}

.main-form-container label::after{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  border-bottom: 3px solid white;
  left: 0;
  bottom: -1px;
  transform: translateX(-100%);
}

.content-name{
  position: absolute;
  bottom: 5px;
  left: 0px;
  transition: all 0.3s ease-in-out;
}

.main-form-container input:focus + .label-name .content-name,
.main-form-container input:valid + .label-name .content-name{
  transform: translateY(-100%) scale(0.95);
  color: white;
}

.main-form-container input:focus + .label-name::after,
.main-form-container input:valid + .label-name::after{
  transform: translateX(0%);
  transition: all 0.3s ease;

}

input:required {
  box-shadow:none;
}

</style>