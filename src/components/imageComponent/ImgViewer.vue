<template>
  <div class="d-flex flex-col flex-xl-row justify-content-between">
    <form class="dropzone imgurl-raw col-xl-4 mb-3">
      <div
        class="dz-message"
        data-dz-message
      >
        <span>
          <i
            class="bi bi-image"
            style="font-size: 44px"
          ></i><br />
          Drag and Drop File<br />
          or<br />
        </span>
        <span style="
            background-color: azure;
            border-radius: 10px;
            padding: 3px;
          ">
          Browser
        </span>
      </div>
    </form>
    <div class="col-xl-7">
      <div class="d-flex justify-content-center justify-content-xl-end mb-3">
        <div
          class="btn-group"
          role="group"
        >
          <button
            class="edit-btn btn btn-outline-primary px-4"
            data-bs-toggle="modal"
            data-bs-target="#imgModal"
            :disabled="isImgEdit"
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
          oninput="if(value>259200)value=259200;if(value<1)value=1;value=value.replace(/[^\d]/g,'')"
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
          oncontextmenu="return false;"
          oninput="if(value.length>18)value=value.slice(0,18);value=value.replace(/[\u4e00-\u9fa5]/g,'')"
        />
      </div>
    </div>
  </div>
  <button
    class="upload-btn col-12 mb-3"
    @click="uploadImg()"
  >
    {{ $t("submit") }}
  </button>
  <div
    v-if="showImg"
    class="input-group"
  >
    <div class="form-control output-short">
      {{ shortImg }}
    </div>
    <button
      class="reurl-btn btn btn-outline-secondary"
      type="button"
    >
      <i class="bi bi-qr-code-scan"></i>
    </button>
    <button
      class="reurl-btn btn btn-outline-secondary"
      type="button"
    >
      <i class="bi bi-clipboard-check"></i>
      <button
        class="reurl-btn btn btn-outline-secondary"
        type="button"
      >
        <i class="bi bi-send-check"></i>
      </button>
    </button>
  </div>

  <div
    class="modal fade"
    id="imgModal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div
        class="modal-content"
        style="background: #3B4252"
      >
        <div class="modal-header">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            style="color: white"
          ></button>
        </div>
        <div class="modal-body">
          <ImageEditor
            :imgUrl="imgUrl"
            @emit-file="getEditImg"
          ></ImageEditor>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import Dropzone from "dropzone";
import ImageEditor from "@/components/imageComponent/ImageEditor.vue";

export default defineComponent({
  components: {
    ImageEditor,
  },
  data() {
    return {
      imgUrl: "",
      myDropzone: null as any,
      isImgEdit: true,
      showImg: false,
      shortImg: "",
    };
  },

  methods: {
    getDataUrl(url: string) {
      this.imgUrl = url;
    },
    getEditImg(blob: Blob, base64: string) {
      let file = new File([blob], "image.png");
      this.myDropzone.addFile(file);
      document.getElementsByClassName(
        "dz-image"
      )[0].innerHTML = `<img data-dz-thumbnail src=${base64}>`;
    },
    deleteImg() {
      this.myDropzone.removeAllFiles(true);
      this.isImgEdit = true;
    },
    uploadImg() {
      this.myDropzone.processQueue();
    },
    dropImg() {
      /* eslint-disable  @typescript-eslint/no-this-alias */
      const vm = this;
      this.myDropzone = new Dropzone("form.dropzone", {
        url: "https://privatutle-bcdlmykzda-de.a.run.app/api/media/image",
        autoProcessQueue: false,
        paramName: "image",
        acceptedFiles: ".jpeg,.jpg,.png,.gif,.bpm,.webp",
        maxFiles: 1,
        init: function () {
          this.on("maxfilesexceeded", (file) => {
            this.removeAllFiles(true);
            this.addFile(file);
          });
          this.on("thumbnail", (file) => {
            vm.imgUrl = file.dataURL!;
            vm.showImg = false;
            vm.isImgEdit = false;
          });
          this.on("sending", (file, xhr, formData) => {
            formData.append("expirationTime", "3000");
          });
          this.on("success", (file: any, response: any) => {
            vm.shortImg = response.shortUrl;
            vm.showImg = true;
            vm.isImgEdit = true;
          });
        },
      });
    },
  },
  mounted() {
    this.dropImg();
  },
});
</script>
  
<style scoped lang="scss">
@import "../../styles/components/imageComponent/imgviewer.scss";
</style>
  