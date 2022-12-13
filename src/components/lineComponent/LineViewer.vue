<template>
  <div class="d-flex flex-col align-items-center justify-content-center mt-3">
    <p class="mb-2">
      掃描此QRCode，可以加入LINE BOT好友，縮網址更方便唷。
    </p>
    <qrCode
      value="https://liff.line.me/1645278921-kWRPP32q/?accountId=281pzvpj"
      :size="250"
      level="H"
      background="#8895af"
    />
  </div>
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";
import qrCode from "qrcode.vue";

export default defineComponent({
  components: {
    qrCode,
  },
  data() {
    return {};
  },
});
</script>
    
  <style scoped lang="scss">
</style>
    