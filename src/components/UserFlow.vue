<template>
  <div class="userflow-all-container">
    <div class="d-flex flex-col align-items-center">
      <p class="title-top-content mb-4">
        網址瘦身，由此開始
      </p>
      <a
        href="#"
        class="title-top-btn btn-15 mb-4"
      >開始使用</a>
    </div>
    <div class="d-flex flex-col flex-xl-row justify-content-xl-between">
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <i
          class="bi bi-link-45deg"
          style="font-size: 40px"
        ></i>
        <div class="title-content mb-2">
          {{ $t("url-edu") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("url-eduText") }}
        </div>
      </div>
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <i
          class="bi bi-image"
          style="font-size: 40px"
        ></i>
        <div class="title-content mb-2">
          {{ $t("img-edu") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("img-eduText") }}
        </div>
      </div>
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <i
          class="bi bi-skip-end-btn"
          style="font-size: 40px"
        ></i>
        <div class="title-content mb-2">
          {{ $t("video-edu") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("video-eduText") }}
        </div>
      </div>
    </div>
    <div class="d-flex flex-col flex-xl-row justify-content-xl-between">
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <i
          class="bi bi-file-earmark-image"
          style="font-size: 40px"
        ></i>
        <div class="title-content mb-2">
          {{ $t("compress-edu") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("compress-eduText") }}
        </div>
      </div>
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <i
          class="bi bi-shield-plus"
          style="font-size: 40px"
        ></i>
        <div class="title-content mb-2">
          {{ $t("pwd-edu") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("pwd-eduText") }}
        </div>
      </div>
      <div class="block-content col-12 col-xl-3 d-flex flex-col align-items-center">
        <i
          class="bi bi-qr-code"
          style="font-size: 40px"
        ></i>
        <div class="title-content mb-2">
          {{ $t("qrc-edu") }}
        </div>
        <div class="text-content mb-3">
          {{ $t("qrc-eduText") }}
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
@import "../styles/components/userflow.scss";
</style>
    