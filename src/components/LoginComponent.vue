<script >
export default {
  name: 'LoginComponent',
  data() {
    return{
        Name: "BRESA",
        Subtitle: 'SALES AND INVENTORY SYSTEM',
        formData: {
            username: '',
            password: ''
          },
        errorMessage: ''

    }
  },

  methods: {
    login() {
        if (this.formData.username === 'admin' && this.formData.password === 'password') {
           this.$router.push({name: 'sales-page'})
        } else {
            this.errorMessage = "Error: Invalid data entry"
        }
    }
    
  }
}
</script>

<template>
  <div id="app">
      <form @submit.prevent="login">
      <img src="../assets/logoB.png" alt="Bresa">
      <br>
      <h2 id="login">LOGIN</h2>
      <br>
      <span class="text">Email</span>
      <input type="username" v-model="formData.username" required>
      <br>
      <span class="text">Password</span>
      <input type="password" v-model="formData.password" required>
      <br>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <br>
      <button type="submit">LOGIN</button>
    </form>
  </div>
</template>

<style lang='scss' scoped>

.app img{
  margin-top: 20px;
  margin-left: 19px;
  margin-bottom: 50px;
  width: 15rem;
}

form {
    width: 320px;
    padding: 20px;
    border: 0px solid var(--dark);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0px 0px 30px 30px;
    padding-top: 2px;
}
  
label {
    display: block;
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-bottom: 2px solid var(--dark);
    font-style: italic;
    background-color: transparent;
  }

  button {
    background: var(--dark);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 10px;
  }

  .Logo {
    text-align: center;
    margin: 0 auto;
    background: var(--primary);
    line-height: 0px;
    width: 320px;
    height: 80px;
    position: absolute;
    margin-top: -159px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px 30px 0px 0px;
    font-family: 'Inter';
    border: 0px;
    border-bottom: 4px solid #4CAF50;
  }
  
  #Bresa{
    text-align: center;
    color: white;
    font-size: 40px;
    font-weight: bold;
    margin: 30px;
    text-shadow: -2px -2px 4px #000, 2px -2px 4px #000, -2px 2px 4px #000, 2px 2px 4px #000;
  }
  #SIP{
    text-align: center;
    font-style: italic;
    font-size: 15px;
    font-weight: bold;
  }

  #login{
    text-align: center;
    font-size: 30px;
  }

 .error-message{
  font-size: 15px;
  color: red;
 }

:deep(.sidebar){
  display:none;
}
</style>

