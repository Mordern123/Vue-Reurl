<template>
  <div class="all-content">
    <ul class="title-content nav nav-pills justify-content-between">
      <li
        class="col-2 nav-item"
        v-for="(item, index) in categoryMap"
        :key="item.id"
      >
        <a
          v-if="index == 0"
          :href="item.id"
          class="nav-link active d-flex justify-content-center"
          data-bs-toggle="tab"
          @click="emitTitle(item.title)"
          ><img class="mr-2" :src="getImg(item.img)" />{{
            $t(`${item.name}`)
          }}</a
        >
        <a
          v-else
          :href="item.id"
          class="nav-link d-flex justify-content-center"
          data-bs-toggle="tab"
          @click="emitTitle(item.title)"
          ><img class="mr-2" :src="getImg(item.img)" />{{
            $t(`${item.name}`)
          }}</a
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
      <div class="img-block tab-pane fade" id="imgurl">
        <div class="d-flex flex-col flex-xl-row justify-content-between">
          <form class="dropzone imgurl-raw col-xl-4 mb-3">
            <div class="dz-message" data-dz-message>
              <span>
                <i class="bi bi-image" style="font-size: 44px"></i><br />
                Drag and Drop File<br />
                or<br />
              </span>
              <span
                style="
                  background-color: azure;
                  border-radius: 10px;
                  padding: 3px;
                "
              >
                Browser
              </span>
            </div>
          </form>
          <div class="col-xl-7">
            <div
              class="d-flex justify-content-center justify-content-xl-end mb-3"
            >
              <div
                class="btn-group"
                role="group"
              >
                <button 
                  class="edit-btn btn btn-outline-primary px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#imgModal"
                >
                  <i class="bi bi-pencil-square mr-2"></i>{{ $t("editor") }}
                </button>
                <button
                  class="delete-btn btn btn-outline-primary px-4"
                  @click="deleteImg"
                >
                  <i class="bi bi-trash3 mr-2"></i>{{ $t("delete") }}
                </button>
              </div>
            </div>
            <div class="col-12">
              <div class="imgtitle-setting w-100">
                {{ $t("deadline") }}
              </div>
              <input
                class="imgtext-setting col-12"
                type="text"
                placeholder="example: 3000"
                oninput="if(value>259200)value=259200;if(value<1)value=1"
              />
            </div>
            <div class="col-12">
              <div class="imgtitle-setting w-100">
                {{ $t("password") }}
              </div>
              <input
                class="imgtext-setting col-12"
                type="text"
                placeholder="example: 123456"
                oninput="if(value.length>18)value=value.slice(0,18)"
              />
            </div>
          </div>
        </div>
        <button class="upload-btn col-12" @click="uploadImg()">
          {{ $t("submit") }}
        </button>
        <div v-if="showImg" class="input-group">
          <div
            class="form-control"
            style="background-color: #e6ecf8"
          >
            {{ shortImg }}
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
      <div class="tab-pane fade" id="videourl">
        <p class="videourl-raw">Messages tab content ...</p>
      </div>
      <div class="tab-pane fade" id="audiourl">
        <p class="testourl-raw">Messages tab content ...</p>
      </div>
    </div>
  </div>

  <div class="modal fade" id="imgModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" >圖片編輯器</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ImageEditor></ImageEditor>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import Dropzone from "dropzone";
import ImageEditor from "@/components/imageComponent/ImageEditor.vue";
import { data } from "jquery";

interface categoryMapItem {
  name: string;
  img: string;
  id: string;
  title: string;
}

export default defineComponent({
  components: {
    ImageEditor,
  },
  data() {
    return {
      showEditor: false,
      myDropzone: null as any,
      message: "",
      showUrl: false,
      shortUrl: "",
      showImg: false,
      shortImg: "",
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
    getShortUrl() {
      axios
        .post(
          `https://privatutle-bcdlmykzda-de.a.run.app/api/short/`,
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
    deleteImg() {
      this.myDropzone.removeAllFiles(true);
    },
    uploadImg() {
      this.myDropzone.processQueue();
    },
    editImg() {
      this.showEditor = true;
    },
    addImg() {
      // let vm = this;
      this.myDropzone = new Dropzone("form.dropzone", {
        url: "https://privatutle-bcdlmykzda-de.a.run.app/api/media/image",
        autoProcessQueue: false,
        paramName: "image",
        addRemoveLinks: true,
        dictCancelUpload: "上傳圖片中",
        dictRemoveFile: "點此刪除圖片",
        acceptedFiles: ".jpeg,.jpg,.png,.gif,.bpm,.webp",
        maxFiles: 1,
        init: function () {
          this.on("maxfilesexceeded", (file) => {
            this.removeAllFiles(true);
            this.addFile(file);
          });
          this.on("thumbnail", (file, dataURL) => {
            console.log(dataURL)
          });
          this.on("sending", (file, xhr, formData) => {
            formData.append("expirationTime", "3000");
          });
          this.on("success", (files: any, response: any) => {
            console.log(response);
          });
        },
      });
    },
  },
  mounted() {
    Dropzone.autoDiscover = false;
    this.addImg();
  },
});
</script>

<style scoped lang="scss">
@import "../styles/components/reurlcomponent.scss";
</style>
