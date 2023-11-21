var kobry=0;
let productNameInput= document.getElementById('ProductName');
let productPriceInput= document.getElementById('ProductPrice');
let productCategoryInput= document.getElementById('ProductCategory');
let productDescriptionInput= document.getElementById('ProductDescription');
let searchInput=document.getElementById('searchInput');
let productsContainer = [];
var addbtn =document.getElementById('addbtn');
var updatebtn =document.getElementById('updatebtn')
if (localStorage.getItem('products') !=null) {
productsContainer= JSON.parse (localStorage.getItem('products'))
displayProducts(productsContainer)
}
function addproduct() {
    if(document.getElementById('addbtn').innerHTML==('Add Product')) {
        var product = {
            productName:productNameInput.value,
            ProductPrice:productPriceInput.value,
            ProductCategory:productCategoryInput.value,
            ProductDescription:productDescriptionInput.value
        }
        productsContainer.push(product)
        localStorage.setItem("products" , JSON.stringify(productsContainer));
        displayProducts(productsContainer);
        clearform();
    }
   else {
        var updatedproduct = {
            productName:productNameInput.value,
            ProductPrice:productPriceInput.value,
            ProductCategory:productCategoryInput.value,
            ProductDescription:productDescriptionInput.value
        }
        productsContainer.splice(kobry , 1 , updatedproduct);
        localStorage.setItem("productsContainer" , JSON.stringify(productsContainer));
        displayProducts();
        clearform();
    }
    }
    function clearform (){
        productNameInput.value="";
        productPriceInput.value="";
        productCategoryInput.value="";
        productDescriptionInput.value="";
    
    }


function displayProducts(arr) {
    var products =``;
    for(var i=0;i<arr.length;i++) {
    products+= `<tr>
    <td>${arr[i].productName}</td>
    <td>${arr[i].ProductPrice}</td>
    <td>${arr[i].ProductCategory}</td>
    <td>${arr[i].ProductDescription}</td>
    <td> <button onclick="setFormForUpdate(${i})" class="btn btn-warning" >Update</button></td>
    <td> <button onclick=" deleteproduct (${i});" class="btn btn-danger " >Delete</button></td>
</tr>`
    }
    document.getElementById('TableBody').innerHTML=products;

}


function deleteproduct(productIndex)
{
    productsContainer.splice(productIndex,1);
    //productsContainer= JSON.parse (localStorage.getItem('products'));
    localStorage.setItem("products" ,JSON.stringify(productsContainer))
    displayProducts(productsContainer);
}
function searchProduct(term)
{
    var matchedProducts =[];
    for(var i=0;i<productsContainer.length;i++) {
        if(productsContainer[i].productName.toLowerCase().includes(term.toLowerCase()))
        {
matchedProducts.push(productsContainer[i]);
        }
displayProducts(matchedProducts);
    }
  function searchProduct(term)
{
    var matchedProducts =[];
    for(var i=0;i<productsContainer.length;i++) {
        if(productsContainer[i].productName.toLowerCase().includes(term.toLowerCase()))
        {
matchedProducts.push(productsContainer[i]);
        }
displayProducts(matchedProducts);
    }
    
}


  function setFormForUpdate(i) {
kobry=i;
addbtn.classList.replace('d-block' , 'd-none');
updatebtn.classList.replace( 'd-none','d-block' );
productNameInput.value=productsContainer[i].productName;
productPriceInput.value=productsContainer[i].ProductPrice;
productCategoryInput.value=productsContainer[i].ProductCategory;
productDescriptionInput.value=productsContainer[i].ProductDescription;


}



