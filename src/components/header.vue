<script setup lang="ts">
import Header from "@/components/header.vue";
import Container from "@/components/container.vue";
import {computed, watch} from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '@/i18n';

const { locale } = useI18n({ useScope: 'global' });
watch(locale, (val) => {
  setI18nLanguage(val);
});

const setLocal = (local: any) => {
  locale.value = local.toLowerCase();
}

</script>

<template>
  <header class="header">
    <Container>
      <div class="header-wrapper">
        <img src="../assets/images/logo.svg" alt="coffee logo">
        <div class="locals">
          <div
              class="locals__item"
              :class="{active: locale === local}"
              v-for="(local, index) in supportLocales"
              :key="index"
              @click="setLocal(local)">
            {{ local.toUpperCase() }}
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>
<style lang="scss">

.header {
  height: 100px;
  background: #A32235;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .locals {
      display: flex;
      &__item {
        color: #000;
        cursor: pointer;
        transition: .3s all;
        font-size: 32px;
        margin-left: 12px;
        position: relative;

        &:hover {
          color: grey;
        }
        &.active {
          color: #fff;
        }

        &:first-child:after {
          content: '';
          height: 30px;
          width: 1px;
          background: #fff;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }



    }
  }
}
</style>
