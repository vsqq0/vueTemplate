<script>
export default {
  name: 'app',
  components: {}
};
</script>
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<style lang='less'>
@import '~vux/src/styles/reset.less';

@font-face {
  font-family: 'iconfont'; /* project id 584791 */
  src: url('//at.alicdn.com/t/font_584791_76sykccxws8gds4i.eot');
  src: url('//at.alicdn.com/t/font_584791_76sykccxws8gds4i.eot?#iefix')
      format('embedded-opentype'),
    url('//at.alicdn.com/t/font_584791_76sykccxws8gds4i.woff') format('woff'),
    url('//at.alicdn.com/t/font_584791_76sykccxws8gds4i.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_584791_76sykccxws8gds4i.svg#iconfont')
      format('svg');
}
// 置于最底端
.setFoot {
  position: fixed;
  bottom: 0;
  width: 100%;
}
// 子元素垂直居中
.hc {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
// 子元素水平居中
.wc {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
// 子元素两端对齐
.bt {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
// 盒模型垂直布局
.col {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
// 子元素占据剩余的空间
.flex1 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.flex,
.hc,
.wc,
.bt,
.col {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.block-ms {
  height: 3px;
}
.block-sm {
  height: 6px;
}
.block {
  height: 9px;
}
.block-lg {
  height: 15px;
}
.block-xl {
  height: 21px;
}
.pd-l,
.pd,
.pd-lr {
  padding-left: 10px;
}
.pd-r,
.pd,
.pd-lr {
  padding-right: 10px;
}
.pd-t,
.pd,
.pd-tb {
  padding-top: 10px;
}
.pd-b,
.pd,
.pd-tb {
  padding-bottom: 10px;
}
// .fl {
//   float: left;
// }
// .fr {
//   float: right;
// }
// .center {
//   text-align: center;
//   .c {
//     margin: 0 auto;
//     display: inline-block;
//   }
// }
// div {
//   overflow: hidden;
// }
@px1Color: #eeeeee;
body {
  background-color: #fbf9fe;
}
.px1 {
  border: 1px solid @px1Color;
}
.px1-l,
.px1-lr {
  border-right: 1px solid @px1Color;
}
.px1-r,
.px1-lr {
  border-left: 1px solid @px1Color;
}
.px1-t,
.px1-tb {
  border-top: 1px solid @px1Color;
}
.px1-b,
.px1-tb {
  border-bottom: 1px solid @px1Color;
}
.px1,
.px1-l,
.px1-r,
.px1-t,
.px1-d,
.px1-lr,
.px1-tb {
  width: 100%;
  height: 200%;
  // line-height: 200%;
}

.iconfont {
  color: #999;
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
a,
div,
span {
  color: #051b28;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
blockquote,
img,
form {
  padding: 0;
  margin: 0;
}
table,
td,
tr,
th {
  font-size: 12px;
}
li {
  list-style-type: none;
  list-style: none;
}
img {
  vertical-align: top;
  border: 0;
}
ol,
ul {
  list-style: none;
}
</style>
