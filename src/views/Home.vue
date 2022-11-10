<template>
  <div class="all-container d-flex flex-col">
    <div class="top-container d-flex justify-content-center align-items-center">
      <div class="top-detail">
        <div class="title-content d-flex flex-wrap ">
          <div
            class="col-8 d-flex justify-content-center mr-2 "
            style="color: #2E3440"
          >
            <div class="mr-2 animate__animated animate__rotateInDownLeft animate__slower animate__infinite">{{ title }}</div>
            <div style="color: black;">
              {{ slogan }}
            </div>
          </div>
          
        </div>
        <div class="description-content pt-1">
          {{ description }}
        </div>
      </div>
    </div>
    <div class="bottom-container d-flex justify-content-center py-3">
      <ReurlComponent></ReurlComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ReurlComponent from "@/components/ReurlComponent.vue"; // @ is an alias to /src
import "animate.css";

@Options({
  components: {
    ReurlComponent,
  },
})
export default class Home extends Vue {
  data() {
    return {
      title: "Reurl",
      slogan: "短網址",
      description: "安全、簡單、快速",
    };
  }
 
}
</script>
<style scoped lang="scss">
@import "../styles/home.scss";
</style>
