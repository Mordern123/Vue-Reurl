<template>
    <div class="img  my-10 px-12" >
        <img :src="img" alt="" style="pointer-events:none ">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        img: String
    },
  methods: {
  },
  mounted() {
    window.onbeforeunload=function() {
        history.replaceState(history.state.img, "", "")
    }
  },
});
</script>
