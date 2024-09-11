<script setup>
import OrnamentContainer from '@/components/ornament-container.vue';
import Container from '@/components/container.vue';
import { Carousel, Slide } from 'vue3-carousel';

const slides = [
  {
    title: "",
    text: "",
    url: ""
  },
  {
    title: "",
    text: "",
    url: ""
  },
]
</script>
<template>
  <section class="support">
    <ornament-container>
      <container>
        <carousel>
          <slide v-for="slide in slides">
            <div class="support-title">
              {{ slide.title }}
            </div>
            <div class="support-text">
              {{ slide.text }}
            </div>
          </slide>
        </carousel>
      </container>
    </ornament-container>
  </section>
</template>
<style lang="scss" scoped>
.support {
  color: #fff;
}
</style>
