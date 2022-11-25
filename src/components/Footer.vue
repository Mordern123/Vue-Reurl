<template>
  <div class="footer-container">
    <div class="row mb-3">
      <div class="d-flex justify-content-around text-start fw-bold">
        <router-link
          to="/about"
          class="nav-link"
        >關於我們</router-link>
        <router-link
          to="/privacy-policy"
          class="nav-link"
        >隱私權政策</router-link>
        <router-link
          to="/user-terms"
          class="nav-link"
        >使用者條款</router-link>
      </div>
    </div>
    <div
      class="d-flex flex-col align-items-center"
      style="text-align: center"
    >
      <p>
        <span class="text-start mt-2">
          Copyright © 2022-2023 Created by Eric, Marc, Adam. LIMITED. 保留一切權利 |
          <span style="color: rgba(255, 255, 255, 0.5)">Version 2.1.0</span>
        </span>
      </p>
      <div class="row">
        <p class="mb-0">
          <span
            class="fw-bold"
            style="color: #23b6bc"
          >
            ReCut Coding團隊
          </span>
          <span class="text-white"> 台中市北屯區
            <a
              href="https://github.com/Mordern123"
              style="color: rgba(255, 255, 255, 0.5)"
            >
              <i class="bi bi-github mr-1"></i>https://github.com/Mordern123
            </a>
          </span>
        </p>
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
@import "../styles/components/footer.scss";
</style>
  