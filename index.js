class Product {
    constructor(name, price, stockQuantity) {
      this.name = name;
      this.price = price;
      this.stockQuantity = stockQuantity;
    }
   }
   class ShoppingCart {
    constructor() {
      this.products = [];
    }
    addProduct(product, quantity) {
      if (product.stockQuantity >= quantity) {
        this.products.push({ product, quantity });
        product.stockQuantity -= quantity;
        console.log(`${quantity} ${product.name}(s) added to the cart.`);
      } else {
        console.log(`Insufficient stock for ${product.name}.`);
      }
    }
    calculateTotalPrice() {
      let total = 0;
      this.products.forEach(({ product, quantity }) => {
        total += product.price * quantity;
      });
      return total;
    }
    checkout() {
      const total = this.calculateTotalPrice();
      console.log(`Total Price: $${total}`);
      console.log("Checkout successful. Thank you for shopping!");
      this.products = [];
    }
   }
   class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.shoppingCart = new ShoppingCart();
    }
   }
   // Example usage:
   const laptop = new Product("Laptop", 800, 10);
   const phone = new Product("Phone", 500, 20);
   const customer = new Customer("John Doe", "john@example.com");
   customer.shoppingCart.addProduct(laptop, 2);
   customer.shoppingCart.addProduct(phone, 1);
   console.log(`Total Price in Cart: $${customer.shoppingCart.calculateTotalPrice()}`);
   customer.shoppingCart.checkout();