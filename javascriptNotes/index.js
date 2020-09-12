/*
*  鸭子辩解
* */

var duck = {
  duckSinging: function () {
    console.log('嘎嘎嘎');
  }
};

var chicken = {
  duckSinging: function () {
    console.log('嘎嘎嘎');
  }
};

var choir = [];

var joinChoir = function (animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal);
    console.log('恭喜加入合唱团');
    console.log('合唱团已有成员数量:' + choir.length);
  }
}

joinChoir(duck);
joinChoir(chicken);

console.log(choir);

//动态类型语言中实现一个原则：面向接口编程，而不是面向实现编程。


// 多态 同样的操作作用于不同的对象，产生不同的结果

var makeSound = function (animal) {
  if (animal instanceof Duck) {
    console.log('嘎嘎嘎');
  } else if (animal instanceof Chicken) {
    console.log('咯咯咯');
  }
}

var Duck = function () {
};

var Chicken = function () {
};

// 多态的思想：做什么 和 谁去做以及怎么做 分离开来
// 也就是将 "不变的事物" 与 "可变的事物" 分离开来

var makeSound2 = function (animal) {
  animal.sound();
};

var Duck2 = function () {
}

Duck2.prototype.sound = function () {
  console.log('嘎嘎嘎');
}

var Chicken2 = function () {
}

Chicken2.prototype.sound = function () {
  console.log('咯咯咯');
}

var Dog = function () {
}

Dog.prototype.sound = function () {
  console.log('汪汪汪');
}

makeSound2(new Duck2())

makeSound2(new Chicken2())

makeSound2(new Dog())

// 发出一个指令不同的对象返回不同的结果


var googleMap = {
  show: function () {
    console.log('开始渲染谷歌地图');
  }
}

var baiduMap = {
  show: function () {
    console.log('开始渲染百度地图');
  }
}

var soSoMap = {
  show: function () {
    console.log('开始渲染搜搜地图');
  }
}


// var renderMap = function () {
//   googleMap.show();
// }

var renderMap = function (type) {
  if (type === 'google') {
    googleMap.show();
  } else if (type === 'baidu') {
    baiduMap.show();
  }
};

renderMap('google');
renderMap('baidu');
// 这样的函数每次增加一种地图，都需要改动函数体，继续增加逻辑代码，是很麻烦的。

var renderMap2 = function (map) {
  if (map.show instanceof Function) {
    map.show();
  }
}

renderMap2(googleMap);
renderMap2(baiduMap);
renderMap2(soSoMap);


// 封装的目的是封装数据和封装实现


// 封装数据的实现
var myObject = (function () {
  var __name = 'save';
  return {
    getName: function () {
      return __name;
    },
    setName: function (name) {
      __name = name;
    }
  }
})();

console.log(myObject.getName());
myObject.setName('liSon');
myObject.setName('liShiHua');
console.log(myObject.getName());


var push =  Array.prototype.push;
var objTest = {};
push.call(objTest, 'hello');
push.call(objTest, 'world');
// console.log(objTest);
// console.log(objTest[1]);


var ojbTest2 = {
  id: 1,
  name: 'javascript',
  sayHello: function () {
    console.log('hello');
  }
};

console.log(Object.keys(ojbTest2).length);










