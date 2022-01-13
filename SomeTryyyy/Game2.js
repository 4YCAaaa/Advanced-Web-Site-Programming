window.onload = function() 
{
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
    var lastframe = 0;
    var fpstime = 0;
    var framecount = 0;
    var fps = 0;
    var level =
    {
        x: 1,
        y: 65,
        width: canvas.width - 2,
        height: canvas.height - 66
    };
    var square =
    {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xdir: 0,
        ydir: 0,
        speed: 0
    }
    var score = 0;

    function init() {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseout", onMouseOut);
        
        square.width = 50;
        square.height = 50;
        square.x = level.x + (level.width - square.width) / 2;
        square.y = level.y + (level.height - square.height) / 2;
        square.xdir = 1;
        square.ydir = 1;
        square.speed = 200;
        
        score = 0;

        main(0);
    }
    function main(tframe) 
    {
        window.requestAnimationFrame(main);
        update(tframe);
        render();
    }

    function update(tframe) 
    {
        var dt = (tframe - lastframe) / 1000;
        lastframe = tframe;
        
        updateFps(dt);
        
        square.x += dt * square.speed * square.xdir;
        square.y += dt * square.speed * square.ydir;
        
        if (square.x <= level.x) 
        {
            square.xdir = 1;
            square.x = level.x;
        } 
        else if (square.x + square.width >= level.x + level.width) 
        {
            square.xdir = -1;
            square.x = level.x + level.width - square.width;
        }
        if (square.y <= level.y) 
        {
            square.ydir = 1;
            square.y = level.y;
        } else if (square.y + square.height >= level.y + level.height) 
        {
            square.ydir = -1;
            square.y = level.y + level.height - square.height;
        }
    }
    
    function updateFps(dt) 
    {
        if (fpstime > 0.25) 
        {
            fps = Math.round(framecount / fpstime);
 
            fpstime = 0;
            framecount = 0;
        }
        fpstime += dt;
        framecount++;
    }
    
    function render() {
        drawFrame();
        
        // Draw the square
        context.fillStyle = "#A6A6D2";
        context.fillRect(square.x, square.y, square.width, square.height);
        
        context.fillStyle = "#5151A2";
        context.font = "19px Verdana";
        var textdim = context.measureText(score);
        context.fillText(score, square.x+(square.width-textdim.width)/2, square.y+65);
    }
    
    function drawFrame() 
    {
        context.fillStyle = "#F1E1FF";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
    }
    
    function onMouseMove(e) {}
    
    function onMouseDown(e) 
    {
        var pos = getMousePos(canvas, e);

        if (pos.x >= square.x && pos.x < square.x + square.width && pos.y >= square.y && pos.y < square.y + square.height) 
        {
            score += 1;
            square.speed *= 1.1;
            square.x = Math.floor(Math.random()*(level.x+level.width-square.width));
            square.y = Math.floor(Math.random()*(level.y+level.height-square.height));
            square.xdir = Math.floor(Math.random() * 2) * 2 - 1;
            square.ydir = Math.floor(Math.random() * 2) * 2 - 1;
        }
    }
    
    function onMouseUp(e) {}
    function onMouseOut(e) {}

    function getMousePos(canvas, e) 
    {
        var rect = canvas.getBoundingClientRect();
        console.log(rect.left)
        console.log(e.clientX - rect.left)
        console.log(rect.right - rect.left)
        console.log(canvas.width)
        return {
            x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
            y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
        };
    }
    init();
};