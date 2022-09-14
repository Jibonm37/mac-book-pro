function updatePrice( product, price){
    const extraProducts = document.getElementById('extra-' + product);
    extraProducts.innerText = price;

}
// total price of products -------------------
function totalPrice() {
    const memoryPrice = document.getElementById('extra-m').innerText;
    const storagePrice = document.getElementById('extra-s').innerText;
    const deliveryCharge = document.getElementById('extra-delivery').innerText;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText =  1299 + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCharge);



}
document.getElementById('memory-btn-1').addEventListener('click',function(){
    updatePrice('m', 0);
    totalPrice();
})
document.getElementById('memory-btn-2').addEventListener('click',function(){
    updatePrice('m', 180);
    totalPrice();
})
document.getElementById('storage-btn-1').addEventListener('click',function(){
    updatePrice('s', 0);
    totalPrice();
})
document.getElementById('storage-btn-2').addEventListener('click',function(){
    updatePrice('s', 100);
    totalPrice();
})
document.getElementById('storage-btn-3').addEventListener('click',function(){
    updatePrice('s', 180);
    totalPrice();
})
document.getElementById('delivery-btn-1').addEventListener('click',function(){
    updatePrice('delivery', 0);
    totalPrice();
})
document.getElementById('delivery-btn-2').addEventListener('click',function(){
    updatePrice('delivery', 20);
    totalPrice();
})