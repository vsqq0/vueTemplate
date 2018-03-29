// 使用mockjs模拟数据 http://mockjs.com/examples.html
// get请求需要正则匹配
import Mock from 'mockjs';
// 个人资料 个人c店 购买成功 申请体现 我的信息
Mock.mock(/api\/userInfo/, 'get', {
  data: {
    storeLogo: '@image(100*100)',
    userImg: '@image(100*100)',
    storeName: 'xxx的店铺',
    userName: '@cname',
    nickName: '@last',
    sex: true,
    phone: 15851101111,
    goodsListId: 1,
    'cartNumber|1-20': 1,
    money: 1000,
    rank: 500
  },
  success: true
});
// 企业旗舰店
Mock.mock(/api\/flagStore/, 'get', {
  data: {
    supplierName: '苹果官方旗舰店',
    goodsNum: '45',
    sort: '0', // 排序：0综合 1销量 2价格
    pageCount: 10,
    currentPage: 1, // 1为当前页
    goodsListId: 1
  },
  success: true
});
// 我的订单列表
Mock.mock(/api\/orderList/, 'get', {
  data: {
    'orderList|2-5': [
      {
        oderType: 0,
        supplierName: '苹果官方旗舰店',
        addressInfo: {
          logisticsCode: '2234545',
          company: '顺丰速运',
          logisticsState: 0, // 物流状态 0正在派送 1已签收
          'Logistics|1-5': [
            {
              time: '2018-6-5',
              msg: '巴拉巴拉一大堆'
            }
          ]
        },
        'goodsList|1-3': [
          {
            name: 'apple iphone 8 64GB gold 4g enjoy your self',
            desc: {
              color: 'red',
              size: 'xl'
            },
            price: 4800,
            oldPrice: 5800,
            goodsNum: 1
          }
        ]
      }
    ]
  },
  success: true
});
// 订单详情(各个阶段) 订单支付 申请退款
Mock.mock(/api\/orderInfo/, 'get', {
  data: {
    orderCode: 'TT12856455',
    supplierName: 'apple 官方旗舰店',
    createTime: '2018-03-12 16:22:06',
    addressId: 1,
    freight: 8,
    oderType: 0, // 待付款
    LeaveMessage: '我要买红的',
    goodListId: 1
  },
  success: true
});
// 购物车 商品列表
Mock.mock(/api\/goodsList/, 'get', {
  data: {
    pageCount: 10,
    currentPage: 1, // 1为当前页
    'goodList|2-4': [
      {
        'id|+1': 1,
        Img: '@image(200*200)',
        Name: 'apple iphone 8 64GB gold 4g enjoy your self',
        desc: '颜色：金色 版本：64g',
        'num|1-5': 1,
        price: 4888,
        oldPrice: 4888
      }
    ]
  },
  success: true
});
// 排行榜
Mock.mock(/api\/supplierRank/, 'get', {
  data: {
    'supplier|10-20': [
      {
        'id|+1': 1,
        Img: '@image(200*200)',
        Name: '浙江苹果科技有限公司',
        'num|50-500': 1,
        points: 48888
      }
    ]
  },
  success: true
});
// 用户积分
Mock.mock(/api\/userRank/, 'get', {
  data: {
    rankCount: 460,
    'rank|2-10': [
      {
        'id|+1': 1,
        time: '2018-6-7 10:20:30',
        action: '登陆',
        points: 50
      }
    ]
  },
  success: true
});
// 商品详情
Mock.mock(/api\/goodsInfo/, 'get', {
  data: {
    'id|+1': 1,
    'Img|2-5': ['@image(200*200)'],
    Name: 'apple iphone 8 64GB gold 4g enjoy your self',
    desc: {
      color: 'red',
      size: 'xl'
    },
    'sale|0-100': 1,
    'num|1-5': 1,
    price: 4888,
    oldPrice: 4888,
    Stock: 108
  },
  success: true
});
// 用户评论>商品详情
Mock.mock(/api\/comment/, 'get', {
  data: {
    commentCount: 35,
    commentList: [
      {
        nickName: '阿呆',
        headImg: '@image(50*50)',
        comment: '这个产品很不错',
        createTime: '2018-01-08',
        'commentImg|0-4': ['@image(100*100)']
      }
    ]
  },
  success: true
});
// 收获地址
Mock.mock(/api\/address/, 'get', {
  data: {
    Consignee: 'x先生',
    phone: '1861214547',
    addressInfo: {
      province: '浙江省',
      city: '温州市',
      district: '龙湾区',
      address: '五星级大酒店'
    }
  },
  success: true
});
// 分类信息
Mock.mock(/api\/category/, 'get', {
  data: [
    {
      'id|+1': 1,
      name: '@cname',
      'children|10': [
        {
          'id|+1': 1,
          name: '@cname',
          'children|6-9': [
            {
              'id|+1': 1,
              name: '@cname'
            }
          ]
        }
      ]
    }
  ],
  success: true
});
// 推荐人
Mock.mock(/api\/Referee/, 'get', {
  data: {
    RefereeName: '王大锤',
    RefereeCount: 156,
    createTime: '2018-6-8',
    userImg: '@image(100*100)',
    'Recommendeds|2-6': [
      {
        RefereeName: '王小锤',
        userImg: '@image(100*100)',
        RefereeCount: 156,
        createTime: '2018-6-8'
      }
    ]
  },
  success: true
});

Mock.mock(/api\/*/, 'post', {
  data: {},
  success: true
});
