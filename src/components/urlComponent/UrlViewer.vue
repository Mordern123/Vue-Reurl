<template>
  <div class="reurl-raw d-flex flex-col">
    <div class="input-url-content input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Input URL"
        v-model="message"
      />
      <button
        class="reurl-btn btn btn-outline-secondary"
        type="button"
        @click="getShortUrl()"
      >
        <i class="bi bi-send"></i>
      </button>
    </div>
    <div
      v-if="showUrl"
      class="input-url-content input-group"
    >
      <div class="form-control output-short">
        {{ shortUrl }}
      </div>
      <button
        class="reurl-btn btn btn-outline-secondary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#QRCodeModal"
        title="QRCode"
      >
        <i class="bi bi-qr-code-scan"></i>
      </button>

      <button
        class="reurl-btn btn btn-outline-secondary"
        type="button"
        data-bs-toggle="tooltip"
        title="Copy"
        @click="clickCopy()"
      >
        <i class="bi bi-clipboard-check"></i>
      </button>
      <button
        class="reurl-btn btn btn-outline-secondary"
        type="button"
        data-bs-toggle="tooltip"
        title="Go"
        @click="clickGoUrl()"
      >
        <i class="bi bi-send-check"></i>
      </button>
    </div>
  </div>
  <div
    class="modal fade"
    id="QRCodeModal"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <p style="font-weight: bolder">
            {{ `QR Code： ${shortUrl}` }}
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <qrCode
            :value="shortUrl"
            :size="100"
            level="H"
            background="#8895af"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import qrCode from "qrcode.vue";

export default defineComponent({
  components: {
    qrCode,
  },
  data() {
    return {
      localHref: "",
      message: "",
      showUrl: false,
      shortUrl: "",
      showImg: false,
      shortImg: "",
    };
  },
  methods: {
    getShortUrl() {
      axios
        .post(
          `https://privatutle-bcdlmykzda-de.a.run.app/api/short`,
          { leadUrl: this.message }
          // {
          //   headers: {
          //     Authorization: loginToken,
          //   },
          // }
        )
        .then((res) => {
          this.showUrl = true;
          this.shortUrl = `${this.localHref}${res.data.shortUrl}`;
        });
    },
    clickShowQRC() {
      console.log(123);
    },
    clickCopy() {
      navigator.clipboard.writeText(this.shortUrl);
    },
    clickGoUrl() {
      window.open(this.shortUrl);
    },
  },
  mounted() {
    this.localHref = document.location.href;
  },
});
</script>
  
  <style scoped lang="scss">
@import "../../styles/components/urlComponent/urlviewer.scss";
</style>
  