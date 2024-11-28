<template>
  <q-page class="dashboard-page">
    <div class="header">
      <div class="header-background"></div>
      <div class="header-content">
        <div class="header-top">
          <h1>DASHBOARD</h1>
        </div>
        <p>Welcome Back Mason</p>
        <span class="safe-day">Have a Safe Day!</span>
        <span>Tue 26th November 2024 11:15 AM</span>
      </div>
    </div>

    <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="200px"
        class="bg-positive text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="play_circle" size="30px" />
          <div class="q-mt-md text-center">
            <p>SAFETY ALERTS</p>
            <p>Outstanding (4)</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            <p>Welcome Back Mason</p>
            <p>Outstanding (4)</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
    <div class="buttons-container">
      <q-btn
        class="dashboard-button blue"
        icon="directions_car"
        label="Vehicle Checks"
      />
      <q-btn
        class="dashboard-button orange"
        icon="play_circle"
        label="Interaction Report"
        flat
      />
      <q-btn
        class="dashboard-button"
        outline rounded color="accent"
        icon="build"
        label="Plant / Assets"
        flat
      />
      <q-btn
        class="dashboard-button blue"
        icon="engineering"
        label="Request PPE"
        flat
      />
      <q-btn
        class="dashboard-button orange"
        icon="play_circle"
        label="Inductions"
        flat
      />
    </div>

    <q-footer class="footer">
      <q-btn flat dense icon="warning" label="8" color="red" />
      <q-btn flat dense icon="notifications" label="6" color="blue" />
      <q-btn flat dense icon="settings" />
    </q-footer>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref('style'),
      lorem: 'Safety Alerts',
    };
  },
};
</script>

<style scoped>

.dashboard-page {
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.header {
  background: linear-gradient(45deg, #1691cc,#8431a6, #ff5f00);
  color: white;
  padding: 20px;
  text-align: left;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.header-content h1 {
  font-size: 3rem;
  margin: 0;

}
.header-content p {
  font-size: 1.2rem;
  margin: 0px;
}
.header-content span {
  font-size: 0.9rem;
  display: block;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
.dashboard-button {
  font-size: 1.1rem;
  text-transform: capitalize;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: flex-start;
  align-items: center;
}
.dashboard-button.blue {
  background-color: #1691cc;
  color: white;
}
.dashboard-button.orange {
  background-color: #f28b2d;
  color: white;
}
.dashboard-button.purple {
  background-color: #4f008c;
  color: white;
}
.dashboard-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  padding: 8px 16px;
  border-top: 1px solid #ddd;
}
</style>
