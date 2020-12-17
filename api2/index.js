const API_HOST = "http://127.0.0.1:3000";

//const API_HOST = "https://riskwaste-appapi.gxfunc.com/release";
const Mock = require("./mockApi")

const DEBUG = true; //切换数据入口

// params没有参数请传一个空对象
function request(url, data, method) {
	// console.log("请求",url, data)
	if (!DEBUG) {
		uni.request({
			url: API_HOST + url,
			method: method,
			data: data,
			header: {
				'X-Auth-Token': ''
			},
			success: function(res) {
				onSuccess(res.data);
			},
			fail: function(res) {
				onFailed && onFailed(res.data)
			},
		});
	} else {
		return new Promise(resolve => {
			uni.showLoading()
			
			setTimeout(()=>{
				uni.hideLoading()
				resolve(Mock(url))
			},1000)

		})

	}
}
module.exports = {
	request: request
}
