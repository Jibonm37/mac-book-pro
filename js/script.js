function setProductPrice (product, price){
    let productPrice = document.getElementById('extra-'+product );
    productPrice.innerText = price;
    
}

function setTotalPrice(){
    const totalField = document.getElementById('total-price')
    const totalField2 = document.getElementById('total-price2')
    const memoryCost = document.getElementById('extra-m').innerText;
    const StorageCost = document.getElementById('extra-s').innerText;
    const deliveryCost = document.getElementById('extra-delivery').innerText;
    const totalCost = 1299 + parseInt(memoryCost) + parseInt(StorageCost) + parseInt(deliveryCost);
    totalField.innerText = totalCost;
    totalField2.innerText = totalCost;
}






document.getElementById('memory-btn-1').addEventListener('click',function(){

    setProductPrice('m',0)
    setTotalPrice()
})
document.getElementById('memory-btn-2').addEventListener('click',function(){

    setProductPrice('m',180)
    setTotalPrice()
})
document.getElementById('storage-btn-1').addEventListener('click',function(){

    setProductPrice('s',0);
    setTotalPrice()
})
document.getElementById('storage-btn-2').addEventListener('click',function(){

    setProductPrice('s',100);
    setTotalPrice()
})
document.getElementById('storage-btn-3').addEventListener('click',function(){

    setProductPrice('s',180);
    setTotalPrice()
})
document.getElementById('delivery-btn-1').addEventListener('click',function(){

    setProductPrice('delivery',0);
    setTotalPrice()
})
document.getElementById('delivery-btn-2').addEventListener('click',function(){

    setProductPrice('delivery',20);
    setTotalPrice()
})
// set cuppon code------
document.getElementById('apply-btn').addEventListener('click',function(){
    
    const totalField = document.getElementById('total-price');
    const totalField2 = document.getElementById('total-price2');
    const totalPrice =parseInt(totalField.innerText)
    
    
        const inputText = document.getElementById('promo-input');
        if( inputText.value == 'stevekaku'){

            const discount = totalPrice * .20 ;
            const netPrice =totalPrice - discount ;
            totalField2.innerText = netPrice;
            totalField.innerText = netPrice;
            inputText.value =''
        }
        
})
