
function OptimalBST() {

	for ( i = 0; i < datas.length; i++) {

		costs[i][i] = datas[i]

	}//for


	for ( i = datas.length - 1; i >= 0; i--) {
		for ( j = i; j < datas.length; j++) {

			bestcost = 999.0

			bestroot = -1

			for ( r = i; r <= j; r++) {

				//alert(ii + " "+j +" " +r)
				rootcost = freq_sum(i, j) * 1.0

				//rootcost = freq_sum(i,j)
				//((r == 0) ? 0: costs[i][r - 1]) +
				//((r == j) ? 0 : costs[r + 1][j])

				if (r !== 0) {
					rootcost += costs[i][r - 1]
				}

				if (r != j) {

					rootcost += costs[r + 1][j]

				}

				if (rootcost < bestcost) {
					bestcost = rootcost;
					bestroot = r;
				}

			}

			costs[i][j] = bestcost
			//costs[i][j] = costs[i][j].toFixed(2)
			roots[i][j] = bestroot

		}

	}

}//optbst

function print_costs() {

	document.write('<table border="1" cellspacing="0" cellpadding="5"')

	for ( i = 0; i < datas.length; i++) {

		document.write("<tr>")

		for ( j = 0; j < datas.length; j++) {

			document.write("<td>")
			document.write(Math.round(costs[i][j] * 100) / 100)
			document.write("</td>")
		}

		document.write("</tr>")
	}

	document.write('</table>')

}//pcosts

function print_roots() {

	document.write('<table border="1" cellspacing="0" cellpadding="5">')

	for ( i = 0; i < datas.length; i++) {

		document.write("<tr>")

		for ( j = 0; j < datas.length; j++) {

			document.write("<td>")
			document.write(roots[i][j])
			document.write("</td>")
		}

		document.write("</tr>")
	}

	document.write('</table>')

}//pcosts

function print_graph() {

	paper = new Raphael(document.getElementById('canvas_container'), 1200, 600);
        
        //rootu bul
	rootsayi = roots[0][datas.length - 1]

	//root u çiz
	paper.path("M600 25L300 100")
	paper.path("M600 25L900 100")
	root = paper.circle(600, 25, 20).attr({
		fill : "blue"
	})
	paper.text(600, 25, rootsayi);

	//sol grap çiz
	left_graph(300, 100, roots[0][rootsayi - 1], 0, rootsayi - 1, 0)

	// sag grap çiz
	right_graph(900, 100, roots[rootsayi+1][datas.length - 1], rootsayi + 1, datas.length - 1, 0)

	//yukseklik 100
	//sol 350
	//sag 850
}

function left_graph(x, y, d, p, q, depth) {

	if (q >= p) {

		depth += 27;

		ciz(x, y, d, 0, depth)

		k = roots[p][d - 1]
		left_graph(x - 100 + depth, y + 40, k, p, d - 1, depth)

		l = roots[d+1][q]
		right_graph(x + 100 - depth, y + 40, l, d + 1, q, depth)

	}
}

function right_graph(x, y, d, p, q, depth) {

	if (q >= p) {
		depth += 27;
		ciz(x, y, d, 1, depth)

		k = roots[p][d - 1]
		left_graph(x - 100 + depth, y + 40, k, p, d - 1, depth)

		l = roots[d+1][q]
		right_graph(x + 100 - depth, y + 40, l, d + 1, q, depth)

	}
}

function ciz(x, y, d, t, depth) {

	if (t == 1)
		t = 100 - depth
	else
		t = -100 + depth

	paper.path("M" + x + " " + y + "L" + (x + t) + " " + (y + 40))
	paper.path("M" + x + " " + y + "L" + (x - t) + " " + (y + 40))

	paper.path("M" + (x + t + 6) + " " + (y + 40) + "L" + (x + t - 6) + " " + (y + 40))
	paper.path("M" + (x - t + 6) + " " + (y + 40) + "L" + (x - t - 6) + " " + (y + 40))

	paper.circle(x, y, 9).attr({
		fill : "lightblue"
	})
	paper.text(x, y, d);
	//alert()
}

function freq_sum(f, l) {
	total = 0.0

	//alert(f+" "+l)

	for ( m = f; m <= l; m++) {
		total += datas[i]

	}
	//alert(total)
	return total
}























/*
var root=new Node(5,0.3)
var n1=new Node(55,0.3)
var n2=new Node(77,0.3)

root.left=n1
root.right=n2

*/

//document.write(root.left.key)
//alert(1)

//document.write(costs[1][1])
//alert(2)

/*
 function OBST(){
 for (i=0;i<datas.length;i++)
 {
 costs[i,i]=datas[i]
 }

 for(l=datas.length;l>=0;l--){

 for(h=i;h<datas.lenght;h++)
 {
 realcost=0
 bestroot = -1

 realcost = 999999

 for(r=l;k<=h;r++)
 {
 rootcost = sumOfProb(datas, i, j)

 if (r == 0)
 {
 rootcost += 0;
 }

 else{
 rootcost += costs[l][r - 1];
 }

 if (r == h){
 rootcost += 0;
 }

 else{
 rootcost += costs[r + 1][h];
 }

 if (rootcost < realcost) {
 realcost = rootcost;
 bestroot = r;
 }
 }

 costs[l][h] = realcost;
 cArr[l][h].root = bestroot;

 }

 }

 }

 //OBST()

 for (i=0;i<datas.length;i++)
 {
 for(j=0;j<datas.length;j++)
 {
 //document.write(costs[i,j]+" ")
 }

 }

 */

/*
 var ea = new myObject("e")

 for(var e in ea)
 {
 alert(e)
 }

 for(var d in datas)
 {
 alert(d+" "+datas[d])
 }

 */

