<script setup lang="ts">
import Container from "@/components/container.vue";
</script>

<template>
  <div>
    <section class="income">
      <container>
        <div class="income-wrapper">
              <div class="income__content">
            <div class="income__content--title">
              <span class="money">
                {{ $t('income.money') }}
              </span>
              <span class="month">
                {{ $t('income.title') }}
              </span>
            </div>
                <p class="income__content--open">{{ $t('income.openText') }}</p>
                <p class="income__content--plan">{{ $t('income.planText') }}</p>
                <p class="income__content--advice">{{ $t('income.adviceText') }}</p>
            <button class="income__content--button">
              {{ $t('income.moreButtonText') }}
            </button>
          </div>
          <div class="income__logo">
            <img src="@/assets/images/logo-main.svg" alt="logo">
          </div>
        </div>

      </container>
    </section>
  </div>
</template>
<style lang="scss">

.income-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 250px 0 110px;
}
.income {
  background-image: url("@/assets/images/main-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &__content {
    &--title {
      font-size: 64px;
      font-weight: bold;
      line-height: 62px;

      .money {
        color: #E6BD89;
      }
      .month {
        color: #fff;
      }
    }
    &--open {
      font-size: 40px;
      line-height: 62px;
      color: #E6BD89;
    }

    &--plan {
      margin-top: 34px;
      color: #fff;
      font-size: 24px;
      line-height: 26px;
    }

    &--advice {
      color: #fff;
      font-size: 24px;
      line-height: 26px;
    }

    &--button {
      margin-top: 24px;
      background-color: #E6BD89;
      color: #6C1011;
      font-size: 24px;
      line-height: 26px;
      text-decoration: underline;
      text-decoration-color: #7A1C1C;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
      padding: 22px 150px;
      border-radius: 100px;
      cursor: pointer;
    }
  }

  &__logo {
    img {
      width: 331px;
      height: 331px;
    }
  }
}
</style>
