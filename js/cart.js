
let previewImages = [
"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_portfolio_medium/images/575bce4636cd78485928b5de/1481525688636-140df8735a0c8318c4c73d0db5d9688e.jpeg",
"https://www.pinholemedia.com/img/s/v-3/p466998069-4.jpg",
"http://littlestories.in/wp-content/uploads/2016/11/Newborn-Baby-Kids-Photography-in-Delhi-Gurgaon-Noida-3-1620x1080.jpg",
"http://littlestories.in/wp-content/uploads/2016/11/little-stories-kids-baby-photography-delhi-noida-gurgaon-work-17.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIzVt4AoHa2k8X8GcOoF_QSAa_wSvVh7lnFeA4f0t_DZHi1FTCw",
"http://ljhollowayphotography.com/wp-content/uploads/2016/09/Las-Vegas-Child-Photographer-LJHolloway-Photography-Children0284.jpg"

];
console.log(previewImages);

function carts_data_show(){
	var carts=JSON.parse(localStorage.getItem('carts',));
	let carts_product_show=document.getElementById('carts_product_show');
	var total_price_c=document.getElementById('total_price_1');

	var catrs_total=0;
	carts_product_show.innerHTML='';
	for(var i=0;i<carts.length;i++){
		let name=carts[i].name
		let price=carts[i].price
		let quantity=carts[i].quantity
		let subtotal=price*quantity
		 catrs_total  += subtotal

		carts_product_show.innerHTML +='<tr><td><a onclick="cart_deleteproduct(\''+i+'\')"><i class="fa fa-trash"></i></a></td><td><img src="'+previewImages[i]+'" width="100px" height="80px"></td><td>'+name+"</td><td>"+price+"</td><td>"+quantity+"</td><td>"+subtotal+'</td></tr>';
		
	}

	total_price_c.innerHTML =catrs_total;

}

function cart_deleteproduct(delIndex){
	var carts=JSON.parse(localStorage.getItem('carts'));
	for(var i=0;i<carts.length;i++){
		if(parseInt(delIndex) === i){
			carts.splice(i,1)
		}
	}
	localStorage.setItem('carts', JSON.stringify(carts));
	carts_data_show();

}