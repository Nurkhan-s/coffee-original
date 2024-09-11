<script setup lang="ts">
import Container from "@/components/container.vue";
import OrnamentContainer from "@/components/ornament-container.vue";
</script>

<template>
  <div>
    <ornament-container>
      <section class="info">
        <container>
          <div class="info-wrapper">

            <div class="info__title">
              {{ $t('info.title') }}
            </div>

            <div class="info__contents">
              <div v-for="count in 6" class="info__contents--item">
                <div class="item-title">
                  {{ $t(`info.${count}.title`) }}
                </div>
                <div class="item-text">
                  {{ $t(`info.${count}.text`) }}
                </div>
              </div>
            </div>

          </div>
        </container>
      </section>
    </ornament-container>
  </div>
</template>
<style lang="scss">
 .info {
   color: #fff;

   &__title {
     font-size: 54px;
     line-height: 62px;
     text-align: center;
     text-transform: uppercase;
   }

   &__contents {
     margin-top: 32px;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     gap: 70px ;

     .item-title {
       font-size: 54px;
       line-height: 62px;
       text-align: center;
       font-weight: 700;
     }

     .item-text {
       font-size: 24px;
       line-height: 26px;
       color: #FCF3E2;
       opacity: .6;
       text-align: center;
       font-weight: 400;
     }
   }
 }
</style>
