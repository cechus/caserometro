<template>
<div>


  <div class="w-full max-w-xs" v-if="!logged">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          correo
        </label>
        <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Contraseña
        </label>
        <input v-model="password" class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        <!-- <p class="text-red-500 text-xs italic">Verificar contraseña.</p> -->
      </div>
      <div class="flex items-center justify-between">
        <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Iniciar sesion
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Registrarse
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2019  All rights reserved.
    </p>

  </div>
  <Menu v-else>

  </Menu>
  </div>



</template>

<script>
// @ is an alias to /src
import Menu from '../components/Menu.vue'

export default {
  name: 'home',
  components: {
    Menu
  },
  data(){
    return {
      logged: false,
      email:'',
      password:''
    }
  },
  mounted(){
    this.verifyLogged()
  },
  methods:{
    verifyLogged(){
      if(localStorage.getItem('email') && localStorage.getItem('password')){
        this.logged = true;
      }
    },
    login(){
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      this.logged = true;

    }
  }
}
</script>
