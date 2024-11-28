<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-white" elevated>
      <q-tabs class="text-secondary">
        <q-tab icon="home" />
        <q-tab icon="notifications">
          <q-badge color="red" floating class="q-mr-sm" label="6" />
        </q-tab>
        <q-tab icon="settings" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
