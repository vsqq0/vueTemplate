<template>
  <div>
    <div class="vux-demo">
      <a> sadas</a>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux';
// import $ from '../../Utils/common';
// import _ from 'lodash';
// import axios from 'axios';

export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      msg: 'Hello World!'
    };
  },
  async created() {
    // console.log(await $.get('flagStore'));
  }
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>