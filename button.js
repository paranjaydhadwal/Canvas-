class Button1 {
    constructor() {
       this.reset=createButton('Reset');
      }
      display(){
          this.reset.position(745,7)
        this.reset.mousePressed(()=>{
            position=[];
             drawing=[];
             dataArray=[];
             database.ref('drawing').remove();
        })
      }
}