<template>
  <div>
    <div class="flex justify-center w-full h-28 bg-brand-main">
      <header-logged />
    </div>

    <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
      <h1 class="text-4xl font-black text-center text-gray-800">
        Credenciais
      </h1>
      <p class="text-lg text-center text-gray-800 font-regular">
        Guia de instalação e geração de suas credenciais
      </p>
    </div>

     <div class="flex justify-center w-full h-full">
      <div class="flex flex-col items-center w-4/5 max-w-6xl py-10">
        <h1 class="text-3xl font-black text-brand-darkgray">
          Instalação e configuração
        </h1>
        <p class="mt-10 text-lg text-center text-gray-800 font-regular">
          Este aqui é a sua chave de api
        </p>

        <div
          class="flex py-3 pl-5 pr-20 mt-2 roudend items-center bg-brand-gray"
        >
          <!-- <span>{{ store.User.currentUser.apiKey }}</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogged from '../../components/HeaderLogged'

export default {
  components: { HeaderLogged }

}
</script>
