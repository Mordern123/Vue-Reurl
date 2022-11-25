<template>
  <div class="d-flex flex-col flex-xl-row justify-content-between">
    <form
      class="dropzone imgurl-raw col-xl-4 mb-3"
      id="imgD"
    >
      <div
        class="dz-message"
        data-dz-message
      >
        <span>
          <i
            class="bi bi-image"
            style="font-size: 44px; color: rgba(84, 95, 117)"
          ></i><br />
          Drag and Drop Image<br />
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
            @click="deleteImg()"
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
          v-model="expTime"
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
          v-model="password"
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
      data-bs-toggle="modal"
      data-bs-target="#QRCodeModal_img"
      title="QRCode"
    >
      <i class="bi bi-qr-code-scan"></i>
    </button>
    <button
      class="reurl-btn btn btn-outline-secondary"
      type="button"
      data-bs-toggle="tooltip"
      title="Copy"
      @click="clickCopy()"
    >
      <i class="bi bi-clipboard-check"></i>
    </button>
    <button
      class="reurl-btn btn btn-outline-secondary"
      type="button"
      data-bs-toggle="tooltip"
      title="Go"
      @click="clickGoUrl()"
    >
      <i class="bi bi-send-check"></i>
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
          <ImgEditor
            :imgUrl="imgUrl"
            @emit-file="getEditImg"
          ></ImgEditor>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="QRCodeModal_img"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <p style="font-weight: bolder">
            {{ `QR Code： ${shortImg}` }}
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <qrCode
            :value="shortImg"
            :size="100"
            level="H"
            background="#8895af"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import Dropzone from "dropzone";
import ImgEditor from "@/components/imageComponent/ImgEditor.vue";
import qrCode from "qrcode.vue";

export default defineComponent({
  components: {
    ImgEditor,
    qrCode
  },
  data() {
    return {
      expTime: "",
      password: "",
      localHref: "",
      imgUrl: "",
      myDropzone: null as any,
      isImgEdit: true,
      showImg: false,
      shortImg: "",
    };
  },
  methods: {
    getEditImg(blob: Blob, base64: string) {
      let file = new File([blob], "image.png");
      this.myDropzone.addFile(file);
      document.getElementsByClassName(
        "dz-image"
      )[0].innerHTML = `<img data-dz-thumbnail src=${base64}>`;
      // myModal.hide()
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
      this.myDropzone = new Dropzone("#imgD", {
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
            formData.append("expirationTime", vm.expTime || "3600");
            if (vm.password.length) {
              formData.append("password", vm.password);
            }
          });
          this.on("success", (file: any, response: any) => {
            vm.shortImg = `${vm.localHref}${response.shortUrl}`;
            vm.showImg = true;
            vm.isImgEdit = true;
          });
        },
      });
    },
    clickCopy() {
      navigator.clipboard.writeText(this.shortImg);
    },
    clickGoUrl() {
      window.open(this.shortImg);
    },
  },
  mounted() {
    this.dropImg();
    this.localHref = document.location.href;
  },
});
</script>
  
<style scoped lang="scss">
@import "../../styles/components/imageComponent/imgviewer.scss";
</style>
  