// 使用mockjs模拟数据 http://mockjs.com/examples.html
// get请求需要正则匹配
import Mock from 'mockjs';

Mock.mock(/api\/cate/, {
  data: {
    'list|1-10': [
      {
        'id|+1': 1
      }
    ]
  },
  success: true
});

