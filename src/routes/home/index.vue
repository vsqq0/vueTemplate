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
    // var a = await $.get('http://www.zjttmall.com/login', {
    //   'user.phone': '1713550041',
    //   'user.password': 'e9bc0e13a8a16cbb07b175d92a113126'
    // });
    console.log(this.env_mock);

    var a = await $.get('query');
    console.log(a);
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