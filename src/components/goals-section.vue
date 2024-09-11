<script setup lang="ts">
import Container from '@/components/container.vue';
</script>
<template>
  <section class="goals">
    <container>
      <div class="goals-wrapper">
        <div class="goals-title">
          {{ $t('goals.title') }}
        </div>
        <div class="goals-items">
          <div class="goals-item" v-for="count in 8">
            {{ count }}. {{ $t(`goals.${count}`) }}
          </div>
        </div>
        <img class="goals-logo" src="@/assets/images/logo-main.svg" alt="logo">
      </div>
    </container>
  </section>
</template>
<style lang="scss">
.goals {
  background-color: #FCF3E2;
  white-space: pre-line;
  color: #A32235;

  &-wrapper {
    padding: 30px 0;
    position: relative;
  }

  &-logo {
    position: absolute;
    top: 80px;
    right: 0;
  }

  &-title {
    font-size: 96px;
    line-height: 62px;
    font-weight: 700;
  }

  &-items {
    margin-top: 30px;
  }

  &-item {
    font-size: 36px;
    font-weight: 400;
    line-height: 50px;
  }

  &-item + &-item {
    margin-top: 8px;
  }
}
</style>
