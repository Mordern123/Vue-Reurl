<template>
  <div class="img-container">
    <div id="tui-image-editor"></div>
    <button
      class="save-btn"
      @click="saveImg()"
      data-bs-dismiss="modal"
    >Save</button>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import ImageEditor from "tui-image-editor";

const customTheme = {
  "common.bi.image": "",
  "common.bisize.width": "0px",
  "common.bisize.height": "0px",
  "common.backgroundImage": "none",
  "common.border": "1px solid #333",
  "common.backgroundColor": "#545f75",
  "header.backgroundImage": "none",
  "header.border": "0px",
  "loadButton.display": "none",
  "downloadButton.display": "none",
  "menu.normalIcon.color": "#8a8a8a",
  "menu.activeIcon.color": "#555555",
  "menu.disabledIcon.color": "#ccc",
  "menu.hoverIcon.color": "#e9e9e9",
  "submenu.normalIcon.color": "#8a8a8a",
  "submenu.activeIcon.color": "#e9e9e9",
};

export default defineComponent({
  props: ["imgUrl"],
  data() {
    return {
      instance: null as any,
    };
  },

  methods: {
    initEditor(imgPath: any) {
      this.instance = new ImageEditor(
        document.querySelector("#tui-image-editor") as any,
        {
          includeUI: {
            loadImage: {
              path: imgPath,
              name: "image",
            },
            menuBarPosition: "bottom",
            theme: customTheme,
          },
          cssMaxHeight: 500,
          cssMaxWidth: 350,
        }
      );
      (
        document.getElementsByClassName("tui-image-editor-main") as any
      )[0].style.top = "45px";
      (
        document.getElementsByClassName(
          "tie-btn-deleteAll tui-image-editor-item help"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-delete tui-image-editor-item help"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-reset tui-image-editor-item help"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-redo tui-image-editor-item help"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-history tui-image-editor-item help enabled"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName("tui-image-editor-item") as any
      )[3].style.display = "none";
      (
        document.getElementsByClassName("tui-image-editor-icpartition") as any
      )[1].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-rotate tui-image-editor-item normal"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-icon tui-image-editor-item normal"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-crop tui-image-editor-item normal"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-mask tui-image-editor-item normal"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName(
          "tie-btn-hand tui-image-editor-item help enabled"
        ) as any
      )[0].style.display = "none";
      (
        document.getElementsByClassName("tui-image-editor-header") as any
      )[0].style.minWidth = "100%";
      (
        document.getElementsByClassName("tui-image-editor-menu") as any
      )[0].style.backgroundColor = "rgb(47, 52, 62)";
    },
    saveImg() {
      const base64String = this.instance.toDataURL(); // base64 文件
      const data = window.atob(base64String.split(",")[1]);
      const ia = new Uint8Array(data.length);
      for (let i = 0; i < data.length; i++) {
        ia[i] = data.charCodeAt(i);
      }
      const blob = new Blob([ia], { type: "image/png" }); // blob 文件
      this.$emit("emit-file", blob, base64String);
      // upload file
    },
  },
  watch: {
    imgUrl: function () {
      this.initEditor(this.imgUrl);
    },
  },
});
</script>
  
<style scoped lang="scss">
@import "../../styles/components/imageComponent/imgeditor.scss";
</style>
  