<template>
  <div class="main-page">
    <div class="main-page_side-bar">
      <img src="https://i.pinimg.com/originals/4b/ad/60/4bad606e7a7e6026fafa8dcf9199cc85.jpg"/>
    </div>
    <div class="login-container">
      <div class="login-container-body">
        <div class="login-container_text">
          <h1>Hello!</h1>
          <h2>Welcome to My Website</h2>
        </div>
        <div class="login-form">
          <InputComponent label-name="UserName" @input-changed="HandleUsername"/>
          <PasswordComponent label-name="Password" @input-changed="HandlePassword" />
         <ButtonComponent @button-clicked-event="LoginUser" button-content="Login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/interactivePieces/ButtonComponent";
import InputComponent from "@/components/interactivePieces/InputComponent";
import PasswordComponent from "@/components/interactivePieces/PasswordComponent";
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Login",
  components:{
    InputComponent,
    ButtonComponent,
    PasswordComponent
  },
  data(){
    return{
      user:{
        username: "",
        password: ""
      },
      loadingScreen: "data:image/jpeg;base64,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"
    };
  },

  computed:{
    ...mapGetters('auth', [
        'authenticating'
    ])
  },

  methods:{
    ...mapActions('auth', [
      'login'
    ]),

    HandleUsername(param){
      this.user.username = param;
    },

    HandlePassword(param){
      this.user.password = param;
    },
    LoginUser(){
      // Perform a simple validation that email and password have been typed in
      if (this.user.username !== '' && this.user.password !== '') {
        this.login({email: this.user.username, password: this.user.password})
        this.password = ""
      }
    }
  }
}
</script>

<style scoped>

.main-page{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

.main-page_side-bar{
  grid-column: 1;
  grid-row: 1;
  background-color: black;
}

.main-page_side-bar img{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
}

.login-container{
  grid-column: 2;
  grid-row: 1;
  width:100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-container-body{
  height: 60%;
  width: 60%;
  border-radius: 2%;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
}

.login-container_text{
  text-align: center;
  margin-top: 50px;
  margin-bottom: 80px;
}

.login-form{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>