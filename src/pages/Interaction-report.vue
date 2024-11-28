<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <q-header>
     <div class="q-px-lg q-pt-xl q-mb-md q-mb-lg">
      <div class="text-h3 text-weight-bold">INTERACTION REPORT</div>
      <div class="text-subtitle5 q-pt-md">This is the users interaction report
        for every active user in your account.</div>
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
