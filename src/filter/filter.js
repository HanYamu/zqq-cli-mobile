import Vue from "vue";

export default (() => {
  Vue.filter("float", value => {
    return value ? parseFloat(value) : value;
  });
  Vue.filter("toUpperCase", value => {
    return value ? value.toUpperCase() : value;
  });
  Vue.filter("formatDateTime", (value, type) => {
    if (value === "请选择开始查询日期" || value === "请选择最终查询日期") {
      return value;
    }
    let num2str = num => (num < 10 ? `0${num}` : num.toString());
    let date = new Date(value * 1000);
    let result;

    let Y = date.getFullYear();
    let M = num2str(date.getMonth() + 1);
    let D = num2str(date.getDate());
    let h = num2str(date.getHours());
    let m = num2str(date.getMinutes());
    let s = num2str(date.getSeconds());

    switch (type) {
      case "Y-M-D":
        result = `${Y}-${M}-${D}`;
        break;
      case "h:m:s":
        result = `${h}:${m}:${s}`;
        break;
      case "M:D":
        result = `${M}-${D} ${h}:${m}:${s}`;
        break;
      default:
        result = `${Y}-${M}-${D} ${h}:${m}:${s}`;
        break;
    }

    return result;
  });
  Vue.filter("unit", value => {
    let num = value + "";
    let arr = num.split(".");
    if (arr[0].length < 5) {
      num = num - 0;
      return parseFloat(num.toFixed(6));
    } else if (arr[0].length < 9) {
      num = num / 10000;
      return parseFloat(num.toFixed(4)) + "万";
    } else {
      num = num / 100000000;
      return parseFloat(num.toFixed(4)) + "亿";
    }
  });
  Vue.filter("splitTime", (value, type) => {
    let ymd = value.split(" ")[0];
    let hms = value.split(" ")[1];
    if (type == "ymd") {
      return ymd;
    }
    if (type == "hms") {
      return hms;
    }
    if (!type) {
      return ymd;
    }
  });
})();
