<template>
  <div class="img-container">
    <div id="tui-image-editor"></div>
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
  // "loadButton.display": "none",
  // "downloadButton.display": "none", 
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
    init(imgPath: any) {
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
    },
    // mounted() {
    //   this.init(this.imgUrl);
    // },
    watch: {
      imgUrl: function () {
        this.init(this.imgUrl);
      }
    }
  });
</script>
  
<style scoped lang="scss">
@import "../../styles/components/imageComponent/imageeditor.scss";
</style>
  