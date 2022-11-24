<template>
  <div class="d-flex flex-col flex-xl-row justify-content-between">
    <form
      class="dropzone videourl-raw col-xl-4 mb-3"
      id="videoD"
    >
      <div
        class="dz-message"
        data-dz-message
      >
        <span>
          <i
            class="bi bi-image"
            style="font-size: 44px;color: rgba(84, 95, 117)"
          ></i><br />
          Drag and Drop Video<br />
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
            class="delete-btn btn btn-outline-primary px-4"
            @click="deleteVideo()"
          >
            <i class="bi bi-trash3 mr-2"></i>{{ $t("delete") }}
          </button>
        </div>
      </div>
      <div class="col-12">
        <div class="videotitle-setting w-100">
          {{ $t("deadline") }}
        </div>
        <input
          class="videotext-setting col-12"
          type="text"
          placeholder="example: 3000"
          v-model="expTime"
          oninput="if(value>259200)value=259200;if(value<1)value=1;value=value.replace(/[^\d]/g,'')"
        />
      </div>
      <div class="col-12">
        <div class="videotitle-setting w-100">
          {{ $t("password") }}
        </div>
        <input
          class="videotext-setting col-12"
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
    @click="uploadVideo()"
  >
    {{ $t("submit") }}
  </button>
  <div
    v-if="showVideo"
    class="input-group"
  >
    <div class="form-control output-short">
      {{ shortVideo }}
    </div>
    <button
      class="reurl-btn btn btn-outline-secondary"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#QRCodeModal"
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
    id="QRCodeModal_video"
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
import qrCode from "qrcode.vue";

export default defineComponent({
  components: {
    qrCode,
  },
  data() {
    return {
      localHref: "",
      expTime: "",
      password: "",
      myDropzone: null as any,
      showVideo: false,
      shortVideo: "",
    };
  },
  methods: {
    deleteVideo() {
      this.myDropzone.removeAllFiles(true);
    },
    uploadVideo() {
      this.myDropzone.processQueue();
    },
    dropVideo() {
      /* eslint-disable  @typescript-eslint/no-this-alias */
      const vm = this;
      this.myDropzone = new Dropzone("#videoD", {
        url: "https://privatutle-bcdlmykzda-de.a.run.app/api/media/video",
        autoProcessQueue: false,
        paramName: "video",
        acceptedFiles: ".mp4",
        maxFiles: 1,
        init: function () {
          this.on("maxfilesexceeded", (file) => {
            this.removeAllFiles(true);
            this.addFile(file);
          });
          this.on("thumbnail", () => {
            vm.showVideo = false;
          });
          this.on("sending", (file, xhr, formData) => {
            formData.append("expirationTime", vm.expTime || "3000");
            if (vm.password.length) {
              formData.append("password", vm.password);
            }
          });
          this.on("success", (file: any, response: any) => {
            vm.shortVideo = `${vm.localHref}${response.shortUrl}`;
            vm.showVideo = true;
          });
        },
      });
    },
    clickCopy() {
      navigator.clipboard.writeText(this.shortVideo);
    },
    clickGoUrl() {
      window.open(this.shortVideo);
    },
  },
  mounted() {
    this.dropVideo();
    this.localHref = document.location.href;
  },
});
</script>
    
<style scoped lang="scss">
@import "../../styles/components/videoComponent/videoviewer.scss";
</style>
    