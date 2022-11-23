<template>
  <div style="overflow: hidden;">
    <div class="w-100">
      <Header></Header>
    </div>
    <div class="all-container d-flex flex-col">
      <div class="title-container d-flex justify-content-center align-items-center">
        <div class="top-detail">
          <div class="title-content d-flex flex-wrap">
            <div
              class="col-10 d-flex justify-content-center mr-2"
              style="color: #2e3440"
            >
              <div class="mr-2 animate__animated animate__rotateInDownLeft animate__slower animate__infinite	infinite">
                {{ title }}
              </div>
              <div style="color: black">
                {{ $t(slogan) }}
              </div>
            </div>
            <div class="reindeer-img">
              <img src="../assets/img/reindeer.png">
              <a
                class="copyright-reindeer"
                href="https://www.flaticon.com/free-icons/deer"
                title="deer icons"
              >
                Deer icons created by monkik - Flaticon
              </a>
            </div>
          </div>
          <div class="description-content pt-1">
            {{ $t(description) }}
          </div>
        </div>
      </div>
      <div class="reurl-container d-flex flex-col align-items-center py-3">
        <ReurlComponent @emit-title="getEmitTitle"></ReurlComponent>

      </div>
      <div class="content-container d-flex justify-content-center py-3">
        <ContentComponent></ContentComponent>
      </div>
    </div>
    <div class="w-100">
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import ReurlComponent from "@/components/ReurlComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import Footer from "@/components/Footer.vue";
import "animate.css";

export default defineComponent({
  components: {
    Header,
    ReurlComponent,
    ContentComponent,
    Footer,
  },
  data() {
    return {
      title: "ReCut",
      slogan: "shortenURL",
      description: "description",
    };
  },
  methods: {
    getEmitTitle(title: string) {
      this.slogan = title;
    },
  },
});
</script>
<style scoped lang="scss">
@import "../styles/home.scss";
</style>
