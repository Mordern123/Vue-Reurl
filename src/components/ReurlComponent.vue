<template>
  <div class="all-content">
    <ul class="title-content nav nav-pills justify-content-between">
      <li class="col-2 nav-item">
        <a
          href="#reurl"
          class="nav-link active d-flex justify-content-center"
          data-bs-toggle="tab"
          ><i class="bi bi-link-45deg mr-2"></i>網址</a
        >
      </li>
      <li class="col-2 nav-item">
        <a
          href="#imgurl"
          class="nav-link d-flex justify-content-center"
          data-bs-toggle="tab"
          ><i class="bi bi-image-fill mr-2"></i>圖片</a
        >
      </li>
      <li class="col-2 nav-item">
        <a
          href="#videourl"
          class="nav-link d-flex justify-content-center"
          data-bs-toggle="tab"
          ><i class="bi bi-skip-end-btn-fill mr-2"></i>影片</a
        >
      </li>
      <li class="col-2 nav-item">
        <a
          href="#testurl"
          class="nav-link d-flex justify-content-center"
          data-bs-toggle="tab"
          ><i class="bi bi-skip-end-btn-fill mr-2"></i>語音</a
        >
      </li>
    </ul>
    <div class="raw-content tab-content">
      <div class="tab-pane fade show active" id="reurl">
        <div class="reurl-raw d-flex flex-col">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="輸入網址"
              v-model="message"
              aria-describedby="button-addon"
            />
            <button
              class="reurl-btn btn btn-outline-secondary"
              type="button"
              id="button-addon"
              @click="testapi(message)"
            >
              <i class="bi bi-send"></i>
            </button>
          </div>
          <div v-if="showUrl" class="input-group">
            <div
              type="text"
              class="form-control"
              style="background-color: #e6ecf8"
            >
              {{ shortUrl }}
            </div>
            <button class="reurl-btn btn btn-outline-secondary" type="button">
              <i class="bi bi-send-check"></i>
            </button>
            <button class="reurl-btn btn btn-outline-secondary" type="button">
              <i class="bi bi-clipboard-check"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="imgurl">
        <p class="imgurl-raw">Profile tab content ...</p>
      </div>
      <div class="tab-pane fade" id="videourl">
        <p class="videourl-raw">Messages tab content ...</p>
      </div>
      <div class="tab-pane fade" id="testurl">
        <p class="testourl-raw">Messages tab content ...</p>
      </div>
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
    };
  },
  methods: {
    testapi() {
      console.log(this.message);
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
          console.log(res.data);
          this.showUrl = true;
          this.shortUrl = res.data.shortUrl;
        });
    },
  },
});
</script>

<style scoped lang="scss">
@import "../styles/components/reurlcomponent.scss";
</style>
