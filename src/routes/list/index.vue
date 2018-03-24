<template>
  <div>
    <div class="vux-demo">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux';
import axios from 'axios';
import _ from 'lodash';

export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    };
  },
  created() {
    var a = axios.get(
      'login?user.phone=17135500411&user.password=e9bc0e13a8a16cbb07b175d92a113126'
    );
    console.log(a);
    _.map([1, 2, 3]);
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