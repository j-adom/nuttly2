/**
 * Seed the database
 */
var Product = require('../models/product');

 function seedProducts(req, res) {
    // create some products
    const products = [
        new Product({
            "name": "Almond Milk",
            "price": 4.95,
            "description": `
            Almond milk is an easy dairy-free milk substitute, made with almonds and water. It’s perfect for pouring over cereal, using it in smoothies, or even adding to your coffee!

            NUTRITION
            Calories: 112kcal | Carbohydrates: 4.2g | Protein: 4.2g | Fat: 9.8g | Saturated Fat: 1g | Sodium: 12mg | Potassium: 252mg | Fiber: 4g | Sugar: 1g | Calcium: 102mg | Iron: 1.3mg`,
            "imageURL": "/images/almondmilk.jpg"
        }),
        new Product({
            "name": "Hazelnut Milk",
            "price": 8.95,
            "description": `
            Delicious hazelnut milk flavored with maple, cinnamon, nutmeg & vanilla is perfect with coffee or espresso! Great for lazy weekends. Vegan.

            NUTRITION
            Calories: 140kcal | Carbohydrates: 7g | Protein: 3g | Fat: 11g | Saturated Fat: 1g | Sodium: 100mg | Potassium: 141mg | Fiber: 0g | Sugar: 5g | Calcium: 25mg | Iron: 1mg`,
            "imageURL": "/images/roasted-hazelnut-milk.jpg"
        }),
        new Product({
            "name": "Cashew Milk",
            "price": 6.95,
            "description": `
            Cashew milk is the creamiest of homemade nut milks and the most refreshing. Since the nuts blend entirely into the water, no nuts go to waste in the process, meaning that the cashew milk retains all of the fiber and nutrients present in the cashews.
            
            NUTRITION
            Calories: 219kcal | Carbohydrates: 15.4g | Protein: 6.5g | Fat: 15.6g | Saturated Fat: 2.8g | Sodium: 47.8mg | Potassium: 114mg | Fiber: 1.3g | Sugar: 6.7g | Calcium: 25mg | Iron: 1mg`,
            "imageURL": "/images/cashew-milk.jpg"
        })
    ];
  
    // use the Event model to insert/save
    for (product of products) {
      var newProduct = new Product(product);
      newProduct.save();
    }
  
    // seeded!
    res.send('Database seeded!');
  }

  export default seedProducts;