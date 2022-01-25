/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Rectangle = function(center, width, height){
    RigidShape.call(this, center);
    this.mType = "Rectangle";
    this.mWidth = width;
    this.mHeight = height;
    this.mVertex = [];
    this.mFaceNormal = [];
    
    // Vertex position computation
    this.mVertex[0] = new Vec2(center.x - width/2, center.y - height/2); // top left
    this.mVertex[1] = new Vec2(center.x + width/2, center.y - height/2); // top right
    this.mVertex[2] = new Vec2(center.x + width/2, center.y + height/2); // bottom right
    this.mVertex[3] = new Vec2(center.x - width/2, center.y + height/2); // bottom left
    
    //          /-------------/         All are normalized
    //   <------/             /------>  horizontal face normals example.
    //          /-------------/
    // Face normals computation
    this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);  //   Top
    this.mFaceNormal[0] = this.mFaceNormal[0].normalize();
    this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);  //   Right
    this.mFaceNormal[1] = this.mFaceNormal[1].normalize();
    this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);  //   Bottom
    this.mFaceNormal[2] = this.mFaceNormal[2].normalize();
    this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);  //   Left
    this.mFaceNormal[3] = this.mFaceNormal[3].normalize();
};
// Make sure Rectangle inherits from RigidShape
var prototype = Object.create(RigidShape.prototype);
prototype.constructor = Rectangle;
Rectangle.prototype = prototype;

Rectangle.prototype.draw = function(context){
    context.save();
    context.translate(this.mVertex[0].x, this.mVertex[0].y);
    context.rotate(this.mAngle);
    context.strokeRect(0, 0, this.mWidth, this.mHeight);
    context.restore();
}