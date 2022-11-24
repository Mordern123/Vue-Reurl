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
      short: "",
    };
  },
  methods: {
    goToShort() {
      axios
        .get(
          `https://privatutle-bcdlmykzda-de.a.run.app/api/short/${this.short}`
        )
        .then((res) => {
          document.location.href = res.data.leadUrl;
        })
        .catch((error) => {
          // TODO: error page & "not found" page
          if (error.response.status != 200) {
            document.location.href = "/";
          }
        });
    },
    goToMedia() {
        axios
          .get(
            `https://privatutle-bcdlmykzda-de.a.run.app/api/media/${this.short}`
          )
          .then((res) => {
          this.$router.push({
            name: "Media",
            state: {img: res.data.mediaUrl}
          })
            // document.location.href = res.data.mediaUrl;
          })
          .catch((error) => {
            // console.log(error.response.data.message);
            // TODO: error page & "not found" page
            if (error.response.status != 200) {
              document.location.href = "/";
            }
          });
      },
  },
  mounted() {
    const route = useRoute();
    this.short = route.params["short"] as any;
    if(this.short[0] === '-') {
      this.goToMedia();
    }
    else {
      this.goToShort();
    }
  },
});
</script>
