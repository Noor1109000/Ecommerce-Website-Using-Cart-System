var toggle_btn=document.getElementById('toggle_btn');
var srt=false;
toggle_btn.addEventListener('click',function(){
	if(!srt){
		carts_data_show_toggle();
		document.getElementById('show_carts_item').style.display="block";
		srt=true;
	}else{
		document.getElementById('show_carts_item').style.display="none";
		srt=false;
	}

});

function carts_data_show_toggle(){
	var carts=JSON.parse(localStorage.getItem('carts',));
	let show_id=document.getElementById('show_carts_item');
	let cart_count=document.getElementById('cart_count');
	show_id.innerHTML='';
	for(var i=0;i<carts.length;i++){
		let name=carts[i].name
		let price=carts[i].price
		let quantity=carts[i].quantity
		let subtotal=price*quantity
		show_id.innerHTML +='<div class="card"><ul><li> name: '+name+'</li><li> Price:'+price+'</li><li>Quantity:'+quantity+'</li><li><a onclick="cart_deleteitem(\''+i+'\')"><i class="fa fa-trash"></i></a></li></ul></div>'
		
	}
	cart_count.innerHTML = i;

}


function cart_deleteitem(index){
	var carts=JSON.parse(localStorage.getItem('carts'));
	for(var i=0;i<carts.length;i++){
		if(i===parseInt(index)){
			carts.splice(i,1);
		}
	}
	localStorage.setItem('carts', JSON.stringify(carts));
	carts_data_show_toggle();

}

function singleFetchItem(){
	var productDatas = JSON.parse(localStorage.getItem('productDatas'));
	
	total_product_show.innerHTML='';
	for(var i=0;i<productDatas.length;i++){
		let name=productDatas[i].productName;
		let unitPrice=productDatas[i].productPrice;
		let quantity=productDatas[i].productQuantity;
		total_product_show.innerHTML +=
		'<div class="col-sm-3 text-center single_product"><div class="card  rounded-0"><div class="content_p"><p>'+name+'</p><p>'+unitPrice+'</p><p>'+quantity+'</p></div><button type="submit"  class="Buy_item btn btn-primary rounded-0";" onclick="add_to_cart(\''+i+'\')"><i class="confirm_icon"></i>Add to Cart</button></div></div>';
	}

}

function add_to_cart(index){

	var successBtn = document.createElement("p")
	successBtn.className = "btn btn-success successBtn"
	successBtn.innerHTML = "Successful"
	var card = document.querySelector(".successfulMessage")

	var productDatas = JSON.parse(localStorage.getItem('productDatas'));
	let obj = {
		name:productDatas[index].productName,
		price:productDatas[index].productPrice,
		quantity:1,
	}

	if(localStorage.getItem('carts')===null){
		var carts = [];
		carts.push(obj);
		localStorage.setItem('carts', JSON.stringify(carts));
	}
	else{
		var carts = JSON.parse(localStorage.getItem('carts'));
		carts.push(obj);
		localStorage.setItem('carts', JSON.stringify(carts));
	}

	var carts1=JSON.parse(localStorage.getItem('carts'));

	
	let successMessg = card.appendChild(successBtn);	
	setTimeout(function(){
		successMessg.style.display = "none"
	}, 2000)
		

	let cart_count=document.getElementById('cart_count');
	cart_count.innerHTML='';
	
	var i=0;
	for(var j=0;j<carts1.length;j++){
		++i;
		
	}
	cart_count.innerHTML=i;

	
}
