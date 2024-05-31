/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = '1846027927@qq.com';
// email 登陆密码
const emailPassword = 'lwq111111';
// 接收者 邮箱
const toEmail = '1846027927@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '__ckguid=VeO4fyoaYjjikjvQx6Pu896; device_id=18507853911708588937391654ce4fece908d4a9f8062d56b2bb5f779b; smzdm_user_source=7526F98E6E86A5FBF7B7F10B9D020041; sess=BA-hT0ZX9YqP7cou2y7k%2BtkSORWwVBW6XRV84f4Urjh6baNaCoZQ0cwh%2FtYJG1behu%2B%2FBKsR7LDqZ79cXEfdAk1JaQMr%2BmXVk64Y%2Fo925735o8gXqKO6ayuzeTI; user=user%3A1076322352%7C1076322352; smzdm_id=1076322352; homepage_sug=c; r_sort_type=score; _zdmA.uid=ZDMA.HyS_h6Emk.1708591360.2419200; smzdm_user_view=A4FA6D0DC344D6571B503C8623140868'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错',
	'现在这个价格还可入手吗？',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
