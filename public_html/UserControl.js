/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function userControl(event){
    var keycode;
    
    // Browsers set up
    if(window.event){ // IE
        keycode = event.keyCode;
    }
    else if(event.which){ // Netscape/Firefox/Opera
        keycode = event.which;
    }
    
    var width = gEngine.Core.mWidth;
    var height = gEngine.Core.mHeight;
    var context = gEngine.Core.mContext;
    
    
    if(keycode === 70){ // F
        context.strokeRect(Math.random()*width*0.8, Math.random()*height*0.8, Math.random()*30+10, Math.random()*30+10);
    }
    if(keycode = 71){ // G
        context.beginPath();
        context.arc(Math.random()*width*0.8, Math.random()*height*0.8, Math.random()*30+10, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();
    }
    
    
}

