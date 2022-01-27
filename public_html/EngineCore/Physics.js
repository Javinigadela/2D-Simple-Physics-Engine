/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var gEngine = gEngine || {};

gEngine.Physics = (function(){
    
    var collision = function(){
        var i, j;
        var collisionInfo = new CollisionInfo();
        for(i = 0; i < gEngine.Core.mAllObjects.length; i++){
            for(j = i + 1; j < gEngine.Core.mAllObjects.length; j++){
                if(gEngine.Core.mAllObjects[i].boundTest(gEngine.Core.mAllObjects[j])){
                    if(gEngine.Core.mAllObjects[i].collisionTest(gEngine.Core.mAllObjects[j], collisionInfo)){
                        // make sure normal is from object i to j
                        if(collisionInfo.getNormal().dot(gEngine.Core.mAllObjects[j].mCenter.subtract(gEngine.Core.mAllObjects[i].mCenter)) < 0){
                            collisionInfo.changeDir();
                        }
                        // draw collision info
                        drawCollisionInfo(collisionInfo, gEngine.Core.mContext);
                    }
                }
            }
        }
    };
    
    var drawCollisionInfo = function(collisionInfo, context){
        context.beginPath();
        context.moveTo(collisionInfo.mStart.x, collisionInfo.mStart.y);
        context.lineTo(collisionInfo.mEnd.x, collisionInfo.mEnd.y);
        context.closePath();
        context.strokeStyle = "orange";
        context.stroke();
    };
    
    var mPublic = {
        collision: collision
    };
    return mPublic;
}());
