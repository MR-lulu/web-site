drop table if exists common_info;
CREATE TABLE `common_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bg_url` varchar(100) NOT NULL DEFAULT '' COMMENT '背景图片',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='公共信息表';

drop table if exists leave_msg;
CREATE TABLE `leave_msg` (
  `msg_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `msg_content` varchar(1000) NOT NULL DEFAULT '',
  `user_id` varchar(20) NOT NULL DEFAULT '',
  `user_ip` varchar(20) NOT NULL DEFAULT '',
  `IP` varchar(20) NOT NULL DEFAULT '' COMMENT '不知道是什么，以IP作为目前用户主要区分标识',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`msg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='留言表';

drop table if exists modules;
CREATE TABLE `modules` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `navigation_id` bigint(20) NOT NULL DEFAULT '0',
  `parts_type_id` bigint(20) NOT NULL DEFAULT '0',
  `priority` int(20) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='模块表';

drop table if exists navigation;
CREATE TABLE `navigation` (
  `navigation_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  `navigation_url` varchar(200) NOT NULL DEFAULT '',
  `module_num` int(20) NOT NULL DEFAULT '0' COMMENT '模块个数，默认0',
  `site` int(20) NOT NULL DEFAULT '0' COMMENT '所属站点,暂时无用',
  `priority` int(20) NOT NULL DEFAULT '0' COMMENT '展示优先级',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`navigation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='导航表';

drop table if exists parts;
CREATE TABLE `parts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `parts_type_id` bigint(20) NOT NULL DEFAULT '0' COMMENT '零件类型',
  `modules_id` bigint(20) NOT NULL DEFAULT '0' COMMENT '所属模块',
  `priority` int(10) NOT NULL DEFAULT '0' COMMENT '展示优先级',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '标题',
  `txt` varchar(5000) NOT NULL DEFAULT '' COMMENT '文本',
  `image_url` varchar(100) NOT NULL DEFAULT '',
  `hyperlinks` varchar(100) NOT NULL DEFAULT '',
  `click` bigint(20) NOT NULL DEFAULT '0' COMMENT '点击量',
  `other` varchar(100) NOT NULL DEFAULT '' COMMENT '其他，不知道要来干嘛',
  `resource_1` varchar(100) NOT NULL DEFAULT '',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='零件表';

drop table if exists parts_type;
CREATE TABLE `parts_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `resource` varchar(100) NOT NULL DEFAULT '',
  `watch` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否可选，1可以，0否',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='零件种类表';

drop table if exists registers_info;
CREATE TABLE `registers_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `contact` varchar(30) NOT NULL DEFAULT '',
  `phone` varchar(20) NOT NULL DEFAULT '',
  `leave_msg` varchar(1000) NOT NULL DEFAULT '' COMMENT '留言信息',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='信息登记表';

drop table if exists user;
CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(500) NOT NULL DEFAULT '',
  `phone` varchar(20) NOT NULL DEFAULT '',
  `mail` varchar(50) NOT NULL DEFAULT '',
  `level` int(1) NOT NULL DEFAULT '1' COMMENT '等级，默认1级',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='管理员表';

drop table if exists web_bottom;
CREATE TABLE `web_bottom` (
  `bottom_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bottom_url` varchar(100) NOT NULL DEFAULT '',
  `about` varchar(300) NOT NULL DEFAULT '' COMMENT '关于我们',
  `phone` varchar(50) NOT NULL DEFAULT '',
  `address` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL DEFAULT '',
  `self_info` varchar(500) NOT NULL COMMENT '自定义信息栏',
  `record` varchar(100) NOT NULL DEFAULT '' COMMENT '备案',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`bottom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='页尾表';

drop table if exists web_info;
CREATE TABLE `web_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner` varchar(20) NOT NULL DEFAULT '' COMMENT '网站所有者',
  `contact` varchar(30) NOT NULL DEFAULT '' COMMENT '联系方式',
  `phone` varchar(20) NOT NULL DEFAULT '',
  `address` varchar(50) NOT NULL DEFAULT '',
  `application` varchar(100) NOT NULL DEFAULT '' COMMENT '应用方向',
  `web_address` varchar(100) NOT NULL DEFAULT '' COMMENT '网站地址',
  `web_short_info` varchar(500) NOT NULL DEFAULT '' COMMENT '网站简介',
  `owner_short_info` varchar(500) NOT NULL DEFAULT '' COMMENT '所有者简介',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists web_top;
CREATE TABLE `web_top` (
  `top_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `logo_url` varchar(100) NOT NULL DEFAULT '' COMMENT 'logo网址',
  `web_name` varchar(50) NOT NULL COMMENT '网站名称',
  `nav_count` int(11) NOT NULL DEFAULT '0' COMMENT '导航数量',
  `phone` varchar(50) NOT NULL DEFAULT '' COMMENT '联系电话',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `server_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `server_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remarks` varchar(1000) NOT NULL DEFAULT '' COMMENT '备注',
  `extra_1` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段1',
  `extra_2` varchar(100) NOT NULL DEFAULT '' COMMENT '扩展字段2',
  PRIMARY KEY (`top_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='页头表';