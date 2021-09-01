class Base {
    constructor(x, y, w,h) 
    {
      let options = {
       isStatic:true
      };
      
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      rectMode(CENTER);
      noStroke();
      fill(148,127,146);
      rect(pos.x,pos.y, this.w, this.h);
      pop();
    }
}

// Sorry to ask but how do you create walls in visual studio? I do know about the ground but I believe we only done the walls in code.org.