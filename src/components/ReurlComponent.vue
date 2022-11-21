<template>
  <div class="reurl-all-content">
    <ul class="title-content nav nav-pills justify-content-between">
      <li
        class="col-2 nav-item"
        v-for="(item, index) in categoryMap"
        :key="item.id"
      >
        <a
          :href="item.id"
          class="nav-link d-flex justify-content-center"
          :class="index === 0 ? 'active' : ''"
          data-bs-toggle="tab"
          @click="emitTitle(item.title)"
        ><img
            class="mr-2"
            :src="getImg(item.img)"
          />{{
            $t(`${item.name}`)
          }}</a>
      </li>
    </ul>
    <div class="raw-content tab-content">
      <div
        class="tab-pane fade show active"
        id="reurl"
      >
        <UrlViewer></UrlViewer>
      </div>
      <div
        class="tab-pane fade"
        id="imgurl"
      >
        <ImgViewer></ImgViewer>
      </div>
      <div
        class="tab-pane fade"
        id="videourl"
      >
        <p class="videourl-raw">Messages tab content ...</p>
      </div>
      <div
        class="tab-pane fade"
        id="audiourl"
      >
        <p class="testourl-raw">Messages tab content ...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UrlViewer from "@/components/urlComponent/UrlViewer.vue";
import ImgViewer from "@/components/imageComponent/ImgViewer.vue";

interface categoryMapItem {
  name: string;
  img: string;
  id: string;
  title: string;
}

export default defineComponent({
  components: {
    UrlViewer,
    ImgViewer,
  },
  data() {
    return {
      imgFile: {} as File,
      imgBase64: "",
      categoryMap: [
        {
          name: "url",
          img: "link.svg",
          id: "#reurl",
          title: "短網址",
        },
        {
          name: "image",
          img: "image.svg",
          id: "#imgurl",
          title: "圖片轉網址",
        },
        {
          name: "video",
          img: "video.svg",
          id: "#videourl",
          title: "影片轉網址",
        },
        {
          name: "audio",
          img: "mic.svg",
          id: "#audiourl",
          title: "語音轉網址",
        },
      ] as Array<categoryMapItem>,
    };
  },

  methods: {
    getImg(img: string) {
      return require(`@/assets/icons/${img}`);
    },
    emitTitle(title: string) {
      this.$emit("emit-title", title);
    },
  },
});
</script>

<style scoped lang="scss">
@import "../styles/components/reurlcomponent.scss";
</style>
