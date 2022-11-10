<template>
  <div class="all-container d-flex flex-col">
    <div
      class="top-container d-flex justify-content-center align-items-center p-10"
    >
      <div class="top-detail">
        <div class="col-6">
          <div class="title-content">
            {{ title }}
          </div>
          <div class="description-content">
            {{ description }}
          </div>
          <button class="about-content mt-3">關於我們...</button>
        </div>
        <div class="col-6"></div>
      </div>
    </div>
    <div class="bottom-container d-flex justify-content-center">
      <ReurlComponent></ReurlComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ReurlComponent from "@/components/ReurlComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    ReurlComponent,
  },
})
export default class Home extends Vue {
  data() {
    return {
      title: "Free for Smart Short URL",
      description:
        "你可以在這裡簡單、安全、快速的進行縮短網址或是將圖片轉成網址",
    };
  }
}
</script>
<style scoped lang="scss">
@import "../styles/home.scss";
</style>
