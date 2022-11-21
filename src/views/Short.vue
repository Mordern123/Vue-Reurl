<script lang="ts" setup>
import { useRoute } from 'vue-router'
import axios from "axios";

const route = useRoute()
let short=route.params['short']

axios
    .get(
      `https://privatutle-bcdlmykzda-de.a.run.app/api/short/${short}`,
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
</script>
