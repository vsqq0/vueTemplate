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
import $ from '../../Utils/common';
// import _ from 'lodash';

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
  async created() {
    var a = await $.get('cate');
    console.log(a);
    var foo = (i, time) => {
      console.log(i + 1);
      return $.setTimeOut(() => {
        console.log(i);
      }, time);
    };
    await foo(1, 100);
    await foo(2, 50);
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