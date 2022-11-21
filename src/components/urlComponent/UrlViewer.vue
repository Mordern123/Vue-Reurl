<template>
  <div class="reurl-raw d-flex flex-col">
    <div class="input-group mb-3">
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
      class="input-group"
    >
      <div class="form-control output-short">
        {{ shortUrl }}
      </div>
      <button
        class="reurl-btn btn btn-outline-secondary"
        type="button"
      >
        <i class="bi bi-qr-code-scan"></i>
      </button>
      <button
        class="reurl-btn btn btn-outline-secondary"
        type="button"
      >
        <i class="bi bi-clipboard-check"></i>
      </button>
      <button
        class="reurl-btn btn btn-outline-secondary"
        type="button"
      >
        <i class="bi bi-send-check"></i>
      </button>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
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
          this.shortUrl = res.data.shortUrl;
        });
    },
  },
});
</script>
  
  <style scoped lang="scss">
@import "../../styles/components/urlComponent/urlviewer.scss";
</style>
  