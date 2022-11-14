<template>
  <div>
    <nav
      class="header-container navbar navbar-expand navbar-light bg-light w-100"
    >
      <div class="container-fluid w-100">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto d-flex align-items-center">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-globe"></i>
                {{ curLanguage }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">CN</a></li>
                <li><a class="dropdown-item" href="#">EN</a></li>
              </ul>
            </li>
            <div class="ml-4" style="color: #2e3440">
              {{ userName }}
            </div>
            <div
              style="
                height: 20px;
                width: 2px;
                background: #2e3440;
                margin: 0 15px;
              "
            ></div>
            <button class="login-btn">登入</button>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      curLanguage: "CN",
      userName: "拜訪者模式",
    };
  },
  methods: {},
});
</script>

<style scoped lang="scss">
@import "../styles/components/header.scss";
@import "../styles/global.scss";
</style>
