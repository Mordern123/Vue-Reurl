<template>
  <div>
    <nav class="header-container navbar navbar-expand navbar-light bg-light w-100">
      <div class="container-fluid w-100">
        <div class="collapse navbar-collapse">
          <div class="d-flex flex-col align-items-center">
            <img
              class="dog-img"
              src="../assets/img/dog.png"
            >
            <div class="dog-text">ReCut Poppy</div>
          </div>
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
                {{ $t(`${$i18n.locale}`) }}
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li
                  v-for="item in language"
                  :key="item"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click="selectLanguage(item)"
                  >
                    {{ $t(`${item}`) }}
                  </a>
                </li>
              </ul>
            </li>
            <div class="login_username">
              {{ $t("userName") }}
            </div>
            <div class="login_status"></div>
            <button class="login-btn">{{ $t('login') }}</button>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      language: ["zh", "en", "jp"],
    };
  },
  methods: {
    selectLanguage(lang: string) {
      this.$i18n.locale = lang;
      localStorage.setItem("locale", lang);
    },
  },
  mounted() {
    this.$i18n.locale = localStorage.getItem("locale") || "zh";
  },
});
</script>

<style scoped lang="scss">
@import "../styles/components/header.scss";
</style>
