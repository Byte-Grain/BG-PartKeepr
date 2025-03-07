/*
 * This file is part of the JerryMouse Framework.
 *
 * JerryMouse is free software; you can redistribute and/or modify it under the
 * terms of the GNU General Public License version 2 as published by the
 * Free Software Foundation.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 */

Ext.locales = {
	zh_CN: {
		"flag": "zh",
		"name": "简体中文",
		"dateformat": "Y.m.d H:i:s T",
		// 通用按钮和标签
		'Save': '保存',
		'Cancel': '取消',
		'Delete': '删除',
		'Add': '添加',
		'Close': '关闭',
		'Apply': '应用',
		'Loading…': '加载中...',
		'Ready.': '就绪。',
		'Error': '错误',
		'Select': '选择',
		'Edit': '编辑',
		'View': '查看',
		'Yes': '是',
		'No': '否',

		// 用户相关
		'User': '用户',
		'Users': '用户管理',
		'Username': '用户名',
		'Password': '密码',
		'Login': '登录',
		'Logout': '退出',
		'Not logged in': '未登录',
		'Logged in as': '当前用户',

		// 零件相关
		'Part': '零件',
		'Parts': '零件管理',
		'Add Part': '添加零件',
		'Delete Part': '删除零件',
		'Part Name': '零件名称',
		'Description': '描述',
		'Stock Level': '库存量',
		'Minimum Stock Level': '最小库存量',
		'Storage Location': '存储位置',
		'Category': '分类',
		'Price': '价格',
		'Unit': '单位',

		// 存储位置相关
		'Storage Locations': '存储位置',
		'Add Storage Location': '添加存储位置',
		'Delete Storage Location': '删除存储位置',

		// 项目相关
		'Project': '项目',
		'Projects': '项目管理',
		'Add Project': '添加项目',
		'Delete Project': '删除项目',
		'Project Name': '项目名称',
		'Project Description': '项目描述',

		// 系统设置相关
		'System Preferences': '系统设置',
		'User Preferences': '用户设置',
		'Display': '显示',
		'User Interface': '用户界面',
		'Language': '语言',
		'Theme': '主题',

		// 错误消息
		'Critical Error': '严重错误',
		'An error occurred': '发生错误',
		'Please try again': '请重试',
		'This field is required': '此字段为必填项',

		// 统计相关
		'Statistics': '统计',
		'Summary': '摘要',
		'Chart': '图表',
		'Total': '总计',
		'Average': '平均值',

		// 其他
		'Search': '搜索',
		'Filter': '筛选',
		'Export': '导出',
		'Import': '导入',
		'Print': '打印',
		'Help': '帮助',
		'About': '关于'
	},
	en_US: {
		"flag": "us",
		"name": "English (USA)",
		"dateformat": "n/j/Y H:i:s T"
	}
};

Ext.setLocale = function (locale) {
	Ext.jm_locale = locale;
};

Ext.getLocale = function () {
	return Ext.jm_locale;
};

Ext.getLocaleFlag = function () {
	return Ext.locales[Ext.jm_locale].flag;
};

Ext.getDateFormat = function () {
	return Ext.locales[Ext.jm_locale].dateformat;
};
