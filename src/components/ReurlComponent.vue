<template>
  <div class="all-content">
    <ul class="title-content nav nav-pills justify-content-between">
      <li class="col-2 nav-item" v-for="(item, index) in categoryMap" :key="item.id">
        <a
          v-if="index==0"
          :href="item.id"
          class="nav-link active d-flex justify-content-center"
          data-bs-toggle="tab"
          @click="emitTitle(item.title)"
          ><img class="mr-2" :src="getImg(item.img)" />{{ item.name }}</a
        >
        <a
          v-else
          :href="item.id"
          class="nav-link d-flex justify-content-center"
          data-bs-toggle="tab"
          @click="emitTitle(item.title)"
          ><img class="mr-2" :src="getImg(item.img)" />{{ item.name }}</a
        >
      </li>
    </ul>
    <div class="raw-content tab-content">
      <div class="tab-pane fade show active" id="reurl">
        <div class="reurl-raw d-flex flex-col">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="輸入網址"
              v-model="message"
            />
            <button
              class="reurl-btn btn btn-outline-secondary"
              type="button"
              @click="getShortUrl()"
            >
              <i class="bi bi-send"></i>
            </button>
          </div>
          <div v-if="showUrl" class="input-group">
            <div
              type="text"
              class="form-control"
              style="background-color: #e6ecf8"
            >
              {{ shortUrl }}
            </div>
            <button class="reurl-btn btn btn-outline-secondary" type="button">
              <i class="bi bi-send-check"></i>
            </button>
            <button class="reurl-btn btn btn-outline-secondary" type="button">
              <i class="bi bi-qr-code-scan"></i>
            </button>
            <button class="reurl-btn btn btn-outline-secondary" type="button">
              <i class="bi bi-clipboard-check"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="imgurl">
        <p class="imgurl-raw">Profile tab content ...</p>
      </div>
      <div class="tab-pane fade" id="videourl">
        <p class="videourl-raw">Messages tab content ...</p>
      </div>
      <div class="tab-pane fade" id="audiourl">
        <p class="testourl-raw">Messages tab content ...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface categoryMapItem {
  name: string;
  img: string;
  id: string;
  title: string;
}

export default defineComponent({
  data() {
    return {
      message: "",
      showUrl: false,
      shortUrl: "",
      categoryMap: [
        {
          name: "網址",
          img: "link.svg",
          id: "#reurl",
          title: "短網址"
        },
        {
          name: "圖片",
          img: "image.svg",
          id: "#imgurl",
          title: "圖片轉網址"
        },
        {
          name: "影片",
          img: "video.svg",
          id: "#videourl",
          title: "影片轉網址"
        },
        {
          name: "語音",
          img: "mic.svg",
          id: "#audiourl",
          title: "語音轉網址"
        }
      ] as Array<categoryMapItem>,
    };
  },
  methods: {
    getImg(img: string) {
      return require(`@/assets/icons/${img}`)
    },
    emitTitle(title: string) {
      this.$emit("emit-title", title);
    },
    getShortUrl() {
      axios
        .post(
          `https://privatutle-bcdlmykzda-de.a.run.app/api/short`,
          { leadUrl: this.message }
          // {
          //   headers: {
          //     Authorization: loginToken,
          //   },
          // }
        )
        .then((res) => {
          console.log(res.data);
          this.showUrl = true;
          this.shortUrl = res.data.shortUrl;
        });
    },
  },
});
</script>

<style scoped lang="scss">
@import "../styles/components/reurlcomponent.scss";
</style>
