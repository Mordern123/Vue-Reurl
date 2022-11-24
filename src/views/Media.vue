<template>
    <div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { useRoute } from "vue-router";
  import axios from "axios";
  
  export default defineComponent({
    data() {
      return {
        img: "",
      };
    },
    methods: {
      goToMedia() {
        axios
          .get(
            `https://storage.googleapis.com/privatutle/image/${this.img}`
          )
          .then((res) => {
            document.location.href = res.data.leadUrl;
          })
          .catch(function (error) {
            // TODO: error page & "not found" page
            if (error.response.status != 200) {
              document.location.href = "/";
            }
          });
      },
    },
    mounted() {
      const route = useRoute();
      this.img = route.params["media"] as any;
      this.goToMedia();
    },
  });
  </script>
  