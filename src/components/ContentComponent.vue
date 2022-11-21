<template>
  <div class="content-all-container">
    <div class="d-flex flex-col align-items-center mb-5">
      <p class="title-top-content">
        百分百的服務保證
      </p>
      <p class="description-top-content">
        隨時隨地，輕鬆縮短網址
      </p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="block-content d-flex flex-col align-items-center">
        <div class="title-content mb-2">
          <i class="bi bi-shield-check"></i>
          100%安全
        </div>
        <div class="text-content">
          我們不會轉發、下載您上傳的任何檔案，所有操作將直接在網站中進行，同時您可以將資料設定密碼以及過期時間，以此確保內容安全性達到100%。
        </div>
      </div>
      <div class="block-content d-flex flex-col align-items-center">
        <div class="title-content mb-2">
          <i class="bi bi-line"></i>
          100%支援
        </div>
        <div class="text-content">
          除了提供網頁版本的服務，我們也有推出Line ChatBot的功能，方便您在使用Line聊天時，能直接將網址分享給朋友以及群組。
        </div>
      </div>
      <div class="block-content d-flex flex-col align-items-center">
        <div class="title-content mb-2">
          <i class="bi bi-patch-check"></i>
          100%免費
        </div>
        <div class="text-content">
          使用我們的網站服務無需進行註冊或下載軟體，同時您不會被彈跳視窗干擾，以及任何的付款要求，我們將致力提供最流暢的使用者體驗。
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
  