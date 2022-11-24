<template>
    <div class="input-password-content input-group mb-6 px-4">
        <input
          type="text"
          class="form-control"
          placeholder="Input Passwords"
          v-model="password"
        />
        <button
          class="password-btn btn btn-outline-secondary"
          type="button"
          @click="verify()"
        >
          <i class="bi bi-send"></i>
        </button>
      </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import Swal from "sweetalert2";
import axios from "axios";

export default defineComponent({
    props: {
        short: String
    },
  data() {
    return {
      password: "",
    };
  },
  methods: {
    verify() {
      axios
        .get(
          `https://privatutle-bcdlmykzda-de.a.run.app/api/media/${this.short}?password=${this.password}`
        )
        .then((res) => {
            router.push({ name: "Media", state: { img: res.data.mediaUrl }});
        })
        .catch(
            function (error) {
            if (error.response.data.message == "ErrMediaPassword") {
                Swal.fire('Wrong password !')
            } 
            if (error.response.data.message == "ErrOutOfExpirationTime") {
                Swal.fire('Out of expiration time !')
                .then(function(){
                    document.location.href = "/";
                });
            }
        }
        );
    },
  },
});
</script>
