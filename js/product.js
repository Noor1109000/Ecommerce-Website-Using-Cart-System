
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

		showContent.innerHTML +='<tr><td><a  onclick="deleteproduct(\''+i+'\')"><i class="fa fa-trash"></i></a></td><td></td><td>'+name+"</td><td>"+unitPrice+"</td><td>"+quantity+"</td><td>"+subtotal+"</td></tr>";
	}

	total_price.innerHTML=totalprice;

		
}