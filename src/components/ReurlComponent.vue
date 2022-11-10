<template>
  <div class="all-content">
    <ul class="title-comtent nav nav-pills nav-fill justify-content-center">
      <li class="nav-item">
        <a href="#reurl" class="nav-link active" data-bs-toggle="tab"
          ><i class="bi bi-link-45deg"></i>網址</a
        >
      </li>
      <li class="nav-item">
        <a href="#imgurl" class="nav-link" data-bs-toggle="tab">圖片</a>
      </li>
      <li class="nav-item">
        <a href="#videourl" class="nav-link" data-bs-toggle="tab">影片</a>
      </li>
    </ul>
    <div class="raw-content tab-content">
      <div class="tab-pane fade show active" id="reurl">
        <p class="reurl-raw">Home tab content ...</p>
      </div>
      <div class="tab-pane fade" id="imgurl">
        <p class="imgurl-raw">Profile tab content ...</p>
      </div>
      <div class="tab-pane fade" id="videourl">
        <p class="videourl-raw">Messages tab content ...</p>
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
