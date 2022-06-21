---
title: Python Dict
subtitle: python字典的实现原理(3.6之后)
slug: python-dict
tags: python3, python 

/* You can find the list of tags here https://github.com/Hashnode/support/blob/main/misc/tags.json
You need to upload your image to https://hashnode.com/uploader 
and use the uploaded image URL as COVER_IMAGE_URL */ 

cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1655798329568/6fkXInJc_.jpg?auto=compress
domain: pony.hashnode.dev
---

字典底层是维护了一张哈希表entries，简单理解为一个列表，其中每一个元素存储了key hash，key，value 三个元素
同时还存在一张索引表indices, 记录了哈希表里的索引

```python
indices = [None, None, index, None, index, None, index]
entries = [
    (hash(key), key, value),
    (hash(key), key, value),
    (hash(key), key, value),
    (hash(key), key, value),
    (hash(key), key, value),
    (hash(key), key, value),
    (hash(key), key, value),
]

```

## 实际过程
### 给字典添加一个值
```python
d["key"] = value
```
1. 初始化一个空的索引表和哈希表
```python
indices = [None, None, None, None, None, None, None]
entries = []
```
2. 计算key的hash值和索引
计算key的hash值，在和mask值进行与运算，得到索引
mask=字典最小长度indicesDictMinSize -1
```python
hash_key = hash(key)
index = hash_key & (len(indices) - 1)
# todo 具体的哈希算法

```
假设获取到的hash_key为333，index为3
3. 填充索引表和哈希表
```python
indices[3] = 0
entries[0] = (hash_key, key, value)

计算出的index为indices的下标, 如果indices[index]为None, 则直接添加到entries中, 
indices[index]的值为entries的下标
如果indices[index]不为None, 则需要判断entries中的key是否与要插入的key相等, 如果是同一个key, 则更新value,
如果不是, 则说明存在hash冲突, 那需要自动需要空位置插入
```
4. 存储完成
```python
indices = [None, None, None, 0, None, None, None]
entries = [
    (hash_key, key, value),
]
```
