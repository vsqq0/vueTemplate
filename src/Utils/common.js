import axios from 'axios';

export default class ajax {
  /**
   *  设置cookie
   * @param {string} key
   * @param {any} value
   * @param {any} time 0秒表示删除这条cookie(可不填)
   */
  static setCookie(key, value, time) {
    let expires = new Date();
    expires.setTime(expires.getTime() + (time || 2678400) * 1000);
    document.cookie =
      key +
      '=' +
      escape(encodeURIComponent(value)) +
      ';expires=' +
      expires.toGMTString() +
      ';path=' +
      escape('/');
  }
  /**
   * 获取cookie的值
   * @param {string} key
   * @returns {string}
   */
  static getCookie(key) {
    let myCookie = document.cookie;
    let data = myCookie.split('; ');
    for (let i = 0; i < data.length; i++) {
      let co = data[i].split('=');
      if (co[0] === key) {
        return decodeURIComponent(co[1]);
      }
    }
    return '';
  }
  /**
   * 同计时器的调用方式只是做了Promise的封装
   * @param {any} time 秒
   * @param {function} hander 时间到了后的回调
   */
  static setTimeOut(hander, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        hander();
        resolve();
      }, time);
    });
  }
  /**
   * 判断是否是微信打开
   */
  static isWeixin() {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') !== -1;
    if (isWeixin) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * @param {string} url 必填
   * @returns {Object} params
   */
  static get(url, params) {
    return axios.get(useDevUrl(url), {
      params: params || {}
    });
  }
  /**
   * @param {string} url 必填
   * @returns {Object} params
   */
  static post(url, params) {
    return axios.post(useDevUrl(url), {
      params: params || {}
    });
  }
  /**
   * @param {string} url 必填
   * @returns {Object} params
   */
  static put(url, params) {
    return axios.put(useDevUrl(url), {
      params: params || {}
    });
  }
  /**
   * @param {string} url 必填
   * @returns {Object} params
   */
  static delete(url, params) {
    return axios.delete(useDevUrl(url), {
      params: params || {}
    });
  }
  /**
   * ajax请求 可以传一个对象或者url字符串
   * @param {string} method "get" "post" "put" "delete"
   * @param {string} url
   * @param {string} data
   * @returns {Object}
   */
  static ajax(method, url, data) {
    return axios({
      method: method,
      url: useDevUrl(url),
      data: data
    });
  }
  /**
   * 设置用户cookie
   * @param {string} key
   * @param {string} token
   */
  static setToken(key, token) {
    this.setCookie('key', key);
    this.setCookie('token', token);
  }
  // const formData = () => {
  //   let formData = new FormData();
  //   formData.append('name', this.name);
  //   formData.append('age', this.age);
  //   formData.append('file', event.target.files[0]);
  // }
}
const useDevUrl = url => {
  return process.env.NODE_ENV === 'development' ? 'api/' + url : url;
};
