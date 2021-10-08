let carts = document.querySelectorAll('.card');

var removeCardItemsButton = document.getElementsByClassName('next2');

console.log(removeCardItemsButton);

for ( let i=0; i< removeCardItemsButton.length; i++){


	var button = removeCardItemsButton[i]
	button.addEventListener('click', function(event)     {
		var buttonClicked = event.target
		buttonClicked.parentElement.remove()
	})
}


function updateCartTotal() {

var cartItemContainer = document.getElementsByClassName('dain')[0]
var cartRows = cartItemContainer.getElementsByClassName('addcus1')
var total = 0
for ( var i = 0; i< cartRows.length; i++)
{
	var cartRows = cartRows [i]
	var priceElement = cartRows.getElementsByClassName('num')[0]
	var quantityElement = cartRows.getElementsByClassName('')[0]

	var price = parseFloat(priceElement.innerText.replace('BDT' , ''))
	console.log(price)
	
	total = total + price
	console.log(total)
}

document.getElementsByClassName('total')[0].innerText = total


}



for ( let i=0; i< carts.length; i++)
{
	carts[i].addEventListener('click', () => {

		console.log("added click");

	})
}