<script setup lang="ts">
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from './i18n';

const { locale } = useI18n({ useScope: 'global' });
watch(locale, (val) => {
  setI18nLanguage(val);
});
</script>

<template>
  <div class="root">
    <h1>{{ $t('title.config') }}</h1>
    <select class="App-language" v-model="locale">
      <option
          v-for="optionLocale in supportLocales"
          :key="`locale-${optionLocale}`"
          :value="optionLocale">{{ optionLocale }}
      </option>
    </select>
  </div>

</template>

<style lang="scss" scoped>
.root {
  display: flex;

  h1 {
    margin-right: 10px;
  }
}

</style>
