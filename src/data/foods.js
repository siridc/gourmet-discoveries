export const categories = [
  { id: 'main-dish', name: 'Main Dish', subtitle: 'Hearty Filipino classics', image: '/Pictures/fCategory/main dish.jpeg' },
  { id: 'dessert', name: 'Dessert', subtitle: 'Sweet Filipino delights', image: '/Pictures/fCategory/dessert.jpg' },
  { id: 'street-food', name: 'Street Food', subtitle: 'Iconic street-side bites', image: '/Pictures/fCategory/streetfood.jpg' },
  { id: 'beverage', name: 'Beverage', subtitle: 'Refreshing Filipino drinks', image: '/Pictures/fCategory/beverage.jpg' },
];

export const foods = [
  // ============ MAIN DISH ============
  {
    id: 'adobo', name: 'Adobo', category: 'main-dish',
    moniker: 'The Quintessential Filipino Comfort Food',
    image: '/Pictures/main dish/adobo.jpeg',
    history: [
      'Adobo is a dish of protein braised in vinegar, and spiced with garlic and black peppercorns. The term "adobo" itself comes from the Spanish word "adobar," which means to marinate or pickle. In pre-colonial times when early Filipinos used vinegar and salt to preserve. Adobo has evolved significantly over the centuries, influenced by various cultures that interacted with the Philippines.',
      'The Chinese traders introduced soy sauce, which became a common ingredient in many adobo recipes, replacing or complementing the use of salt. The Spanish influence is also evident in the use of ingredients like garlic and bay leaves.'
    ],
    ingredients: ['Pork belly', 'Garlic', 'Dried bay leaves', 'Vinegar', 'Soy Sauce', 'Peppercorn', 'Onion', 'Water', 'Cooking Oil', 'Sugar', 'Salt'],
    youtubeId: 'OTGASYe7hQk',
    steps: [
      { title: 'Step 1', description: 'Heat vegetable oil in a large skillet over medium-high heat. Cook pork pieces until golden brown, 2 to 3 minutes per side. Transfer pork to a plate and set aside.' },
      { title: 'Step 2', description: 'Add onion and garlic to the skillet; cook until softened and brown, about 3 to 5 minutes.' },
      { title: 'Step 3', description: 'Pour in soy sauce and vinegar and season with garlic powder, black pepper, and bay leaf.' },
      { title: 'Step 4', description: 'Return chicken to pan, increase heat to high, and bring to a boil. Reduce heat to medium-low, cover, and simmer until chicken is tender and cooked through, 35 to 40 minutes.' }
    ]
  },
  {
    id: 'sinigang', name: 'Sinigang', category: 'main-dish',
    moniker: 'A Tangy Tamarind Sour Soup',
    image: '/Pictures/main dish/sinigang.png',
    history: [
      'Sinigang, a popular dish in the Philippines, has its roots in pre-colonial times when souring agents like tamarind, kamias, and guava were used in cooking. Originating from the Tagalog word "singang," meaning "stew," sinigang has evolved into a beloved dish with regional variations. It is an integral part of Filipino culture, often served during the rainy season to warm the body and soul.',
      'It is also served during special occasions like birthdays, weddings, and other celebrations, and is a hearty and comforting meal for guests.'
    ],
    ingredients: ['Pork', 'Tomatoes', 'Onion', 'Fish sauce', 'Gabi (taro root)', 'Radish', 'Long beans (sitaw)', 'Eggplant', 'Okra', 'Water spinach (kangkong)', 'Tamarind', 'Finger chili peppers (siling haba)'],
    youtubeId: '4OAWR4810eE',
    steps: [
      { title: 'Step 1', description: 'Begin by washing pork spare ribs in cold running water to remove any visible impurities. Then, place pork ribs submerge in a medium pot with a liter of water. Bring to a boil without covering the pot and allow the scum to float to the surface. Meticulously remove the scums from the surface of the water using a slotted spoon or a spatula.' },
      { title: 'Step 2', description: 'After the broth clears up, turn your heat to medium setting, then toss in your onions and tomatoes to add flavor to the broth. Cover your pot and let it simmer to fully cook your meat.' },
      { title: 'Step 3', description: 'Add your vegetables. Start by adding the sitaw, kangkong stalks and talong into the pot and cook until these turn dark green. This should take roughly around 2-3 minutes.' },
      { title: 'Step 4', description: 'Add in your siling sigang, kangkong leaves and tamarind. Stir and let it simmer. It should be done in about 2-3 minutes.' }
    ]
  },
  {
    id: 'kare-kare', name: 'Kare-Kare', category: 'main-dish',
    moniker: 'A Rich Peanut-Based Oxtail Stew',
    image: '/Pictures/main dish/kare-kare.jpeg',
    history: [
      'Kare-Kare, a Filipino dish, has a rich history dating back hundreds of years. Two stories suggest it originated from the Kapampangans and the nearby Tagalog people. The Kapampangans believe Kare-Kare originated from a dish called Kari, developed by the Moro people of Southern Mindanao.',
      'Kari, which resembles Thai fish curry, was later changed by the Kapampangans to create Kare-Kare. The Tagalog people claim they invented the newer dish, learning about Kari from the Kapampangans who sold it by the roadside. Due to its complexity, the Tagalog tried to create imitations of Kari, which the Kapampangans dubbed as Kare-Kare.'
    ],
    ingredients: ['Oxtail', 'Beef Tripes', 'Eggplant', 'Bok choy', 'Onion', 'Garlic', 'Sitaw beans', 'Peanut Butter', 'Salt and Pepper to taste', 'Bay leaves', "Mama Sita's Kare-Kare Mix or Ground Annatto powder"],
    youtubeId: 'IfNvZ08aKEo',
    steps: [
      { title: 'Step 1', description: 'In a large pot, bring the water to a boil.' },
      { title: 'Step 2', description: 'Put in the oxtail followed by the onions and simmer for 2.5 to 3 hrs or until tender (35 minutes if using a pressure cooker).' },
      { title: 'Step 3', description: 'Once the meat is tender, add the ground peanuts, peanut butter, and coloring (water from the annatto seed mixture) and simmer for 5 to 7 minutes.' },
      { title: 'Step 4', description: 'Add the toasted ground rice and simmer for 5 minutes.' },
      { title: 'Step 5', description: 'On a separate pan, saute the garlic then add the banana flower, eggplant, and string beans and cook for 5 minutes.' },
      { title: 'Step 6', description: 'Transfer the cooked vegetables to the large pot.' },
      { title: 'Step 7', description: 'Serve hot with shrimp paste.' }
    ]
  },
  {
    id: 'tinola', name: 'Tinola', category: 'main-dish',
    moniker: 'A Ginger-Infused Chicken Broth',
    image: '/Pictures/main dish/tinola.png',
    history: [
      "Chicken tinola is a popular Filipino soup dish, originating from cooking chicken in ginger broth. Its origins are still unknown, but it is suggested that it has existed before Spanish rule. Antonio Pigafetta, a Venetian explorer who joined Ferdinand Magellan's 1522 expedition, recorded the food served to Magellan's explorers in his diaries.",
      "Early records of tinola as a dish are found in Dr. José Rizal's 1887 novel Noli Me Tángere, where the neck of the chicken is served to Padre Damaso, while the good parts are given to Crisostomo Ibarra, establishing the individual characteristics of the characters in the story."
    ],
    ingredients: ['Chicken', 'Green Papaya', 'Malunggay Leaves', 'Hot pepper leaves', 'Garlic', 'Onions', 'Ginger', 'Maggi Magic Chicken Cubes', 'Rice', 'Water', 'Fish sauce', 'Ground black pepper (optional)', 'Cooking oil'],
    youtubeId: 'ZnySXYxTToE',
    steps: [
      { title: 'Step 1', description: 'Heat cooking oil in a cooking pot. Sauté garlic, onion, and ginger until the onion softens.' },
      { title: 'Step 2', description: 'Add the chicken. Continue sautéing for 2 minutes or until it turns light brown in color.' },
      { title: 'Step 3', description: 'Pour 2 tablespoons of fish sauce. Stir.' },
      { title: 'Step 4', description: 'Add the rice wash into the cooking pot. Let it boil. Simmer for 10 minutes.' },
      { title: 'Step 5', description: 'Add water as needed. Let it boil.' },
      { title: 'Step 6', description: 'Put the green papaya wedges into the pot. Continue to simmer for 15 to 20 minutes.' },
      { title: 'Step 7', description: 'Add Maggi Magic Chicken Cubes. Stir. Season with ground black pepper. Turn off the heat and add the hot pepper leaves and malunggay leaves. Cover for 2 minutes.' },
      { title: 'Step 8', description: 'Transfer to a serving bowl. Serve. Share and enjoy!' }
    ]
  },
  {
    id: 'lechon-kawali', name: 'Lechon Kawali', category: 'main-dish',
    moniker: 'Crispy Deep-Fried Pork Belly',
    image: '/Pictures/main dish/lechon-kawali.png',
    history: [
      'Lechon Kawali traces its roots to the Philippines, where it has been a culinary tradition for generations. The dish is believed to have evolved from the Spanish technique of cooking suckling pig, known as lechon, which was introduced to the Philippines during the colonial era.',
      'Over time, Filipino cooks adapted the recipe to use more readily available ingredients, such as pork belly, resulting in the creation of Lechon Kawali.'
    ],
    ingredients: ['Pork belly', 'Salt', 'Whole pepper corn', 'Dried bay leaves', 'Cooking oil', 'Water'],
    youtubeId: 'ertCoFat78c',
    steps: [
      { title: 'Step 1', description: 'Pour water on cooking pot. Boil.' },
      { title: 'Step 2', description: 'Add the pork belly and 1 tablespoon of salt. Put some pepper and bay leaves. Boil for 30 minutes or until meat gets tender.' },
      { title: 'Step 3', description: 'Remove the meat from the pot and let it cool down for a few minutes.' },
      { title: 'Step 4', description: 'Spread 1 tablespoon of salt on the pork belly. Make sure to distribute it evenly on all sections.' },
      { title: 'Step 5', description: 'Start to deep fry the boiled meat. Heat oil on a cooking pot.' },
      { title: 'Step 6', description: 'Put each piece of boiled pork belly into the hot oil with extra caution. Fry until crispy. Turn the meat over to completely fry the opposite side until crispy.' },
      { title: 'Step 7', description: 'Remove the meat from the cooking pot. Arrange on a wire rack to cool down. Slice according to desired portions.' },
      { title: 'Step 8', description: 'Serve with lechon sauce. Share and Enjoy!' }
    ]
  },

  // ============ DESSERT ============
  {
    id: 'bibingka', name: 'Bibingka', category: 'dessert',
    moniker: 'A Sweet Coconut Rice Cake',
    image: '/Pictures/dessert/bibingka.jpg',
    history: [
      'Bibingka is a traditional Filipino rice cake, part of the "kakanin" (rice-based desserts). Its taste resembles rice pudding but is sweeter. While its origins are debated, some believe it came from Indonesia or India, where a similar dessert, "bebinca" or "bibik," exists.',
      'The Portuguese version of bebinca, brought from Goa, differs from bibingka, which uses glutinous rice and coconut milk. Bibingka was historically served during Christmas after early morning church services. Another theory suggests that bibingka came from China, with the word "bi" meaning uncooked grain.'
    ],
    ingredients: ['Bibingka mix', 'Coconut', 'Milk', 'Eggs', 'Salted eggs', 'Cheese', 'Banana Leaves'],
    youtubeId: 'JxQ_CD67XTU',
    steps: [
      { title: 'Step 1', description: 'Prep Banana Leaves: Soften leaves by passing over flame or dipping in hot water. Line baking dish or molds.' },
      { title: 'Step 2', description: 'Mix Dry Ingredients: In a bowl, combine rice flour, baking powder, sugar, and salt.' },
      { title: 'Step 3', description: 'Mix Wet Ingredients: In another bowl, whisk coconut milk, water, and eggs.' },
      { title: 'Step 4', description: 'Combine Mixtures: Gradually mix wet ingredients into dry until smooth.' },
      { title: 'Step 5', description: 'Preheat Oven: Set to 350°F (175°C).' },
      { title: 'Step 6', description: 'Pour Batter: Fill lined dish/molds with batter (3/4 full).' },
      { title: 'Step 7', description: 'Add Toppings: Place salted egg slices and grated coconut on top.' },
      { title: 'Step 8', description: 'Bake: Bake for 30-40 minutes until toothpick comes out clean and serve!' }
    ]
  },
  {
    id: 'puto-bumbong', name: 'Puto Bumbong', category: 'dessert',
    moniker: 'A Purple Steamed Rice Delicacy',
    image: '/Pictures/dessert/putobumbong.jpg',
    history: [
      'The origins of puto bumbong date back to the early Spanish colonial period, with some believing it was brought to the Philippines from Mexico by the expedition of Miguel Lopez de Legazpi. It is made from a sticky or glutinous rice called "pirurutong," which is naturally violet or purple. The rice is soaked in saltwater overnight, dried, and placed into bamboo tubes called "bumbong." The tubes are then steamed until steam escapes from the holes. Once cooked, the rice is topped with butter, margarine, grated coconut, and sugar, and wrapped in banana leaves for serving.'
    ],
    ingredients: ['White glutinous rice', 'Purple glutinous rice (pirurutong)', 'Brown sugar (muscovado)', 'Grated fresh coconut', 'Butter or margarine', 'Water'],
    youtubeId: '84VY3BPzP-4',
    steps: [
      { title: 'Step 1', description: 'Soak Rice: Soak glutinous rice overnight, then drain.' },
      { title: 'Step 2', description: 'Prepare Steamer: Set up a steamer and bring water to a boil.' },
      { title: 'Step 3', description: 'Mix Ingredients: In a bowl, combine glutinous rice flour, sugar, salt, coconut milk, water, and ube (or flavoring). Mix until smooth.' },
      { title: 'Step 4', description: 'Fill Molds: Pour the mixture into bamboo or silicone molds, filling them about 3/4 full.' },
      { title: 'Step 5', description: 'Steam: Place the molds in the steamer and steam for about 20-25 minutes until set.' },
      { title: 'Step 6', description: 'Cool & Serve: Allow to cool slightly. Serve topped with grated coconut and a dab of butter if desired.' }
    ]
  },
  {
    id: 'halo-halo', name: 'Halo-Halo', category: 'dessert',
    moniker: 'The Ultimate Mixed Shaved Ice',
    image: '/Pictures/dessert/halo-halo.jpg',
    history: [
      'The origin of halo-halo is linked to pre-war Japanese Filipinos and the Japanese dessert kakigōri. Early versions, like "monggo con hielo," featured mung beans cooked in syrup, served over crushed ice with milk and sugar. Over time, more local ingredients were added, creating the modern halo-halo. Unlike its Japanese counterpart, halo-halo places ingredients under the ice rather than on top.',
      'Some attribute its creation to Japanese migrants in 1920s or 1930s Quiapo, Manila, near the Insular Ice Plant. The name "halo-halo" means "mixed" in Tagalog. There\'s no fixed recipe, and ingredients vary by region based on available fruits and root crops.'
    ],
    ingredients: ['Crushed or shaved ice', 'Milk (fresh or evaporated)', 'Sugar', 'Sweetened saba or plantain bananas', 'Sweetened sweet potatoes', 'Fresh or sweetened langka (jackfruit)', 'Sweetened garbanzos or beans', 'Sweetened red munggo', 'Nata de coco (coconut gel)', 'Sago or tapioca pearls', 'Pinipig', 'Leche Flan', 'Ube jam or ube ice cream'],
    youtubeId: '-2qZJ95Cv-s',
    steps: [
      { title: 'Step 1', description: 'Prepare Ingredients: Gather all sweetened fruits, beans, and other toppings.' },
      { title: 'Step 2', description: 'Layer Ingredients: In a tall glass or bowl, layer the sweetened beans, jackfruit, bananas, purple yam, and coconut strips.' },
      { title: 'Step 3', description: 'Add Shaved Ice: Top the layered ingredients with shaved ice, packing it slightly.' },
      { title: 'Step 4', description: 'Pour Milk: Drizzle evaporated milk over the shaved ice.' },
      { title: 'Step 5', description: 'Add Leche Flan: Place a slice of leche flan on top (if using).' },
      { title: 'Step 6', description: 'Top with Ice Cream: Add a scoop of ice cream on top.' },
      { title: 'Step 7', description: 'Garnish: Optionally, sprinkle with a pinch of sugar or additional toppings.' },
      { title: 'Step 8', description: 'Serve: Mix well before eating to combine flavors. Enjoy!' }
    ]
  },
  {
    id: 'ube-halaya', name: 'Ube Halaya', category: 'dessert',
    moniker: 'A Velvety Purple Yam Jam',
    image: '/Pictures/dessert/ubehalaya.jpg',
    history: [
      'Ube halaya, also known as "ube jam" or "purple yam jam," has been a beloved dessert in the Philippines for generations. Its roots can be traced back to the early 20th century when Filipinos began experimenting with different ways to prepare ube. The dish typically consists of grated purple yam, coconut milk, condensed milk, and sugar, all simmered together until it forms a rich, sweet, and vibrant purple paste.'
    ],
    ingredients: ['Ube (purple yam)', 'Ube Extract', 'Coconut Milk', 'Coconut Cream', 'Condensed milk', 'Cheese', 'Evaporated Milk'],
    youtubeId: 'JPiq_btwPII',
    steps: [
      { title: 'Step 1', description: 'Combine Ingredients: In a pot, mix grated ube, coconut milk, and condensed milk.' },
      { title: 'Step 2', description: 'Cook Mixture: Heat over medium, stirring frequently until it thickens.' },
      { title: 'Step 3', description: 'Add Sweetener: Stir in sugar and butter once thick.' },
      { title: 'Step 4', description: 'Thicken Further: Cook, stirring constantly, until the mixture pulls away from the pot sides.' },
      { title: 'Step 5', description: 'Transfer to Mold: Pour into a greased mold or container; smooth the top.' },
      { title: 'Step 6', description: 'Cool: Allow to cool to room temperature, then refrigerate until firm.' },
      { title: 'Step 7', description: 'Serve: Slice and enjoy!' }
    ]
  },
  {
    id: 'taho', name: 'Taho', category: 'dessert',
    moniker: 'A Silky Sweet Soybean Pudding',
    image: '/Pictures/dessert/taho.jpg',
    history: [
      'Taho, a Filipino version of soybean pudding, has been around for generations. Its origins trace back to the Chinese "douhua," accidentally discovered during the Han Dynasty (206-220 A.D.). Brought to the Philippines through long-standing cultural ties with China, locals replaced almond syrup with a sweeter sugar syrup.',
      'Taho is also popular in other Asian countries, known as "tahwa" in Indonesia and "taufufa" in Malaysia. In the Philippines, it remains a beloved street food, sold by vendors across cities and villages.'
    ],
    ingredients: ['Silken tofu', 'Brown Sugar', 'Water', 'Vanilla', 'Tapioca pearls'],
    youtubeId: '5uBNeh0y8Ww',
    steps: [
      { title: 'Step 1', description: 'Make Arnibal: In a small pot, combine brown sugar and water. Cook over medium heat until sugar dissolves and syrup thickens. Stir in vanilla if using.' },
      { title: 'Step 2', description: 'Cook Mixture: Heat over medium, stirring frequently until it thickens.' },
      { title: 'Step 3', description: 'Cook Sago Pearls: If using, cook sago pearls according to package instructions until translucent; drain and rinse.' },
      { title: 'Step 4', description: 'Assemble: In a cup or bowl, place warm tofu, top with arnibal, and add sago pearls if desired.' },
      { title: 'Step 5', description: 'Serve: Enjoy warm, using a spoon or straw!' }
    ]
  },

  // ============ STREET FOOD ============
  {
    id: 'balut', name: 'Balut', category: 'street-food',
    moniker: 'A Fertilized Duck Egg Delicacy',
    image: '/Pictures/streetfood/balut.PNG',
    history: [
      'Balut is a traditional food in the Philippines. It was introduced to the Philippines by the Chinese in 1565 or around 1885. Balut has a long and storied history, dating back to pre-colonial times in the Philippines.',
      'Its origins can be traced to Chinese traders who introduced the practice of hatching duck eggs. Over the centuries, balut evolved, incorporating Filipino flavors and culinary techniques.'
    ],
    ingredients: ['Duck Egg', 'Salt', 'Water'],
    youtubeId: 'VfLX72NBV-I',
    steps: [
      { title: 'Step 1', description: 'Clean the Baluts.' },
      { title: 'Step 2', description: 'Boil the Water.' },
      { title: 'Step 3', description: 'Add the Baluts (Slowly).' },
      { title: 'Step 4', description: 'Leave the Pot Uncovered.' },
      { title: 'Step 5', description: 'Set to Low Heat.' },
      { title: 'Step 6', description: 'Boil the Balut for 45 Minutes.' },
      { title: 'Step 7', description: 'After 45 Minutes, Strain the Baluts.' },
      { title: 'Step 8', description: 'Let it Cooldown for 30 Minutes.' }
    ]
  },
  {
    id: 'isaw', name: 'Isaw', category: 'street-food',
    moniker: 'Grilled Intestine Street Skewers',
    image: '/Pictures/streetfood/isaw.PNG',
    history: [
      'Originally considered a humble dish, Isaw originated in Manila where food vendors utilized offal cuts, which were often discarded, to use every part of the animal. In some parts of the Philippines, beef intestines may be used instead of chicken or pork.',
      'The term "isaw" comes from the word "sawsawan" or the sauce that you dip the intestines in.'
    ],
    ingredients: ['Pork or Chicken Intestines', 'Salt', 'Cooking Oil', 'Garlic', 'Soy Sauce', 'Black pepper and Bay leaves', 'Sugar', 'Vinegar', 'Water', 'Food Color'],
    youtubeId: 'OyT139ouXjI',
    steps: [
      { title: 'Step 1', description: 'Wash the Chicken/Pork Intestines. Put the salt in Intestines and mash up with your hands.' },
      { title: 'Step 2', description: 'Squeeze out the remaining liquid. Rinse it well.' },
      { title: 'Step 3', description: 'Set to Low Heat. Boil for 45 Minutes.' },
      { title: 'Step 4', description: 'After 45 Minutes, strain. Let it cool down for 30 Minutes.' },
      { title: 'Step 5', description: 'Wash the Chicken/Pork Intestines again.' },
      { title: 'Step 6', description: 'Add the Vinegar, 1 cup of water, and orange food coloring. Simmer for 5 minutes.' },
      { title: 'Step 7', description: 'Add the Intestines.' },
      { title: 'Step 8', description: 'Turn it upside down, so it doesn\'t overcook.' }
    ]
  },
  {
    id: 'kwek-kwek', name: 'Kwek-Kwek', category: 'street-food',
    moniker: 'Deep-Fried Orange Battered Eggs',
    image: '/Pictures/streetfood/kwek-kwek.PNG',
    history: [
      "The origin of Kwek-Kwek is said to trace back to a balut vendor in Cubao. It's said she accidentally dropped her balut on the ground and instead of throwing it away, she peeled off the shells and deep-fried them in batter to avoid wasting them.",
      'You can find Kwek-Kwek vendors in almost every corner of the Philippines. You can choose to dip your Kwek-Kwek in spicy vinegar or sweet soy dipping sauce.'
    ],
    ingredients: ['Chicken eggs (boiled) or quail eggs (boiled)', 'Water', 'Flour', 'Salt', 'Fine black pepper', 'Orange food color or annatto powder', 'Flour for dredging', 'Cooking oil', 'Sugar', 'Cornstarch', 'Soy sauce', 'Red chilies (chopped)', 'Onion (minced)', 'Minced garlic'],
    youtubeId: 'V0PY0Wc-FAY',
    steps: [
      { title: 'Step 1', description: 'Add All Purpose Flour.' },
      { title: 'Step 2', description: 'Add the Baking Powder.' },
      { title: 'Step 3', description: 'Add Fish Sauce.' },
      { title: 'Step 4', description: 'Add Water.' },
      { title: 'Step 5', description: 'Mix Thoroughly.' },
      { title: 'Step 6', description: 'Use a Spoon and a Stick. Use the Stick to get a Quail egg.' },
      { title: 'Step 7', description: 'Deep fry until golden and crispy. Serve with vinegar dipping sauce.' }
    ]
  },
  {
    id: 'betamax', name: 'Betamax', category: 'street-food',
    moniker: 'Grilled Coagulated Blood Cubes',
    image: '/Pictures/streetfood/betamax.PNG',
    history: [
      'Not for the faint of heart, Betamax is grilled coagulated pork or chicken blood. Brushed with sauce while grilled, Betamax are basically blood cubes that have been skewered. Due to their shape and dark color, people started calling them Betamax because they were reminiscent of the black tapes.'
    ],
    ingredients: ['Coagulated chicken blood', 'Knorr Chicken cube', 'Soy sauce', 'White Vinegar', 'Water'],
    youtubeId: 'NznMhftnFb8',
    steps: [
      { title: 'Step 1', description: 'Mix the mirin, rice vinegar, soy sauce and chilli flakes.' },
      { title: 'Step 2', description: 'Cut the thickened blood mixture into cubes and coat them generously with the marinade.' },
      { title: 'Step 3', description: 'Leave the mixture in the fridge a couple of hours or preferably overnight.' },
      { title: 'Step 4', description: 'Grill the blood over a charcoal stove, BBQ, grill pan, or an oven with the grill setting until nicely roasted. Baste with more sauce as it cooks.' },
      { title: 'Step 5', description: 'Serve with Sinamak (spiced vinegar) and/or roasted peanuts and fresh herbs.' }
    ]
  },
  {
    id: 'ice-scramble', name: 'Ice Scramble', category: 'street-food',
    moniker: 'A Colorful Shaved Ice Street Treat',
    image: '/Pictures/streetfood/scramble.PNG',
    history: [
      'Traditionally, street vendors already prepare all the ingredients at home then mix them on the spot. The exact origin of Ice Scramble is hard to pinpoint, with some believing it originated in Iloilo.',
      "The big Styrofoam boxes eventually made their way to Manila schoolyards in the '70s and '80s as a popular pampalamig of children."
    ],
    ingredients: ['Evaporated milk', 'Sugar', 'Banana flavoring', 'Red liquid coloring', 'Crushed ice', 'Mik-Mik', 'Chocolate syrup', 'Mini marshmallows', 'Candy sprinkles', 'Stick-o'],
    youtubeId: 'gwwzFXyPAl8',
    steps: [
      { title: 'Step 1', description: 'In a bowl combine shaved ice, powdered milk and sugar. Mix. Add vanilla and red food color. Mix well.' },
      { title: 'Step 2', description: 'Fill clear disposable cups with the scramble mixture. Top with powdered milk, candy sprinkles, rice crispies and mini marshmallows. Then drizzle with condensed milk and chocolate syrup. Serve with straw or plastic spoon.' }
    ]
  },

  // ============ BEVERAGE ============
  {
    id: 'buko-juice', name: 'Buko Juice', category: 'beverage',
    moniker: 'Fresh Young Coconut Water',
    image: '/Pictures/beverage/buko.png',
    history: [
      'Buko juice, also known as coconut water, is a refreshing and popular drink commonly sold on the streets or in restaurants in the Philippines. The coconut meat can be used for desserts such as buko salad, buko pandan. In the Philippine provinces, some use both the coconut meat and coconut water combined with milk and crackers. It is a very healthy drink during the summertime.'
    ],
    ingredients: ['Young Coconut', 'Coconut Meat', 'Milk (optional)', 'Sugar', 'Ice cubes'],
    youtubeId: 'JyAZ81c4uYo',
    steps: [
      { title: 'Step 1', description: 'Peel the coconut fruit at the top of its shape to remove the juice first.' },
      { title: 'Step 2', description: 'Pour all of the coconut juice in a big jar that can contain at least 3 liters.' },
      { title: 'Step 3', description: 'Chop the fruit into two and then scrape the flesh inside using a stainless coconut grater scraper.' },
      { title: 'Step 4', description: 'Scoop the scraped flesh using a spoon and mix it inside the jar.' },
      { title: 'Step 5', description: "You can add white sugar to the juice if it doesn't taste sweet enough. Just dissolve the white sugar with hot water then add the milk." }
    ]
  },
  {
    id: 'sagot-gulaman', name: "Sago't Gulaman", category: 'beverage',
    moniker: 'A Sweet Tapioca and Jelly Cooler',
    image: '/Pictures/beverage/sagotGulaman.png',
    history: [
      "Sago't Gulaman, Palamig ng Bayan — it is one of the most well known drinks in the Philippines. Probably, it might even be the most recreated drink in the country, as a lot of versions can be found everywhere.",
      "All Pinoys are very fond of the cold, sweet taste of sago't gulaman and it is very much part of the Filipino Culture. No one really knows when this drink was invented, but the sure thing is when ice became available, people started appreciating it."
    ],
    ingredients: ['Cooked Sago', 'Gulaman (cut into cubes)', 'Arnibal syrup', 'Banana essence or vanilla extract', 'Crushed Ice', 'Water'],
    youtubeId: 'OAAV_Bs1QaY',
    steps: [
      { title: 'Step 1', description: 'Boil water, add sago, and cook for 10 minutes, stirring occasionally. Drain and rinse. Repeat the process with fresh water in 5-minute intervals until sago is fully translucent and chewy.' },
      { title: 'Step 2', description: 'Soak shredded agar-agar in 1½ cups water for 30-40 minutes. Boil until dissolved, then add sugar and cook until fully melted. Pour into a dish, cool until set, and cut into cubes.' },
      { title: 'Step 3', description: 'Combine panutsa or brown sugar with water, cook until dissolved. Strain and cook further until slightly thickened, then cool.' },
      { title: 'Step 4', description: 'In a pitcher, mix 4 cups of cold water, syrup, and a few drops of banana or vanilla extract. Add ice, sago, and gulaman cubes to glasses, pour in the syrup mix, and enjoy!' }
    ]
  },
  {
    id: 'kapeng-barako', name: 'Kapeng Barako', category: 'beverage',
    moniker: 'A Bold Batangas Liberica Coffee',
    image: '/Pictures/beverage/kapengBarako.png',
    history: [
      "First things first, what is Kapeng Barako? Barako is a Tagalog word that means 'manliness' or 'strong man,' and Kape means coffee. Because of its strong aroma and taste, it got the name Kapeng Barako. Kapeng Barako became a common name for all coffee from Batangas. It is an exotic and rare coffee fully grown in Lipa and other high places in Batangas and is known for its strong taste. Barako trees are some of the largest commercially cultivated coffee trees, reaching up to 66 ft (20 m) high."
    ],
    ingredients: ['Young Coconut', 'Kapeng Barako beans', 'Sugar', 'Hot Water'],
    youtubeId: '6qyHv9_UXcs',
    steps: [
      { title: 'Step 1', description: 'Boil Water.' },
      { title: 'Step 2', description: 'Place a tablespoon of ground Kapeng Barako in a French press or mug.' },
      { title: 'Step 3', description: 'Pour the hot water over the coffee grounds.' },
      { title: 'Step 4', description: 'Let it steep for 4-5 minutes (press if using a French press).' },
      { title: 'Step 5', description: 'Add sugar or milk if desired.' }
    ]
  },
  {
    id: 'buko-pandan', name: 'Buko Pandan', category: 'beverage',
    moniker: 'A Creamy Coconut Pandan Dessert',
    image: '/Pictures/beverage/bukoPandan.png',
    history: [
      "Buko Pandan is a creamy, tropical dessert made with strips of coconut and pandan-flavored jelly. It's refreshing and perfect for get-togethers or simply as an afternoon snack. It is said to have originated from the eastern Visayas region on the island of Bohol. Influenced by American occupation, locals tailored the idea of an American fruit salad to suit Filipino tastes."
    ],
    ingredients: ['Coconut Milk', 'Coconut Juice', 'Condensed Milk', 'Young coconut meat (Shredded)', 'Gulaman (Green)', 'Vanilla extract', 'Ice cubes', 'Agar agar bars', 'Young coconut juice', 'Sugar', 'Pandan extract'],
    youtubeId: 'yU-UhlrKBbo',
    steps: [
      { title: 'Step 1', description: 'Peel the coconut fruit at the top of its shape to remove the juice first.' },
      { title: 'Step 2', description: 'Pour all of the coconut juice in a big jar that can contain at least 3 liters.' },
      { title: 'Step 3', description: 'Chop the fruit into two and then scrape the flesh inside using a stainless coconut grater scraper.' },
      { title: 'Step 4', description: 'Scoop the scraped flesh using a spoon and mix it inside the jar.' },
      { title: 'Step 5', description: "You can add white sugar to the juice if it doesn't taste sweet enough. Just dissolve the white sugar with hot water then add the milk." }
    ]
  },
  {
    id: 'lambanog', name: 'Lambanog Cocktail', category: 'beverage',
    moniker: 'A Distilled Coconut Palm Spirit',
    image: '/Pictures/beverage/lambanog.png',
    history: [
      'Lambanóg is a traditional Filipino distilled palm liquor. It is an alcoholic liquor made from the distillation of naturally fermented sap (tubâ) from palm trees such as sugar palm, coconut, or nipa. Lambanog is well-known for having a strong alcohol concentration and can be used as a base liquor for various flavored spirits and cocktail creations.'
    ],
    ingredients: ['Lambanog', 'Soda (optional)', 'Lime, calamansi or Lemon (optional)', 'Sugar Syrup', 'Ginger tea (optional)'],
    youtubeId: '-D7jgkuZJw8',
    steps: [
      { title: 'Step 1', description: 'In a shaker, combine lambanog, pineapple juice, coconut water, and lime juice. Add ice.' },
      { title: 'Step 2', description: 'Shake well until chilled.' },
      { title: 'Step 3', description: 'Strain into a glass filled with fresh ice.' },
      { title: 'Step 4', description: 'Garnish with a lime wedge or lemon slice.' },
      { title: 'Step 5', description: 'Enjoy your tropical lambanog cocktail!' }
    ]
  }
];

export const getFoodsByCategory = (categoryId) =>
  foods.filter(food => food.category === categoryId);

export const getFoodById = (foodId) =>
  foods.find(food => food.id === foodId);

export const getCategoryById = (categoryId) =>
  categories.find(cat => cat.id === categoryId);
