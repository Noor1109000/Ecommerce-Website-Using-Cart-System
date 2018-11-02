var Product_name=document.getElementById('Product_name');
	// console.log(product_id);
var Product_quantity=document.getElementById('Product_quantity');
	// console.log(Product_name);
var unit_price=document.getElementById('unit_price');
	// console.log(Product_price);
var product_img=document.getElementById('product_img');
	// console.log(product_img);
var showContent=document.getElementById('showContent')
var total_price=document.getElementById('total_price')

var total_product_show=document.getElementById('total_product_show');
var addtocart=document.getElementById('addtocart');

var formsubmit=document.getElementById('form_submit');



formsubmit.addEventListener('click',function(e){


	if(!Product_name.value || !Product_quantity.value || !unit_price.value ){
		return false;
	}

	var productData={
		productName:Product_name.value,
		productPrice:unit_price.value,
		productQuantity:Product_quantity.value
		
	}

	console.log(productData);

	if(localStorage.getItem('productDatas')===null){
		var productDatas = [];
		productDatas.push(productData);
		localStorage.setItem('productDatas', JSON.stringify(productDatas));
	}
	else{
		var productDatas = JSON.parse(localStorage.getItem('productDatas'));
		productDatas.push(productData);
		localStorage.setItem('productDatas', JSON.stringify(productDatas));
	}
	// fetchProductDatas();

	document.getElementById('product_form').reset();
	e.preventDefault();
});






function deleteproduct(index){
	var productDatas = JSON.parse(localStorage.getItem('productDatas'));

	for(var i=0;i<productDatas.length;i++){
		if(i===parseInt(index)){
			productDatas.splice(i,1);
		}
	}
	localStorage.setItem('productDatas', JSON.stringify(productDatas));
	fetchData();

}


function fetchData(){
	var productDatas = JSON.parse(localStorage.getItem('productDatas'));

	var totalprice=0;
	
	showContent.innerHTML='';
	for(var i=0;i<productDatas.length;i++){
		let name=productDatas[i].productName;
		let unitPrice=productDatas[i].productPrice;
		let quantity=productDatas[i].productQuantity;
		let subtotal=unitPrice*quantity;
		totalprice +=subtotal;

		showContent.innerHTML +='<tr><td><a href="" onclick="deleteproduct(\''+i+'\')"><i class="fa fa-trash"></i></a></td><td></td><td>'+name+"</td><td>"+unitPrice+"</td><td>"+quantity+"</td><td>"+subtotal+"</td></tr>";
	}

	total_price.innerHTML=totalprice;

		
}

function add_to_cart(cart_item){
	var productDatas = JSON.parse(localStorage.getItem('productDatas'));

}




function singleFetchItem(){
	var productDatas = JSON.parse(localStorage.getItem('productDatas'));
	
	total_product_show.innerHTML='';
	for(var i=0;i<productDatas.length;i++){
		let name=productDatas[i].productName;
		let unitPrice=productDatas[i].productPrice;
		let quantity=productDatas[i].productQuantity;

		// single_product_show.innerHTML +='<div class="col-sm-4 col-md-4 col-lg-4"><div class="single_product"><p>'+name+'</p></div></div>';
		total_product_show.innerHTML +=
		'<div class="col-sm-3 col-md-3 col-lg-3"><div class="single_product"><p>'+name+'</p><p>'+unitPrice+'</p><a href="" class="Buy_item" onclick="add_to_cart(\''+i+'\')">Buy Now</a></div></div>';
	}

}



