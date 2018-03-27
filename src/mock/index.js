// 使用mockjs模拟数据 http://mockjs.com/examples.html
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
