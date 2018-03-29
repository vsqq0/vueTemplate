todo 加入 ts

移动端请使用 flex 布局 pc 端如对兼容性有要求使用 float 布局 flex ie10+.
内置 axios lodash.
判断当前环境 process.env.NODE_ENV=='development' or 'production'.
<template><div></div></template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {};
  },
  computed: {
    // ...mapState([])
  },
  async created() {},
  methods: {
    // ...mapMutations([])
  },
  mixins: []
};
</script>

<style lang='less'>
</style>

// import { RECORD_ADDRESS } from './mutation-types.js';
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
