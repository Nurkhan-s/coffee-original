<script setup lang="ts">
import OrnamentContainer from '@/components/ornament-container.vue';
import Container from '@/components/container.vue';
</script>
<template>
  <section class="why">
    <ornament-container>
      <container>
        <div class="why-title">
          {{ $t('why.title') }}
        </div>

        <div class="why-content">
          <div class="why-content__item" v-for="count in 3">
            <div class="why-content__item--title">
              {{ $t(`why.${count}.title`) }}
            </div>
            <div class="why-content__item--text">
              {{ $t(`why.${count}.text`) }}
            </div>
          </div>
        </div>
      </container>
      <div class="alert-block">
        <container>
          <div class="alert-wrapper">
            <span class="alert-text">
              {{ $t('why.alert') }}<br>
            </span>
          </div>
        </container>
      </div>
    </ornament-container>
  </section>
</template>
<style lang="scss">
.why {
  white-space: pre-line;
  &-title {
    color: #fff;
    font-size: 64px;
    font-weight: 700;
    line-height: 62px;
    text-align: center;
    text-transform: uppercase;
  }

  &-content {
    margin-top: 30px;
    &__item {
      margin-bottom: 16px;
      &--title {
        font-size: 54px;
        line-height: 62px;
        color: #fff;
        font-weight: 700;
        text-align: center;
      }

      &--text {
        color: #FCF3E2;
        font-size: 28px;
        line-height: 26px;
        font-weight: 400;
        margin-top: 16px;
        text-align: center;
      }
    }
  }

  .alert-block {
    font-weight: 700;
    font-size: 32px;
    color: #FFFCF7;
    line-height: 36px;
    background-color: #234433;
    text-decoration: underline;
    text-decoration-color: #FFFCF7;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    border-radius: 60px;
    padding: 32px 32px 32px 370px;
    transform: translateX(-6%);
    width: fit-content;
  }

  .alert-wrapper {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .alert-text {
    text-align: left;
  }

}
</style>
