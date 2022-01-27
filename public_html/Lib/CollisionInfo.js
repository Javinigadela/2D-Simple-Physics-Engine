/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function CollisionInfo(){
    this.mDepth = 0;
    this.mNormal = new Vec2(0, 0);
    this.mStart = new Vec2(0, 0);
    this.mEnd = new Vec2(0, 0);
}

CollisionInfo.prototype.setNormal = function(v){
    this.mNormal = v;
};
CollisionInfo.prototype.getNormal = function(){
    return this.mNormal;
};
CollisionInfo.prototype.setDepth = function(d){
    this.mDepth = d;
};
CollisionInfo.prototype.getDepth = function(){
    return this.mDepth;
};
CollisionInfo.prototype.setStart = function(v){
    this.mStart = v;
};
CollisionInfo.prototype.getStart = function(){
    return this.mStart;
};
CollisionInfo.prototype.setEnd = function(v){
    this.mEnd = v;
};
CollisionInfo.prototype.getEnd = function(){
    return this.mEnd;
};
CollisionInfo.prototype.setInfo = function(d, n, s){
    this.mDepth = d;
    this.mNormal = n;
    this.mStart = s;
    this.mEnd = s.add(n.scale(d));
};
CollisionInfo.prototype.changeDir = function(){
    this.mNormal = this.mNormal.scale(-1);
    var n = this.mStart;
    this.mStart = this.mEnd;
    this.mEnd = n;
};






