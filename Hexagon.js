var Polygon = function Polygon(sides, cx, cy, r) {
  this.getSides() {
    return sides;
  };
};

Polygon.prototype.path = function path() {
  var sides = this.getSides();
  var angle = 2 * Math.PI / sides;
  var base_angle = 3./2 * Math.PI - angle / 2.;
  var x0_relative = radius * Math.cos(base_angle);
  var y0_relative = radius * Math.sin(base_angle);
  var path = "M" + x + "," + y + "m" + x0_relative + "," + y0_relative;
  var side = Math.SQRT2 * radius * Math.sqrt(1 - Math.cos(angle));
  angle2 = Math.PI - angle;
  for(var i = 0; i < sides; i++) {
    x = side * Math.cos(i * angle);
    y = side * Math.sin(i * angle);
    path = path + "l" + x + "," + y;
  }
  path = path + "Z";
  return path; 
};

Polygon.prototype.side = function side() {
  var sides = this.getSides();
};

Polygon.prototype.apotheme = function apotheme() {
  var sides = this.getSides();
  var angle = Math.PI / sides;
  return this.r * Math.cos(angle);      
};

var Hexagon = function Hexagon(cx, cy, r) {
  var SIDES = 6;
  this.cx = cx;
  this.cy = cy;
  this.r = r;

  this.getSides = function() {
    return SIDES;
  };
};

Hexagon.prototype = Polygon.prototype;

