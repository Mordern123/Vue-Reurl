<template>
  <div>
    <div class="d-flex align-items-center p-10" style="height: 400px;background-color: #F5E3DA;">
      <div class="col-6">
        <div style="font-size: 48px;font-weight: bold;">{{title}}</div>
        <div style="color: gray;">{{description}}</div>
        <button class="mt-3">關於我們</button>
      </div>
      <div class="col-6"></div>
    </div>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  data() {
    return {
      title: "Free for Smart Short URL",
      description: "你可以在這裡簡單、安全、快速的進行縮短網址或是將圖片轉成網址",
    }
  }
}
</script>
