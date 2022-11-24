<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import Swal from "sweetalert2";
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
        .catch(function (error) {
          // TODO: error page & "not found" page
          if (error.response.status != 200) {
            document.location.href = "/";
          }
        });
    },
    goToMedia() {
      let short : string = this.short;
      axios
        .get(
          `https://privatutle-bcdlmykzda-de.a.run.app/api/media/${this.short}`
        )
        .then((res) => {
          router.push({ name: "Media", state: { img: res.data.mediaUrl }});
        })
        .catch(
          function (error) {
          // TODO: error page & "not found" page
          if (error.response.data.message == "ErrMediaPassword") {
            document.location.href = "/verify/"+short;
          }
          if (error.response.data.message == "ErrOutOfExpirationTime") {
                Swal.fire('Out of expiration time !')
                .then(function(){
                    document.location.href = "/";
                });
          }
        });
    },
  },
  mounted() {
    const route = useRoute();
    this.short = route.params["short"] as any;
    if (this.short[0] == "-") {
      this.goToMedia();
    } else {
      this.goToShort();
    }
  },
});
</script>
