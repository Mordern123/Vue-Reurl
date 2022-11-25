<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";

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
            state: {
              media: res.data.mediaUrl,
              mediaType: res.data.mediaType,
              addTime: res.data.createTime,
              expTime: res.data.expirationTime,
            },
          });
        })
        .catch((error) => {
          // TODO: error page & "not found" page
          if (error.response.data.message === "ErrMediaPassword") {
            this.$router.push({
              name: "Media",
              state: {
                short: this.short,
                isPwd: true,
              },
            });
          }
          if (error.response.data.message === "ErrOutOfExpirationTime") {
            Swal.fire("請重新上傳圖片", "已達限制時間", "error");
            this.$router.push({
              name: "Home",
            });
          }
        });
    },
  },
  mounted() {
    const route = useRoute();
    this.short = route.params["short"] as any;
    if (this.short[0] === "-") {
      this.goToMedia();
    } else {
      this.goToShort();
    }
  },
});
</script>
