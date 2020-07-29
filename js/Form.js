class Form {

    constructor() {
      this.button = createButton('Click here to play');
      this.reset = createButton('Replay');
      this.l1 = createButton('LEVEL 1');
      this.l2 = createButton('LEVEL 2');
      this.l3 = createButton('LEVEL 3');
    }

    hide(){
      this.button.hide();
      this.l1.hide();
      this.l2.hide();
      this.l3.hide();
    }
  
    display(){
      this.button.position(displayWidth/2 - 25,displayHeight - 50);
      this.reset.position(displayWidth - 100,30);

      this.l1.position(displayWidth/2 - 200, displayHeight - 100);
      this.l2.position(displayWidth/2, displayHeight - 100);
      this.l3.position(displayWidth/2 + 200, displayHeight - 100);

      this.l1.mousePressed(()=>{
        x = 1;
        y = 10;
      });

      this.l2.mousePressed(()=>{
        x = 10;
        y = 30;
      });

      this.l3.mousePressed(()=>{
        x = 20;
        y = 50;
      });

      this.button.mousePressed(()=>{
        gameState = 1;     
      }); 

      this.reset.mousePressed(()=>{
        gameState = 0;
      });

    }

   
}
  