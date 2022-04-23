<template>
  <div class="box-login">

    <div class="logo">
      <h1>Login</h1>
    </div>

    <MyInput 
      text="E-mail"
      placeholder="exemplo@exemplo.com"
    />

    <MyInput 
      text="Senha"
      type="password"
      placeholder="123456"
    />

    <MyButton 
      text="Entrar" 
      :callback="() => alert('Fui clicado!!')"
    />
  
  </div>
</template>

<script>
import MyInput from '@/components/input/MyInput.vue'
import MyButton from '@/components/button/MyButton.vue'

export default {
  name: "TelaLogin",
  components: {
    MyInput,
    MyButton
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>

.box-login{
  padding: 30px;
  width: 300px;
  margin: auto;
  border: 1px solid #ddd;
  margin-top: 70px; 
}

.logo {
  text-align: center;
  color: #333;
}

</style>
