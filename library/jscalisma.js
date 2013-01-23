function myObject(v) {
	this.v = v
	this.yaz = function() {
		alert(v)
	}
	this.k=33;
}


var ea = new myObject("e")

for(var e in ea)
	{
		alert(e)
	}

