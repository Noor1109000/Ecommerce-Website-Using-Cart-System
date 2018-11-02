var Product_name=document.getElementById('Product_name');
	// console.log(product_id);
var Product_quantity=document.getElementById('Product_quantity');
	// console.log(Product_name);
var unit_price=document.getElementById('unit_price');
	// console.log(Product_price);
// var product_img=document.getElementById('image_id');
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
		productQuantity:Product_quantity.value,
		// productImg: product_img.value
		
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
