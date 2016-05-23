//A program that calculates the total cost of a coffee order based on weight, price and shipping
//by Sarah Dawson

function coffee() {
	alert("Welcome to the Coffee Cost Calculator!");
	var weight = prompt("How many pounds of coffee would you like?", "");
	var price = weight * 10.50;
	var shipping = weight * 0.86;
	var overhead = 1.50;
	var totalCost = price + shipping + overhead;
	alert("Your order comes to " + ('$' + totalCost) + " including shipping and fees.");
}



// ORIGINAL Python Code
// def main():
// 	print "Welcome to the Coffee Cost Calculator!"
// 	weight = eval(raw_input("How many pounds of coffee would you like? "))
// 	price = weight * 10.50
// 	shipping = weight * 0.86
// 	overhead = 1.50
// 	total_cost = price + shipping + overhead
// 	print "Your order comes to", total_cost, "including shipping and fees."

// main()