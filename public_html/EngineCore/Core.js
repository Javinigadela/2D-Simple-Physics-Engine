/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var gEngine = gEngine || {};

gEngine.Core = (function(){
    var mCanvas, mContext, mWidth = 800, mHeight = 450;
    mCanvas = document.getElementById('canvas');
    mContext = mCanvas.getContext('2d');
    mCanvas.height = mHeight;
    mCanvas.width = mWidth;
    var mAllObjects = [];
    // Game loop variables
    var mCurrentTime, mElapsedTime, mPreviousTime = Date.now(), mLagTime = 0;
    var kFPS = 60;  // frames per second
    var kFrameTime = 1/kFPS;
    var mUpdateIntervalInSeconds = kFrameTime;
    var kMPF = 1000 * kFrameTime; // miliseconds per frame
    
    var runGameLoop = function(){
        requestAnimationFrame(function (){
            runGameLoop();
        })
        mCurrentTime = Date.now();
        mElapsedTime = mCurrentTime - mPreviousTime;
        mPreviousTime = mCurrentTime;
        mLagTime += mElapsedTime;
        
        updateUIEcho();
        draw();
        
        while(mLagTime >= kMPF){
            mLagTime -= kMPF;
            gEngine.Physics.collision();
            update();
        }
        
    };
    
    var updateUIEcho = function(){
        document.getElementById("uiEchoString").innerHTML = 
        "<p><b>Selected Object:</b>:</p>" +
        "<ul style=\"margin:-10px\">" + 
        "<li>Id: " + gObjectNum + "</li>" +
        "<li>Center: " + mAllObjects[gObjectNum].mCenter.x.toPrecision(3) + "," + mAllObjects[gObjectNum].mCenter.y.toPrecision(3) + "</li>" +
        "<li>Angle: " + mAllObjects[gObjectNum].mAngle.toPrecision(3) + "</li>" +
        "</ul> <hr>" + "<p><b>Control</b>: of selected object</p>" +
        "<ul style=\"margin:-10px\">" + 
        "<li><b>Num</b> or <b>Up/Down Arrow</b>: SelectObject</li>" +
        "<li><b>WASD</b> + <b>QE</b>: Position [Move + Rotate]</li>" +
        "</ul> <hr>" + 
        "<b>F/G</b>: Spawn [Rectangle/Circle] at selected object" + 
        "<p><b>R</b>: Reset System</p>" +    
        "<hr>";
    };
    
    var draw = function(){
        mContext.clearRect(0, 0, mWidth, mHeight);
        var i;
        for(i = 0; i < mAllObjects.length; i++){
            mContext.strokeStyle = 'blue';
            if(i === gObjectNum)
                mContext.strokeStyle = 'red';
            mAllObjects[i].draw(mContext);
        }
    };
    
    var update = function(){
        var i;
        for(i = 0; i < mAllObjects.length; i++){
            mAllObjects[i].update(mContext);
        }
    };
    
    var initializeEngineCore = function(){
        runGameLoop();
    };
    
    
    var mPublic = {
        initializeEngineCore: initializeEngineCore,
        mAllObjects: mAllObjects,
        mWidth: mWidth,
        mHeight: mHeight,
        mContext: mContext
    };
    return mPublic;
}());