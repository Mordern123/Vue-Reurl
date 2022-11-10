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
        <div class="reurl-raw">
          <input class="reurl-input" type="text" placeholder="輸入網址" />
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
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
@import "../styles/components/reurlcomponent.scss";
</style>
