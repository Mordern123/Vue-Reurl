<template>
  <div class="content-all-container">
    <div class="d-flex flex-col align-items-center mb-4">
      <p class="title-top-content">
        {{ $t("serviceGuarantee") }}
      </p>
      <p class="description-top-content">
        {{ $t("smallSlogan") }}
      </p>
    </div>
    <div class="d-flex flex-col flex-xl-row justify-content-xl-between">
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <div class="title-content mb-2">
          <i
            class="bi bi-shield-fill-check"
            style="color: #6C8FFF"
          ></i>
          {{ $t("100Safety") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("100SafetyText") }}
        </div>
      </div>
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <div class="title-content mb-2">
          <i
            class="bi bi-line"
            style="color: #06C152"
          ></i>
          {{ $t("100Support") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("100SupportText") }}
        </div>
      </div>
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <div class="title-content mb-2">
          <i
            class="bi bi-patch-check-fill"
            style="color: #FEBC38"
          ></i>
          {{ $t("100Free") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("100FreeText") }}
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
});
</script>
  
<style scoped lang="scss">
@import "../styles/components/contentcomponent.scss";
</style>
  