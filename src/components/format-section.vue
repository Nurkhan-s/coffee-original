<script setup lang="ts">
import Container from "@/components/container.vue";
</script>

<template>
  <div>
    <section class="format">
      <div class="format-header">
        <container>
          <div class="header-wrapper">
            <h2>{{ $t('format.title') }}</h2>
            <img src="../assets/images/logo.svg" alt="coffee logo">
          </div>
        </container>
      </div>
      <div class="format-content">
        <container>
          <div class="content-wrapper">
            <div class="format__content">
              <div v-for="count in 5" class="format__content--item">
                <div class="item-title">
                  {{ $t(`format.${count}.title`) }}
                </div>
                <div class="item-text">
                  {{ $t(`format.${count}.text`) }}
                </div>
              </div>
            </div>
            <div class="format__picture">
              <img src="@/assets/images/format-image.png" alt="format">
            </div>
          </div>
          <div class="format-rebrand">
            {{ $t('format.rebrand') }}<br><span>COFFEE ORIGINAL</span>
          </div>
          <div class="button-wrapper">
            <button class="format-button">
              {{ $t('format.more') }}
            </button>
          </div>
        </container>
      </div>
    </section>
  </div>
</template>
<style lang="scss">

.format {
  &-header {
    height: 100px;
    background: #A32235;

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 54px;
        line-height: 62px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
  }
  &-content {
    background-color: #FCF3E2;
    padding: 22px 0;
  }
  &__content {
    &--item {
      display: flex;
      color: #6C1011;
      margin-bottom: 22px;
      font-size: 48px;
      line-height: 48px;

      .item-title {
        font-weight: 400;
        margin-right: 8px;
      }

      .item-text {
        font-weight: 700;
      }
    }
  }
  &__picture {
    border-radius: 69px;
  }

  &-rebrand {
    margin-top: 60px;
    color: #6C1011;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    font-weight: 700;
    span {
      font-weight: 700;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
  }

  &-button {
    padding: 10px 80px;
    background-color: #234433;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    line-height: 49px;
    text-decoration: underline;
    text-decoration-color: #fff;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    border-radius: 100px;
    cursor: pointer;
    justify-self: center;
  }
}

</style>
