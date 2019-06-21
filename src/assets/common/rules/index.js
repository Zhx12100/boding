//验证手机号
const rulesPhone = (rule, value, callback) => {
    let patter = new RegExp("^1(3|4|5|7|8)\d{9}$");//简单验证11位手机号
    if (!patter.test(value)) {
        return callback(new Error("请输入正确格式的手机号！"));
    } else {
        callback();//必须有此项回调，否则验证会一直不通过
    }
};
