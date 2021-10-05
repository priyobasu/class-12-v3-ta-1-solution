var marks = [35,38,42,45,43,34,46,41,48,32];

function square(marks){
  var sq;
  for(var i=0;i<marks.length;i=i+1){
    marks[i]=marks[i]*marks[i];
   
  }
  return marks;
}

function setup() 
{
  createCanvas(400,400);
  var result=square(marks);
  console.log(result);

}

function draw() 
{
  background(30);
}

 

