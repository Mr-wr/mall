<template>
  <div class="title-bar">
    <detail-title-bar></detail-title-bar>
    <h1>
      {{ iid }}
    </h1>
  </div>
</template>

<script>
import DetailTitleBar from "./childComps/DetailTitleBar";
import { getDetail } from "network/detail";
export default {
  components: { DetailTitleBar },
  data() {
    return {
      iid: {
        type: String,
      },
    };
  },
  methods: {},
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
    });
  },
  mounted() {},
};
</script>

<style>
</style>