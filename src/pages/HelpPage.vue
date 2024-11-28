<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <q-header>
     <div class="q-px-lg q-pt-xl q-mb-md q-mb-lg">
      <div class="text-h3 text-weight-bold">HELP PAGES</div>
      <div class="text-subtitle5 q-pt-md">Please Note: ALL VIEWED inductions can be seen in
        your user profile after acknowlegement. If you need to review your safety alerts
      please go to your user profile page.</div>
      <q-btn round to="/" class="q-ma-md fixed-top-right" color="primary" label=""
  icon="home" size="1.2em" />

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
