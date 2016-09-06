
// TODO test
function assertTrue(condition, errMsg) {
  if (false == condition) throw new Error(errMsg || "assert failed");
}
var hashMap = new HashMap(true);

// // isEmpty
// assertTrue(true == hashMap.isEmpty(), "hashMap.isEmpty()");
hashMap.put("aa", 11);
hashMap.put("bb", "22");
hashMap.put("cc", 33);
hashMap.put("dd", 44);
hashMap.put("ee", 22);
// assertTrue(false == hashMap.isEmpty(), "hashMap.isEmpty()");

// // size
// assertTrue(5 == hashMap.size(), "5 == hashMap.size()");

// // containsKey
// assertTrue(true == hashMap.containsKey("aa"), 'hashMap.containsKey("aa")');
// assertTrue(false == hashMap.containsKey("0"), 'hashMap.containsKey("0")');
// assertTrue(false == hashMap.containsKey(null), 'hashMap.containsKey(null)1');
// hashMap.put(null, "null");
// assertTrue(true == hashMap.containsKey(null), 'hashMap.containsKey(null)2');
// assertTrue(false == hashMap.containsKey(undefined),
// 'hashMap.containsKey(null)');
// try {
// hashMap.put(undefined, "null");
// } catch (e) {
// console.log("expected: " + e.message);
// }
// assertTrue(false == hashMap.containsKey(undefined),
// 'hashMap.containsKey(null)');

// // containsValue
// assertTrue(true == hashMap.containsValue(22), 'hashMap.containsValue(22)');
// assertTrue(false == hashMap.containsKey(null), 'hashMap.containsKey(null)');
// hashMap.put(null, null);
// assertTrue(true == hashMap.containsKey(null), 'hashMap.containsKey(null)');
// assertTrue(false == hashMap.containsValue(undefined),
// "hashMap.containsValue(undefined)");

// // get
// assertTrue(11 == hashMap.get("aa"), 'hashMap.get("aa")');
// assertTrue(hashMap.NULL === hashMap.get(11), 'hashMap.get(11)');
// assertTrue(hashMap.NULL === hashMap.get(null), 'hashMap.get(null)');
// assertTrue(hashMap.NULL === hashMap.get(""), 'hashMap.get("")');
// assertTrue(hashMap.INVALID_VALUE === hashMap.get(undefined),
// "hashMap.get(undefined)");

//// put
//assertTrue(hashMap.NULL === hashMap.put("T", null), 'hashMap.put("T", null)');
//assertTrue(11 == hashMap.put("aa", 123), 'hashMap.put("aa", 123)');
//assertTrue(hashMap.NULL === hashMap.put(null, null), 'hashMap.put(null, null)');
//assertTrue(hashMap.NULL === hashMap.put(null, undefined), 'hashMap.put(null, undefined)');
//try {
//  assertTrue(hashMap.put(undefined, undefined), 'hashMap.put(undefined, undefined)');
//} catch (e) {
//  var errObj = JSON.parse(e.message);
//  // verify expected.
//  assertTrue(1001 == errObj["errorCode"], 'Not expected error.');
//}

//// remove
//hashMap.put("ee", 110);
//assertTrue(110 == hashMap.remove("ee"), 'hashMap.remove("ee")');
//assertTrue(false == hashMap.containsKey("ee"), 'hashMap.containsKey("ee")');
//assertTrue(hashMap.NULL === hashMap.remove(""), 'hashMap.get("")');
//assertTrue(hashMap.NULL === hashMap.remove(null), 'hashMap.get(null)');
//try {
//  assertTrue(hashMap.NULL === hashMap.remove(undefined), 'hashMap.get(undefined)');
//} catch (e) {
//  var errObj = JSON.parse(e.message);
//  assertTrue(1001 == errObj["errorCode"], 'Not expected error.');
//}

//// clear
//assertTrue(0 < hashMap.keySet().length, 'hashMap.keySet().length');
//assertTrue(0 < hashMap.values().length, 'hashMap.values().length');
//hashMap.clear();
//assertTrue(0 == hashMap.size(), 'hashMap.size()');
//assertTrue(0 == hashMap.keySet().length, 'hashMap.keySet().length');
//assertTrue(0 == hashMap.values().length, 'hashMap.values().length');

//// keySet
//hashMap.clear();
//hashMap.put("a", 1);
//hashMap.put("b", 2);
//hashMap.put("c", 3);
//var keys = hashMap.keySet();
//assertTrue(!!keys, 'hashMap.keySet()');
//assertTrue(3 == keys.length, 'hashMap.keySet().length');
//assertTrue(-1 != keys.indexOf("a"), 'keys.indexOf("a")');
//assertTrue(-1 == keys.indexOf("aa"), 'keys.indexOf("aa")');


//// values
//hashMap.clear();
//hashMap.put("a", 1);
//hashMap.put("b", 2);
//hashMap.put("c", 3);
//var values = hashMap.values();
//assertTrue(!!values, '!!values');
//assertTrue(3 == values.length, 'values.length');
//assertTrue(2 in values, '2 in values');
//assertTrue(!(11 in values), '!(11 in values)');

//// indexOfKey
//hashMap.clear();
//hashMap.put("a", 1);
//hashMap.put("b", 2);
//hashMap.put("c", 3);
//assertTrue(0 == hashMap.indexOfKey("a"), 'hashMap.indexOfKey("a")');

// TODO entrySet
var orderly = false;
var hashMap = new HashMap(true);
hashMap.clear();
hashMap.put("a", 1);
hashMap.put("x", 2);
hashMap.put("c", 3);
var entrySet = hashMap.entrySet();
assertTrue(!!entrySet, '!!entrySet');
assertTrue(3 == entrySet.length, 'entrySet.length');
for (var i in entrySet) {
  var entry = entrySet[i];
  console.log(entry.getKey() + "\t= " + entry.getValue());
}
