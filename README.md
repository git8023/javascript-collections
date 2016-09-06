# javascript-collections    
用Javascript实现集合接口, 索引树:    
  * collections    
    * [HashMap]( "HashMap")       

# HashMap    
  用Javascript模拟实现Java中的`java.util.Map`接口, 详情API如下列表          
  
  接口             | 说明                         | 参数                       | 返回值
  ---------------- | ---------------------------- | -------------------------- | -------------------------
  HashMap() | 获取集合对象 | orderly:{Boolean} - true/有序的, false/无序的 | {HashMap} - 集合实例对象
  size()  | 获取当前已使用大小 | -/- | {Number} - 集合已使用大小, 值总是`正整数`
  isEmpty() | 校验集合中是否有值 | -/- | {Boolean} - true/集合中没有任何数据, false/集合中至少存在一条数据
  containsKey() | 校验集合中是否存在指定索引 | key:{Object} - 目标索引 | {Boolean} - true/存在指定索引, false/不存在指定索引
  containsValue() | 校验集合中是否存在指定值 | value:{Object} - 目标值 | {Boolean} - true/包含指定值, false/不包含指定值
  get() | 获取与指定索引匹配的值 | key:{Object} - 目标索引 | {Object\|NULL} - 存在目标值时直接返回, 否则返回`HashMap.NULL`
  put() | 向集合中添加数据 | key:{Object} - 索引键 <br>value:{Object} - 目标值 | {Object} - 当指定索引已存在时返回原来的值, 否则返回`HashMap.NULL`
  remove() | 移除指定键值对 | key:{Object} - 目标索引 | {Object} - 删除成功时返回与索引关联的值, 否则返回`HashMap.NULL`
  clear() | 清空集合 | -/- | -/-
  keySet() | 获取索引列表 | -/- | {Array} - 包含所有索引的数组(如果指定`orderly==true`时,数组元素为升序排序)
  values() | 获取值列表 | -/- | {Array} - 值列表
  indexOfKey() | 获取指定索引在当前集合中的位置 | key:{Object} - 目标索引 | {Number} - 目标索引在集合中的位置, 不存在时返回 -1
  entrySet() | 获取键值对列表 | -/- | {Array} - 键值对列表(每个元素可以调用: `entry.getKey()`, `entry.getValue()`)
  toJSON() | 将数据转换为`JSON`格式字符串 | -/- | {String} - 只包含有效索引和值的JSON字符串
  toString() | 将数据转换为`JSON`格式字符串 | -/- | {String} - 只包含有效索引和值的JSON字符串
  
  常量值列表:     
  
  名称            | 值  | 含义
  --------------- | --- | ------
  INVALID_VALUE | undefined | 无效值
  NULL | null | 空值
  
