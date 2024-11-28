<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <q-header>
     <div class="q-px-lg q-pt-xl q-mb-md q-mb-lg">
      <div class="text-h3 text-weight-bold"> Plant / Assets</div>
      <div class="text-subtitle1 text-weight-bold">Plant equipment</div>
      <q-btn round to="/" class="q-ma-md fixed-top-right" color="primary" label=""
  icon="home" size="1em" />

       </div>
       <q-img
       src="public/background.jpg"
       class="header-image absolute-top"
       />

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
}

</style>
