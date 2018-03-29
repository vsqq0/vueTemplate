<script>
import { mapState, mapMutations } from 'vuex';
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(['userInfo'])
  },
  async created() {
    await this.loadUserInfo();
    console.log(this.userInfo);
  },
  methods: {
    ...mapMutations(['SAVE_USER_INFO']),
    async loadUserInfo() {
      let data;
      data = await this.get('userInfo');
      this.SAVE_USER_INFO(data.data.data);
    }
  }
};
</script>
<template>
  <div>
    <div class="bt px1-b cell">
      <div class="d1d1">头像</div>
      <div class="hc">
        <img class="userHead" src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373411777,3992091759&fm=27&gp=0.jpg' alt="">
        <div class="d1d1 iconfont">&#xe63f;</div>
      </div>
    </div>
    <div class="bt px1-b cell">
      <div class="d1d1">昵称</div>
      <div class="hc">
        <div>{{userInfo.nickName}}</div>
        <div class="d1d1 iconfont">&#xe63f;</div>
      </div>
    </div>
    <div class="bt px1-b cell">
      <div class="d1d1">性别</div>
      <div class="hc">
        <div>{{userInfo.sex?'男':'女'}}</div>
        <div class="d1d1 iconfont">&#xe63f;</div>
      </div>
    </div>
    <div class="bt px1-b cell">
      <div class="d1d1">手机号</div>
      <div class="hc">
        <div>{{userInfo.phone}}</div>
        <div class="d1d1 iconfont">&#xe63f;</div>
      </div>
    </div>
    <div class="block-xl"></div>
    <div class="bt cell">
      <div class="d1d1">修改密码</div>
      <div class="hc">
        <div class="d1d1 iconfont">&#xe63f;</div>
      </div>
    </div>
    <div class="setFoot footCell wc">
      <div class="d1">退出登陆</div>
    </div>
  </div>
</template>
<style lang='less'>
.cell {
  padding-left: 5%;
  padding-right: 5%;
  line-height: 50px;
  background: white;
  &:active {
    background: rgb(243, 243, 243);
  }
  .d1d1 {
    margin-left: 10px;
  }
}
.footCell {
  line-height: 50px;
  background: #fd5459;
  .d1 {
    color: white;
  }
}
.userHead {
  height: 40px;
  width: 40px;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
</style>