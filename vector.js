enchant();
(function() {
  var Vector;
  return Vector = (function() {
    function Vector() {}
    Vector.prototype.initialize = function(x, y) {
      return this.set(x, y);
    };
    Vector.prototype.set = function(x, y) {
      this.x = x;
      this.y = y;
      return this;
    };
    Vector.prototype.add = function(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    };
    Vector.prototype.sub = function(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    };
    Vector.prototype.scale = function(n) {
      this.x *= n;
      this.y *= n;
      return this;
    };
    Vector.prototype.div = function(n) {
      this.x /= n;
      this.y /= n;
      return this;
    };
    Vector.prototype.product = function(v) {
      return this.x * v.x + this.y * v.y;
    };
    Vector.prototype.length = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.truncate = function(n) {
      if (this.length()) {
        this.scale(n / this.length());
      }
      return this;
    };
    Vector.prototype.normalize = function() {
      return this.truncate(1);
    };
    Vector.prototype.angle = function() {
      return (180 * Math.atan2(this.y, this.x)) / Math.PI;
    };
    Vector.prototype.rotate = function(deg) {
      var rad, size;
      rad = (deg * Math.PI) / 180;
      size = this.length();
      this.x = Math.sin(rad) * this.y + Math.cos(rad) * this.x;
      this.y = Math.cos(rad) * this.y - Math.sin(rad) * this.x;
      return this.truncate(size);
    };
    Vector.prototype.clone = function() {
      return new Vector(this.x, this.y);
    };
    Vector.prototype.reverse = function() {
      this.x -= 1;
      this.y -= 1;
      return this;
    };
    return Vector;
  })();
});