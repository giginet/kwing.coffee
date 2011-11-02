Array.prototype._index = function(index) {
  var length;
  if (index < 0) {
    length = this.length;
    return length + index;
  }
  return index;
};
Array.prototype.at = function(index) {
  return this[this._index(index)];
};
Array.prototype.map = function(func) {
  var value, _ref;
  return ([].splice.apply(this, [0, this.length - 0].concat(_ref = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      value = this[_i];
      _results.push(func(value));
    }
    return _results;
  }).call(this))), _ref);
};
Array.prototype.clone = function() {
  return this.dup();
};
Array.prototype.dup = function() {
  return this.slice(0, this.length);
};
Array.prototype.each = function(func) {
  var value, _i, _len;
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    value = this[_i];
    func(value);
  }
  return this;
};
Array.prototype.eachIndex = function(func) {
  var index, _ref;
  for (index = 0, _ref = this.length; 0 <= _ref ? index < _ref : index > _ref; 0 <= _ref ? index++ : index--) {
    func(index);
  }
  return this;
};
Array.prototype.eachWithIndex = function(func) {
  var index, _ref;
  for (index = 0, _ref = this.length; 0 <= _ref ? index < _ref : index > _ref; 0 <= _ref ? index++ : index--) {
    func(this[index], index);
  }
  return this;
};
Array.prototype.deleteAt = function(index) {
  index = this._index(index);
  if (index >= this.length) {
    return;
  }
  return this.splice(index, 1);
};
Array.prototype.deleteIf = function(func) {
  var index, _ref;
  for (index = 0, _ref = this.length; 0 <= _ref ? index < _ref : index > _ref; 0 <= _ref ? index++ : index--) {
    if (func(this[index])) {
      this.deleteAt(index);
    }
  }
  return this;
};
Array.prototype.reject = function(func) {
  var before;
  before = this.length;
  this.deleteIf(func);
  if (before === this.length) {
    return;
  }
  return this;
};
Array.prototype.isEmpty = function() {
  return this.length === 0;
};
Array.prototype.isEql = function(other) {
  var index, _ref;
  if (this.length !== other.length) {
    return false;
  }
  for (index = 0, _ref = this.length; 0 <= _ref ? index < _ref : index > _ref; 0 <= _ref ? index++ : index--) {
    if (this[index] !== other[index]) {
      return false;
    }
  }
  return true;
};
Array.prototype.fill = function(val, start, end) {
  var i, _ref;
  if (start == null) {
    start = 0;
  }
  if (end == null) {
    end = this.length - 1;
  }
  start = this._index(start);
  end = this._index(end);
  [].splice.apply(this, [start, end - start].concat(_ref = (function() {
    var _results;
    _results = [];
    for (i = start; start <= end ? i < end : i > end; start <= end ? i++ : i--) {
      _results.push(val);
    }
    return _results;
  })())), _ref;
  return this;
};
Array.prototype.first = function() {
  return this[0];
};
Array.prototype.last = function() {
  var last;
  last = this._index(-1);
  return this[last];
};
Array.prototype.uniq = function() {
  var elem, _i, _len;
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    elem = this[_i];
    this.deleteIf(function(val, index) {
      return val === elem;
    });
  }
  return this;
};
Array.prototype.index = function(value) {
  var index, _ref;
  for (index = 0, _ref = this.length; 0 <= _ref ? index < _ref : index > _ref; 0 <= _ref ? index++ : index--) {
    if (this[index] === value) {
      return index;
    }
  }
  return;
};
Array.prototype.indexes = function() {
  var index, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = arguments.length; _i < _len; _i++) {
    index = arguments[_i];
    _results.push(this.at(index));
  }
  return _results;
};
Array.prototype.rindex = function(value) {
  var index, _ref;
  for (index = _ref = this.length; _ref <= 0 ? index < 0 : index > 0; _ref <= 0 ? index++ : index--) {
    if (this[index] === value) {
      return index;
    }
  }
  return;
};
Array.prototype.flatten = function() {
  return this;
};
Array.prototype.zip = function(array) {
  var index, size, _results;
  size = Math.max(this.length, array.length);
  _results = [];
  for (index = 0; 0 <= size ? index < size : index > size; 0 <= size ? index++ : index--) {
    _results.push([this[index], array[index]]);
  }
  return _results;
};
Array.prototype.transpose = function() {
  return this;
};
Array.prototype.compact = function() {
  return this.deleteIf(function(value) {
    return value === void 0;
  });
};
Array.prototype.isInclude = function(val) {
  var elem, _i, _len;
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    elem = this[_i];
    if (elem === val) {
      return true;
    }
  }
  return false;
};
Array.prototype.size = function() {
  return this.length;
};
Array.prototype.swap = function(a, b) {
  var tmp;
  a = this._index(a);
  b = this._index(b);
  tmp = this[a];
  this[a] = this[b];
  this[b] = tmp;
  return this;
};
Array.prototype.shuffle = function() {
  var i, _ref;
  for (i = 0, _ref = this.length; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
    this.swap(i, Math.floor(Math.random() * this.length));
  }
  return this;
};
Array.prototype.choice = function() {
  return this[Math.floor(Math.random() * this.length)];
};
Array.prototype.count = function(val) {
  var elem, sum, _i, _len;
  sum = 0;
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    elem = this[_i];
    if (elem === val) {
      ++sum;
    }
  }
  return sum;
};
Array.prototype.countIf = function(func) {
  var index, sum, _ref;
  sum = 0;
  for (index = 0, _ref = this.length; 0 <= _ref ? index < _ref : index > _ref; 0 <= _ref ? index++ : index--) {
    if (func(this[index], index)) {
      ++sum;
    }
  }
  return sum;
};
Array.prototype.replace = function(other) {
  var i, _ref;
  this.clear;
  for (i = 0, _ref = other.length; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
    this[i] = other[i];
  }
  return this;
};
Array.prototype.nitems = function() {
  return this.clone().compact().size();
};
Array.prototype.insert = function(value, index) {
  return this;
};
Array.prototype.clear = function() {
  return this.deleteIf(function() {
    return true;
  });
};
Array.prototype.max = function() {
  var max, value, _i, _len;
  max = this.first();
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    value = this[_i];
    if (value > max) {
      max = value;
    }
  }
  return max;
};
Array.prototype.min = function() {
  var min, value, _i, _len;
  min = this.first();
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    value = this[_i];
    if (value < min) {
      min = value;
    }
  }
  return min;
};