<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <q-header>
     <div class="q-px-lg q-pt-xl q-mb-md q-mb-lg">
      <div class="text-h3 text-weight-bold">VEHICLE REPORT</div>
      <div class="text-subtitle1">Vehicle Report for Wed 30th October 2024</div>
      <q-btn round to="/" class="q-ma-md fixed-top-right" color="primary" label=""
  icon="home" size="1.2em" />

       </div>
       <q-img
       src="public/background.jpg"
       class="header-image absolute-top"
       />

    </q-header>
    <div class="q-pa-xl row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-orange text-white">
        <div class="text-h6">J30 KDS</div>
        <div class="text-subtitle2">Thursday 31 August 2024</div>
      </q-card-section>

      <q-separator />
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-orange text-white">
        <div class="text-h6">J21 RHE</div>
        <div class="text-subtitle2">Thursday 31 August 2024</div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-orange text-white">
        <div class="text-h6">T14 LAS</div>
        <div class="text-subtitle2">Thursday 31 August 2024</div>
      </q-card-section>
    </q-card>
  </div>
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
