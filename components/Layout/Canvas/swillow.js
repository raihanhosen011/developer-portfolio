import TweenMax from "gsap";

if(typeof window === 'object'){
var canvas = document.querySelector('.c'),
	ctx = canvas.getContext('2d'),
	points = [],
	m = {x: null, y: null},
	r = 0
        
    var a = 20; // how many dots to have
    var b = 5; // how fast to spin
    var c = 0.1; // how much to fade. 1 all, 0.5 half, 0 none
    var d = 100; // distance from the mouse


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    m.x = canvas.width / 2;
    m.y = canvas.height / 2;

    window.addEventListener('mousemove', function(e){
         TweenMax.to(m, 0.3, {x: e.clientX, y: e.clientY, ease: 'linear'})
    })

    for(var i=0;i<a;i++){
        points.push({
            r: 360 / a * i,
            p: {x: null, y: null},
            w: Math.random()*5,
            c: '#fff',
            d: Math.random() * (d + 5) - 5,
            s: Math.random() * (b + 5) - 5
        })
    }

    function render(){
        if(m.x == null || m.y == null) return;

        ctx.fillStyle = 'rgba(0,0,0,'+c+')';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.lineCap = 'round';

        for(var i=0; i<points.length; i++){
            var p = points[i];

            p.r += p.s;
            if(p.r >= 360) p.r = p.r - 360;

            var vel = {
                x: p.d * Math.cos(p.r * Math.PI / 180),
                y: p.d * Math.sin(p.r * Math.PI / 180)
            };

            if(p.p.x != null && p.p.y != null){
                ctx.strokeStyle = p.c;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(p.p.x, p.p.y);
                ctx.lineTo(m.x + vel.x, m.y + vel.y)
                ctx.stroke();
                ctx.closePath();
            }

            p.p.x = m.x + vel.x;
            p.p.y = m.y + vel.y;
        }
    }


    window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    (function animloop(){
        requestAnimFrame(animloop);
        render();
    })();
}
