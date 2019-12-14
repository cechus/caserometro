<template>
  <div class="w-full max-w-lg">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col  text-center">
        <div class="flex flex-row">
            <div class="flex flex-col items-center w-1/2 border-r-2 pr-3">
            <router-link to="/registrar-producto">
                <img src="/cash-payment.png" width="94%" alt="">
                 <h3 class="font-semibold text-gray-800">Realizar Venta</h3>
            </router-link>
            </div>
            <div class="flex flex-col items-center w-1/2 m-1">
            <router-link to="/registrar-producto">
                <img src="/soft-drink.png" width="94%" alt="">  
                <h3 class="font-semibold text-gray-800">Agregar Producto</h3>
            </router-link>
            </div>
        </div>
        <div class="flex flex-row border-t-2">
            <div class="flex flex-col items-center w-1/2 border-r-2 pr-3">
            <router-link to="/estadisticas">
                <img src="/presentation.png" width="90%" alt="">
                <h3 class="font-semibold text-gray-800">Estadisticas</h3>
            </router-link>
            </div>
            <div class="flex flex-col items-center w-1/2 m-1">
            <router-link to="/share">
                <img src="/share.png" width="80%" alt="">
                <h3 class="font-semibold text-gray-800">Difundir Producto</h3>
            </router-link>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>