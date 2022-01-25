/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Circle = function(center, radius){
    RigidShape.call(this, center);
    this.mType = "Circle";
    this.mRadius = radius;
    // The start point of line in circle
    this.mStartPoint = new Vec2(center.x, center.y - radius);
};
// Make sure Circle inherits from RigidShape
var prototype = Object.create(RigidShape.prototype);
prototype.constructor = Circle;
Circle.prototype = prototype;

Circle.prototype.draw = function(context){
    context.beginPath();
    // draw a circle
    context.arc(this.mCenter.x, this.mCenter.y, this.mRadius, 0, Math.PI*2, true);
    // draw a line from star point toward center
    context.moveTo(this.mStartPoint.x, this.mStartPoint.y);
    context.lineTo(this.mCenter.x, this.mCenter.y);
    context.closePath();
    context.stroke();
};