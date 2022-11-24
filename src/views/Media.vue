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
            <div class="dog-img">
              <img src="../assets/img/dog.png">
            </div>
          </div>
          <div class="description-content pt-1">
            {{ $t(description) }}
          </div>
        </div>
      </div>
      <div class="userimage-container d-flex justify-content-center align-items-center py-3 mb-3">
        <img :src="userImage" alt="">
      </div>
      <div class="content-container d-flex justify-content-center py-3">
        <ContentComponent></ContentComponent>
      </div>
      <div class="userflow-container d-flex justify-content-center pb-3">
        <UserFlow></UserFlow>
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
import ContentComponent from "@/components/ContentComponent.vue";
import UserFlow from "@/components/UserFlow.vue";
import Footer from "@/components/Footer.vue";
import "animate.css";

export default defineComponent({
  components: {
    Header,
    ContentComponent,
    UserFlow,
    Footer,
  },
  data() {
    return {
      userImage: "",
      title: "ReCut",
      slogan: "shortenURL",
      description: "description",
    };
  },
  mounted() {
    this.userImage = history.state.img;
  }
});
</script>
<style scoped lang="scss">
@import "../styles/home.scss";
</style>

