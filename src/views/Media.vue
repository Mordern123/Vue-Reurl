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
      <div 
        class="userimage-container d-flex justify-content-center align-items-center p-3 mb-4"
        @contextmenu.prevent
      >
        <div 
          class=" d-flex flex-col justify-content-center align-items-center w-100 h-100 p-3"
          style="background-color: #3B4252; color: white; border-radius: 10px"
        >
          <img :src="userData" alt="資料無法顯示" class="mb-4">
          <p>{{ $t('imgType') }}：{{ mediaType }}</p>
          <p>{{ $t('uploadTime') }}：{{ addMediaTime }}</p>
          <p>{{ $t('expTime') }}：{{ expMediaTime }}</p>
        </div>
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
import Swal from "sweetalert2";

export default defineComponent({
  components: {
    Header,
    ContentComponent,
    UserFlow,
    Footer,
  },
  data() {
    return {
      userData: "",
      mediaType: "",
      addMediaTime: "",
      expMediaTime: "",
      title: "ReCut",
      slogan: "shortenURL",
      description: "description",
    };
  },
  methods: {
    timestampToHM(timestamp: number) {
      const date = new Date(timestamp * 1000);
      return `${date.getFullYear()} / ${date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : `${date.getMonth() + 1}`
          } / ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} / 
          ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`;
    },
  },
  mounted() {
    Swal.fire("Done", "成功上傳作業!", "success");
    this.userData = history.state.media;
    this.mediaType = history.state.mediaType;
    this.addMediaTime = this.timestampToHM(history.state.addTime);
    this.expMediaTime = this.timestampToHM(history.state.expTime);
  }
});
</script>
<style scoped lang="scss">
@import "../styles/home.scss";
</style>

