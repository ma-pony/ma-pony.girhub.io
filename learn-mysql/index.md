---
title: Mysql Index
// title 必须是英文
subtitle: mysql 索引
slug: mysql-index
tags: mysql

/* You can find the list of tags here https://github.com/Hashnode/support/blob/main/misc/tags.json
You need to upload your image to https://hashnode.com/uploader 
and use the uploaded image URL as COVER_IMAGE_URL */ 

cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1654873645238/7TFlE4Q8N.jpeg?auto=compress
domain: pony.hashnode.dev
---


# 索引

## 分类

### 按字段特性分类
1、主键索引
建立在主键之上，只会有一个
2、唯一索引
建立在UNIQUE字段之上
3、普通索引
建立在普通字段之上
4、前缀索引
只对字符类型字段的前几个字符或对二进制类型字段的前几个bytes建立的索引，而不是整个字段上建索引

### 按索引字段个数分类
1、单列索引
建立在单个列之上

2、联合索引
建立在多个列之上，又叫复合索引、组合索引

### 按数据与索引的存储关联性划分
索引的储存顺序和数据的存储顺序是否是关系的，有关就是聚簇索引，无关就是非聚簇索引
具体实现方式根据索引的数据结构不同会有所不同，都以B+数实现的索引举例

1、聚簇索引
Innodb的主键索引，非叶子节点存储的是索引指针，叶子节点存储的是既有索引也有数据，是典型的聚簇索引
索引和数据的存储顺序是强相关的

2、非聚簇索引
MyISAM中索引和数据文件分开存储，叶子节点存储的是数据存放的地址，而不是具体的数据，是典型的非聚簇索引
索引的存储和数据的存储顺序毫无关联


### 按底层数据结构划分
1、hash索引
检索效率非常高，一次定位
hash索引存储的是hash值，只能做等值的比较，不能用作范围查询
可能存在hash冲突

2、B+数索引
B+数索引需要从根节点开始访问，需要多次IO访问

## 作用
提升数据查询效率，减少数据扫描的量，随机IO转顺序IO

