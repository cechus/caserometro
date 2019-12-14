<template>
  <div class="w-full">
    <table class="table-auto text-sm">
      <thead>
        <tr>
          <!-- <th class="px-4 py-2">Casero</th> -->
          <th class="px-4 py-2 text-lg">Datos</th>
          <th class="px-4 py-2 text-lg">Caserimetro</th>
          <!-- <th class="px-4 py-2">Producto</th>
          <th class="px-4 py-2">Caserimetro</th>-->
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">
            <div class="md:flex bg-white shadow rounded-lg p-6">
              <div class="text-left">
                <h2 class="text-lg">Juan Perez Perez</h2>
                <h2 class="text-xs italic">Cel: 6592454</h2>
                <div class="text-orange-500">
                  Sellos Madera
                  <span class="font-bold text-right ml-3">(45Bs)</span>
                </div>
                <hr />
                <div class="text-gray-600 text-xs">2, abr 2019</div>
              </div>
            </div>
          </td>
          <td class="border px-4 py-2 text-center">
            <div class="text-gray-600 text-xl font-bold mb-1">10/10</div>
            <button class="btn btn-red">Yapar!</button>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <div class="md:flex bg-white shadow rounded-lg p-6">
              <div class="text-left">
                <h2 class="text-lg">Maria Carmen Loza</h2>
                <h2 class="text-xs italic">Cel: 73265891</h2>
                <div class="text-orange-500">
                  Boligrafos
                  <span class="font-bold text-right ml-3">(20Bs)</span>
                </div>
                <hr />
                <div class="text-gray-600 text-xs">2, abr 2019</div>
              </div>
            </div>
          </td>
          <td class="border px-4 py-2 text-center">
            <div class="text-gray-600 text-xl font-bold mb-1">8/10</div>
            <button class="btn btn-gray opacity-75" disabled>Yapar!</button>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2">
            <div class="md:flex bg-white shadow rounded-lg p-6">
              <div class="text-left">
                <h2 class="text-lg">Richard Rodriguez</h2>
                <h2 class="text-xs italic">Cel: 61265891</h2>
                <div class="text-orange-500">
                  Paquete de Papel
                  <span class="font-bold text-right ml-3">(70Bs)</span>
                </div>
                <hr />
                <div class="text-gray-600 text-xs">2, abr 2019</div>
              </div>
            </div>
          </td>
          <td class="border px-4 py-2 text-center">
            <div class="text-gray-600 text-xl font-bold mb-1">1/10</div>
            <button class="btn btn-gray opacity-75" disabled>Yapar!</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>