/**
 * HashMap实现
 * @param orderly {Boolean} true-有序的, false-无序的
 * @returns {HashMap} 集合对象
 */
function HashMap(orderly) {
  "use strict";

  if (!(this instanceof HashMap)) return new HashMap();
  var _self = this;
  _self.INVALID_VALUE = undefined;
  _self.NULL          = null;

  var ERROR_INVALID_KEY = {
    errorCode : "1001",
    message   : "Invalid Key."
  };

  var modCount  = 0,
      table     = {},
      values    = [],
      keys      = {modCount:0, keySet:[]},
      _orderly  = !!orderly;
      ;
  init();

  /**
   * 获取集合有效键值对数量
   * @returns {Number} - 集合已使用大小
   */
  this.size = function() {
    if (expiredKeys()) refreshKeys();
    return keys.keySet.length;
  };

  // 校验索引缓存是否已经过期
  function expiredKeys() {
    return modCount != keys.modCount;
  }

  /**
   * 校验集合是否为空
   * @returns {Boolean} - true:当前未保存任何数据, false-当前已保存数据
   */
  this.isEmpty = function() {
    return !_self.size();
  };

  /**
   * 校验是否包含指定键
   * @param key {Object} - 目标键
   * @returns {Boolean} - true:包含指定键, false-不包含指定键
   */
  this.containsKey = function(key) {
    if (expiredKeys()) refreshKeys();
    return -1 != keys.keySet.indexOf(key + "");
  };

  /**
   * 校验是否包含指定值
   * @param value {Object} - 目标值
   * @returns {Boolean} - true:包含指定值, false-不包含指定值
   */
  this.containsValue = function(value) {
    if (_self.isEmpty()) return false;
    for ( var i in keys.keySet)
      if (value == table[keys.keySet[i]]) return true;
    return false;
  };

  /**
   * 获取与指定键对应的值
   * @param key {Object} - 目标键
   * @returns {Object} - 与目标键对应的值, 如果当前集合不存在指定key, 返回HashMap.INVALID_VALUE
   */
  this.get = function(key) {
    if (undefined === key) return _self.INVALID_VALUE;
    return _self.containsKey(key) ? table[key] : _self.NULL;
  };

  /**
   * 添加数据
   * @param key {Object} - 索引键, 该值必须是已定义
   * @param value {Object} - 目标值
   * @returns {Object} - 指定key已存在时, 返回原来的值; 否则返回{@link HashMap#NULL}
   */
  this.put = function(key, value) {
    verifyKey(key);
    var oldVal = table[key];
    table[key] = value;
    modCount++;
    return _self.INVALID_VALUE === oldVal ? _self.NULL : oldVal;
  };

  // 校验Key是否合法
  function verifyKey(key) {
    if (undefined === key) throw new Error(JSON.stringify(ERROR_INVALID_KEY));
  }

  /**
   * 从集合中移除已存在的键值对
   * @param key {Object} - 目标键
   * @returns {Object} - 如果存在返回目标值, 否则返回HashMap.NULL
   */
  this.remove = function(key) {
    verifyKey(key);
    return (_self.containsKey(key)) ? removeKey(key) : _self.NULL;
  };

  // 删除索引
  function removeKey(key) {
    var v       = table[key], 
        keyIdx  = _self.indexOfKey(key);
    if (-1 != keyIdx) delete keys.keySet[keyIdx];
    delete table[key];
    modCount++;
    return v;
  }

  /**
   * 清空当前集合中保存的所有数据
   */
  this.clear = function() {
    init();
  };

  // 初始化集合
  function init() {
    modCount  = 0;
    table     = {};
    keys      = {
      modCount: 0,
      keySet: []
    };
    values    = [];
  }

  /**
   * 获取键列表
   * @returns {Array} - 键列表
   */
  this.keySet = function() {
    return _self.isEmpty() ? [] : keys.keySet.slice(0);
  };

  /**
   * 获取值列表
   * @returns {Array} - 值列表
   */
  this.values = function() {
    return getValue();
  };

  // 获取值列表
  function getValue() {
    if (expiredKeys()) refreshKeys();
    return values;
  }

  // 刷新键列表缓存
  function refreshKeys() {
    keys.modCount = modCount;
    keys.keySet = [];
    for ( var key in table)
      keys.keySet.push(key);

    _orderly && keys.keySet.sort();
    refreshValues();
  }

  // 刷新值列表缓存
  function refreshValues() {
    if (!(values instanceof Array)) values = [];
    values.length = 0;
    for ( var i in keys.keySet)
      values.push(table[keys.keySet[i]]);

    _orderly && values.sort();
  }

  /**
   * 查找当前Key在索引中的位置
   * @param key {Object} - 目标键
   * @param {Number} - 目标键在索引中的位置, 如果目标键不存在返回-1;
   */
  this.indexOfKey = function(key) {
    if (expiredKeys()) refreshKeys();
    return keys.keySet.indexOf(key);
  };

  /**
   * 获取键值对列表
   * @returns {Array} - 键值对列表
   */
  this.entrySet = function() {
    var createEntry = function(k,v){
          return {
            getKey    : function() {return k;},
            getValue  : function() {return v;}
          }
        },
        entryList   = [],
        keys        = _self.keySet(),
        key
        ;

    for (var keyIdx in keys) {
      key = keys[keyIdx];
      entryList.push(createEntry(key, table[key]));
    }

    return entryList;
  };

  /**
   * 将数据转换为JSON格式
   */
  this.toJSON = function() {
    return JSON.stringify(table);
  };

  /**
   * 将数据转换为JSON格式
   */
  this.toString = function() {
    return _self.toJSON();
  };
}