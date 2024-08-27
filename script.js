
fetch('Data_Menu_Page.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('menu_title_1').textContent = data.menu_title_1;
    document.getElementById('menu_title_2').textContent = data.menu_title_2;
    document.getElementById('menu_title_3').textContent = data.menu_title_3;


    document.getElementById('pizza_type_1').textContent = data.pizza_type_1;
    document.getElementById('pizza_prise_1').textContent = data.pizza_prise_1;
    document.getElementById('pizza_type_2').textContent = data.pizza_type_2;
    document.getElementById('pizza_prise_2').textContent = data.pizza_prise_2;
    document.getElementById('pizza_type_3').textContent = data.pizza_type_3;
    document.getElementById('pizza_prise_3').textContent = data.pizza_prise_3;
    document.getElementById('pizza_type_4').textContent = data.pizza_type_4;
    document.getElementById('pizza_prise_4').textContent = data.pizza_prise_4;
    document.getElementById('pizza_type_5').textContent = data.pizza_type_5;
    document.getElementById('pizza_prise_5').textContent = data.pizza_prise_5;
    document.getElementById('pizza_type_6').textContent = data.pizza_type_6;
    document.getElementById('pizza_prise_6').textContent = data.pizza_prise_6;
    document.getElementById('pizza_type_7').textContent = data.pizza_type_7;
    document.getElementById('pizza_prise_7').textContent = data.pizza_prise_7;
    document.getElementById('pizza_type_8').textContent = data.pizza_type_8;
    document.getElementById('pizza_prise_8').textContent = data.pizza_prise_8;
    document.getElementById('pizza_type_9').textContent = data.pizza_type_9;
    document.getElementById('pizza_prise_9').textContent = data.pizza_prise_9;

    document.getElementById('Additions_pizza').textContent = data.Additions_pizza;

    document.getElementById('macaroni_type_1').textContent = data.macaroni_type_1;
    document.getElementById('macaroni_prise_1').textContent = data.macaroni_prise_1;
    document.getElementById('macaroni_type_2').textContent = data.macaroni_type_2;
    document.getElementById('macaroni_prise_2').textContent = data.macaroni_prise_2;
    document.getElementById('macaroni_type_3').textContent = data.macaroni_type_3;
    document.getElementById('macaroni_prise_3').textContent = data.macaroni_prise_3;
    document.getElementById('macaroni_type_4').textContent = data.macaroni_type_4;
    document.getElementById('macaroni_prise_4').textContent = data.macaroni_prise_4;
    document.getElementById('macaroni_type_5').textContent = data.macaroni_type_5;
    document.getElementById('macaroni_prise_5').textContent = data.macaroni_prise_5;

    document.getElementById('Additions_macaroni').textContent = data.Additions_macaroni;

    document.getElementById('hawawshi_type_1').textContent = data.hawawshi_type_1;
    document.getElementById('hawawshi_prise_1').textContent = data.hawawshi_prise_1;
    document.getElementById('hawawshi_type_2').textContent = data.hawawshi_type_2;
    document.getElementById('hawawshi_prise_2').textContent = data.hawawshi_prise_2;

    document.getElementById('Additions_hawawshi').textContent = data.Additions_hawawshi;

    document.getElementById('meal_type_1').textContent = data.meal_type_1;
    document.getElementById('meal_prise_1').textContent = data.meal_prise_1;
    document.getElementById('meal_type_2').textContent = data.meal_type_2;
    document.getElementById('meal_prise_2').textContent = data.meal_prise_2;
    document.getElementById('meal_type_3').textContent = data.meal_type_3;
    document.getElementById('meal_prise_3').textContent = data.meal_prise_3;
    document.getElementById('meal_type_4').textContent = data.meal_type_4;
    document.getElementById('meal_prise_4').textContent = data.meal_prise_4;
    document.getElementById('meal_type_5').textContent = data.meal_type_5;
    document.getElementById('meal_prise_5').textContent = data.meal_prise_5;
    document.getElementById('meal_type_6').textContent = data.meal_type_6;
    document.getElementById('meal_prise_6').textContent = data.meal_prise_6;
    document.getElementById('meal_type_7').textContent = data.meal_type_7;
    document.getElementById('meal_prise_7').textContent = data.meal_prise_7;
    document.getElementById('meal_type_8').textContent = data.meal_type_8;
    document.getElementById('meal_prise_8').textContent = data.meal_prise_8;
    document.getElementById('meal_type_9').textContent = data.meal_type_9;
    document.getElementById('meal_prise_9').textContent = data.meal_prise_9;

    document.getElementById('notes_meal').textContent = data.notes_meal;

    document.getElementById('Additions_meal_title').textContent = data.Additions_meal_title;
    document.getElementById('Additions_meal_1').textContent = data.Additions_meal_1;
    document.getElementById('Additions_meal_prise_1').textContent = data.Additions_meal_prise_1;
    document.getElementById('Additions_meal_2').textContent = data.Additions_meal_2;
    document.getElementById('Additions_meal_prise_2').textContent = data.Additions_meal_prise_2;
    document.getElementById('Additions_meal_3').textContent = data.Additions_meal_3;
    document.getElementById('Additions_meal_prise_3').textContent = data.Additions_meal_prise_3;
    document.getElementById('Additions_meal_4').textContent = data.Additions_meal_4;
    document.getElementById('Additions_meal_prise_4').textContent = data.Additions_meal_prise_4;
    document.getElementById('Additions_meal_5').textContent = data.Additions_meal_5;
    document.getElementById('Additions_meal_prise_5').textContent = data.Additions_meal_prise_5;
    document.getElementById('Additions_meal_6').textContent = data.Additions_meal_6;
    document.getElementById('Additions_meal_prise_6').textContent = data.Additions_meal_prise_6;
    document.getElementById('Additions_meal_7').textContent = data.Additions_meal_7;
    document.getElementById('Additions_meal_prise_7').textContent = data.Additions_meal_prise_7;
    document.getElementById('Additions_meal_8').textContent = data.Additions_meal_8;
    document.getElementById('Additions_meal_prise_8').textContent = data.Additions_meal_prise_8;

    document.getElementById('syrian_sandwich_1').textContent = data.syrian_sandwich_1;
    document.getElementById('syrian_prise_1').textContent = data.syrian_prise_1;
    document.getElementById('syrian_sandwich_2').textContent = data.syrian_sandwich_2;
    document.getElementById('syrian_prise_2').textContent = data.syrian_prise_2;
    document.getElementById('syrian_sandwich_3').textContent = data.syrian_sandwich_3;
    document.getElementById('syrian_prise_3').textContent = data.syrian_prise_3;
    document.getElementById('syrian_sandwich_4').textContent = data.syrian_sandwich_4;
    document.getElementById('syrian_prise_4').textContent = data.syrian_prise_4;
    document.getElementById('syrian_sandwich_5').textContent = data.syrian_sandwich_5;
    document.getElementById('syrian_prise_5').textContent = data.syrian_prise_5;
    document.getElementById('syrian_sandwich_6').textContent = data.syrian_sandwich_6;
    document.getElementById('syrian_prise_6').textContent = data.syrian_prise_6;
    document.getElementById('syrian_sandwich_7').textContent = data.syrian_sandwich_7;
    document.getElementById('syrian_prise_7').textContent = data.syrian_prise_7;

    document.getElementById('Additions_syrian').textContent = data.Additions_syrian;

    document.getElementById('french_sandwich_1').textContent = data.french_sandwich_1;
    document.getElementById('french_prise_1').textContent = data.french_prise_1;
    document.getElementById('french_sandwich_2').textContent = data.french_sandwich_2;
    document.getElementById('french_prise_2').textContent = data.french_prise_2;
    document.getElementById('french_sandwich_3').textContent = data.french_sandwich_3;
    document.getElementById('french_prise_3').textContent = data.french_prise_3;
    document.getElementById('french_sandwich_4').textContent = data.french_sandwich_4;
    document.getElementById('french_prise_4').textContent = data.french_prise_4;
    document.getElementById('french_sandwich_5').textContent = data.french_sandwich_5;
    document.getElementById('french_prise_5').textContent = data.french_prise_5;
    document.getElementById('french_sandwich_6').textContent = data.french_sandwich_6;
    document.getElementById('french_prise_6').textContent = data.french_prise_6;
    document.getElementById('french_sandwich_7').textContent = data.french_sandwich_7;
    document.getElementById('french_prise_7').textContent = data.french_prise_7;

    document.getElementById('Additions_french').textContent = data.Additions_french;
    
    document.getElementById('burger_type_1').textContent = data.burger_type_1;
    document.getElementById('burger_prise_1').textContent = data.burger_prise_1;
    document.getElementById('burger_type_2').textContent = data.burger_type_2;
    document.getElementById('burger_prise_2').textContent = data.burger_prise_2;
    document.getElementById('burger_type_3').textContent = data.burger_type_3;
    document.getElementById('burger_prise_3').textContent = data.burger_prise_3;

    document.getElementById('Additions_burger').textContent = data.Additions_burger;

    document.getElementById('crepe_sandwich_1').textContent = data.crepe_sandwich_1;
    document.getElementById('crepe_prise_1').textContent = data.crepe_prise_1;
    document.getElementById('crepe_sandwich_2').textContent = data.crepe_sandwich_2;
    document.getElementById('crepe_prise_2').textContent = data.crepe_prise_2;
    document.getElementById('crepe_sandwich_3').textContent = data.crepe_sandwich_3;
    document.getElementById('crepe_prise_3').textContent = data.crepe_prise_3;
    document.getElementById('crepe_sandwich_4').textContent = data.crepe_sandwich_4;
    document.getElementById('crepe_prise_4').textContent = data.crepe_prise_4;
    document.getElementById('crepe_sandwich_5').textContent = data.crepe_sandwich_5;
    document.getElementById('crepe_prise_5').textContent = data.crepe_prise_5;
    document.getElementById('crepe_sandwich_6').textContent = data.crepe_sandwich_6;
    document.getElementById('crepe_prise_6').textContent = data.crepe_prise_6;
    document.getElementById('crepe_sandwich_7').textContent = data.crepe_sandwich_7;
    document.getElementById('crepe_prise_7').textContent = data.crepe_prise_7;
    document.getElementById('crepe_sandwich_8').textContent = data.crepe_sandwich_8;
    document.getElementById('crepe_prise_8').textContent = data.crepe_prise_8;
    document.getElementById('crepe_sandwich_9').textContent = data.crepe_sandwich_9;
    document.getElementById('crepe_prise_9').textContent = data.crepe_prise_9;
    document.getElementById('crepe_sandwich_10').textContent = data.crepe_sandwich_10;
    document.getElementById('crepe_prise_10').textContent = data.crepe_prise_10;
    document.getElementById('crepe_sandwich_11').textContent = data.crepe_sandwich_11;
    document.getElementById('crepe_prise_11').textContent = data.crepe_prise_11;
    document.getElementById('crepe_sandwich_12').textContent = data.crepe_sandwich_12;
    document.getElementById('crepe_prise_12').textContent = data.crepe_prise_12;
    
    document.getElementById('Additions_crepe').textContent = data.Additions_crepe;

    document.getElementById('drink_type_1').textContent = data.drink_type_1;
    document.getElementById('drink_prise_1').textContent = data.drink_prise_1;
    document.getElementById('drink_type_2').textContent = data.drink_type_2;
    document.getElementById('drink_prise_2').textContent = data.drink_prise_2;
    document.getElementById('drink_type_3').textContent = data.drink_type_3;
    document.getElementById('drink_prise_3').textContent = data.drink_prise_3;
    document.getElementById('drink_type_4').textContent = data.drink_type_4;
    document.getElementById('drink_prise_4').textContent = data.drink_prise_4;
    document.getElementById('drink_type_5').textContent = data.drink_type_5;
    document.getElementById('drink_prise_5').textContent = data.drink_prise_5;
    document.getElementById('drink_type_6').textContent = data.drink_type_6;
    document.getElementById('drink_prise_6').textContent = data.drink_prise_6;
    document.getElementById('drink_type_7').textContent = data.drink_type_7;
    document.getElementById('drink_prise_7').textContent = data.drink_prise_7;
    document.getElementById('drink_type_8').textContent = data.drink_type_8;
    document.getElementById('drink_prise_8').textContent = data.drink_prise_8;
    document.getElementById('drink_type_9').textContent = data.drink_type_9;
    document.getElementById('drink_prise_9').textContent = data.drink_prise_9;

    document.getElementById('breakfast_type_1').textContent = data.breakfast_type_1;
    document.getElementById('Breakfast_prise_1').textContent = data.Breakfast_prise_1;
    document.getElementById('breakfast_type_2').textContent = data.breakfast_type_2;
    document.getElementById('Breakfast_prise_2').textContent = data.Breakfast_prise_2;
    document.getElementById('breakfast_type_3').textContent = data.breakfast_type_3;
    document.getElementById('Breakfast_prise_3').textContent = data.Breakfast_prise_3;
    document.getElementById('breakfast_type_4').textContent = data.breakfast_type_4;
    document.getElementById('Breakfast_prise_4').textContent = data.Breakfast_prise_4;
    document.getElementById('breakfast_type_5').textContent = data.breakfast_type_5;
    document.getElementById('Breakfast_prise_5').textContent = data.Breakfast_prise_5;

    document.getElementById('Additions_breakfast').textContent = data.Additions_breakfast;

    document.getElementById('food_dishe_1').textContent = data.food_dishe_1;
    document.getElementById('dishe_prise_1').textContent = data.dishe_prise_1;
    document.getElementById('food_dishe_2').textContent = data.food_dishe_2;
    document.getElementById('dishe_prise_2').textContent = data.dishe_prise_2;
    document.getElementById('food_dishe_3').textContent = data.food_dishe_3;
    document.getElementById('dishe_prise_3').textContent = data.dishe_prise_3;

    document.getElementById('food_dishe_4').textContent = data.food_dishe_4;
    document.getElementById('dishe_prise_4').textContent = data.dishe_prise_4;
    document.getElementById('food_dishe_5').textContent = data.food_dishe_5;
    document.getElementById('dishe_prise_5').textContent = data.dishe_prise_5;
    document.getElementById('food_dishe_6').textContent = data.food_dishe_6;
    document.getElementById('dishe_prise_6').textContent = data.dishe_prise_6;
    document.getElementById('food_dishe_7').textContent = data.food_dishe_7;
    document.getElementById('dishe_prise_7').textContent = data.dishe_prise_7;
    document.getElementById('food_dishe_8').textContent = data.food_dishe_8;
    document.getElementById('dishe_prise_8').textContent = data.dishe_prise_8;
    document.getElementById('food_dishe_9').textContent = data.food_dishe_9;
    document.getElementById('dishe_prise_9').textContent = data.dishe_prise_9;
    document.getElementById('food_dishe_10').textContent = data.food_dishe_10;
    document.getElementById('dishe_prise_10').textContent = data.dishe_prise_10;
    document.getElementById('food_dishe_11').textContent = data.food_dishe_11;
    document.getElementById('dishe_prise_11').textContent = data.dishe_prise_11;

    document.getElementById('food_dishe_12').textContent = data.food_dishe_12;
    document.getElementById('dishe_prise_12').textContent = data.dishe_prise_12;
    document.getElementById('food_dishe_13').textContent = data.food_dishe_13;
    document.getElementById('dishe_prise_13').textContent = data.dishe_prise_13;
    document.getElementById('food_dishe_14').textContent = data.food_dishe_14;
    document.getElementById('dishe_prise_14').textContent = data.dishe_prise_14;
    document.getElementById('food_dishe_15').textContent = data.food_dishe_15;
    document.getElementById('dishe_prise_15').textContent = data.dishe_prise_15;
    document.getElementById('food_dishe_16').textContent = data.food_dishe_16;
    document.getElementById('dishe_prise_16').textContent = data.dishe_prise_16;
    document.getElementById('food_dishe_17').textContent = data.food_dishe_17;
    document.getElementById('dishe_prise_17').textContent = data.dishe_prise_17;
    document.getElementById('food_dishe_18').textContent = data.food_dishe_18;
    document.getElementById('dishe_prise_18').textContent = data.dishe_prise_18;
    document.getElementById('food_dishe_19').textContent = data.food_dishe_19;
    document.getElementById('dishe_prise_19').textContent = data.dishe_prise_19;

    document.getElementById('Additions_dishe').textContent = data.Additions_dishe;
  });