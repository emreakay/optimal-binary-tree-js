// küçükten büyüğe

var datas=new Array();

/*
datas[0]=0.1; 
datas[1]=0.1;   
datas[2]=0.1;
datas[3]=0.1;
datas[4]=0.1;
datas[5]=0.1; // root
datas[6]=0.1;
datas[7]=0.1;
datas[8]=0.1; 
datas[9]=0.1; 
datas[10]=0.1; 
datas[11]=0.1; 


datas[0]=0.1; 
datas[1]=0.1;   
datas[2]=0.1;
datas[3]=0.1;
datas[4]=0.1;
datas[5]=0.1; 
datas[6]=0.1;
datas[7]=0.1;
datas[8]=0.1; //root
datas[9]=0.1; 
datas[10]=0.1; 
datas[11]=0.1; 
datas[12]=0.1; 
datas[13]=0.1;
datas[14]=0.1;
datas[15]=0.1;
datas[16]=0.1;










datas[0]=0.1; 
datas[1]=0.1;   
datas[2]=0.1;
datas[3]=0.1;
datas[4]=0.1;
datas[5]=0.1;
datas[6]=0.3; //root
datas[7]=0.1;
datas[8]=0.1; 
datas[9]=0.1; 
datas[10]=0.1; 
datas[11]=0.1; 
*/



datas[0]=0.1; 
datas[1]=0.1;   
datas[2]=0.1;
datas[3]=0.1;
datas[4]=0.1;
datas[5]=0.01; // 5 en alta indi
datas[6]=0.1;
datas[7]=0.1;
datas[8]=0.1; 
datas[9]=0.1; 
datas[10]=0.1; 
datas[11]=0.1; 

 


datas[0]=0.1; 
datas[1]=0.1;   
datas[2]=0.1;
datas[3]=0.1;
datas[4]=0.1;
datas[5]=0.4; // root
datas[6]=0.1;
datas[7]=0.1;
datas[8]=0.1; 
datas[9]=0.1; 
datas[10]=0.001;  //en alt
datas[11]=0.1;     




//datas.sort(datas);














// dizi initialize
// 2 boyutlu cost
var costs=new Array(datas.length)

for(k=0;k<datas.length;k++)
	costs[k]=new Array(datas.length)
	
for(k=0;k<datas.length;k++){
	for(l=0;l<datas.length;l++)
	{
		costs[k][l] = 0.0		
	}
}


var roots=new Array(datas.length)

for(k=0;k<datas.length;k++)
	roots[k]=new Array(datas.length)
	
for(k=0;k<datas.length;k++){
	for(l=0;l<datas.length;l++)
	{
		roots[k][l] = -1		
	}
}


//costs[1][1]=33;