<template>
  <div class="img-container">
    <div id="tui-image-editor"></div>
    <button class="save-btn" @click="saveImg()">保存</button>
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
  props: ['imgUrl'],
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
            initMenu: "draw",
            menuBarPosition: "bottom",
						theme: customTheme,
          },
        cssMaxWidth: 400,
        cssMaxHeight: 400,
        }
      );
			(document.getElementsByClassName("tui-image-editor-help-menu top") as any)[0].style.width = "80%";
			(document.getElementsByClassName("tui-image-editor-help-menu top") as any)[0].style.display = "none";
			(document.getElementsByClassName("tui-image-editor-icpartition") as any)[1].style.display = "none";
			(document.getElementsByClassName("tie-btn-rotate tui-image-editor-item normal") as any)[0].style.display = "none";
			(document.getElementsByClassName("tie-btn-icon tui-image-editor-item normal") as any)[0].style.display = "none";
			(document.getElementsByClassName("tie-btn-crop tui-image-editor-item normal") as any)[0].style.display = "none";
			(document.getElementsByClassName("tie-btn-mask tui-image-editor-item normal") as any)[0].style.display = "none";
			(document.getElementsByClassName("tui-image-editor-header") as any)[0].style.minWidth = "100%";
    },
    saveImg() {
      console.log()
      const base64String = this.instance.toDataURL() // base64 文件
      const data = window.atob(base64String.split(',')[1]);
      const ia = new Uint8Array(data.length);
      for (let i = 0; i < data.length; i++) {
        ia[i] = data.charCodeAt(i)
      }
      const blob = new Blob([ia], { type: 'image/png'});// blob 文件
      const form = new FormData();
      form.append('image', blob, 'img.png');
      this.$emit("emit-file", form , blob, base64String);
      // upload file
    }
  },
  watch: {
    imgUrl: function () {
      this.initEditor(this.imgUrl);
    }
  }
  });
</script>
  
<style scoped lang="scss">
@import "../../styles/components/imageComponent/imageeditor.scss";
</style>
  