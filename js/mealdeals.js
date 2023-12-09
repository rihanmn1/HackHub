import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

let data = [
  {
    img: "./images/menu/steak.png",
    title: "Steak",
    shop_name: "HackHub Cafe",
    location: "Mangalore",
    details:
      "Indulge in the richness of our prime ribeye, expertly grilled to perfection. Each mouthful is a celebration of marbling, tenderness, and unmatched flavor.",
    rating: [
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star_grey.png",
    ],
    contains: [
      "https://www.kindmeal.my/images/icon_egg_disabled.png",
      "https://www.kindmeal.my/images/icon_milk.png",
      "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    ],
    discount: "20%",
    price: 399,
  },
  {
    img: "./images/menu/lasagna.jpg",
    title: "Lasagna",
    shop_name: "HackHub Cafe",
    location: "Mangalore",
    details:
      "Layers of savory perfection, our lasagna is a comforting embrace of rich, melted cheeses, robust tomato sauce, and perfectly seasoned ground beef.",
    rating: [
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
    ],
    contains: [
      "https://www.kindmeal.my/images/icon_egg_disabled.png",
      "https://www.kindmeal.my/images/icon_milk.png",
      "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    ],
    discount: "15%",
    price: 159,
  },
  {
    img: "./images/menu/burger.jpg",
    title: "Chicken Burger",
    shop_name: "HackHub Cafe",
    location: "Mangalore",
    details:
      "Savor the crunch of golden perfection and the juiciness of flame-grilled chicken in every bite of our signature chicken burger, topped with fresh veggies and our secret sauce.",
    rating: [
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star_grey.png",
    ],
    contains: [
      "https://www.kindmeal.my/images/icon_egg_disabled.png",
      "https://www.kindmeal.my/images/icon_milk_disabled.png",
      "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    ],
    discount: "20%",
    price: 79,
  },
  {
    img: "./images/menu/kfc.jpg",
    title: "Fried Chicken",
    shop_name: "HackHub Cafe",
    location: "Mangalore",
    details:
      "Crispy on the outside, tender on the inside—our fried chicken is a symphony of golden perfection, delivering a flavorful crunch with every mouthwatering bite.",
    rating: [
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star_half.png",
    ],
    contains: [
      "https://www.kindmeal.my/images/icon_egg_disabled.png",
      "https://www.kindmeal.my/images/icon_milk_disabled.png",
      "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    ],
    discount: "20%",
    price: 129,
  },
  {
    img: "./images/menu/sandwich.jpg",
    title: "Chicken Sandwhich",
    shop_name: "HackHub Cafe",
    location: "Mangalore",
    details:
      "Elevate your taste experience with our delectable chicken sandwich, featuring succulent, perfectly grilled chicken nestled between soft, toasted brioche buns, and adorned with crisp, garden-fresh toppings.",
    rating: [
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star_half.png",
    ],
    contains: [
      "https://www.kindmeal.my/images/icon_egg.png",
      "https://www.kindmeal.my/images/icon_milk_disabled.png",
      "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    ],
    discount: "15%",
    price: 119,
  },
  {
    img: "./images/menu/hotdog.jpg",
    title: "HotDog",
    shop_name: "HackHub Cafe",
    location: "Mangalore",
    details:
      "Satisfy your cravings with our classic hot dog—juicy, flavorful, and nestled in a soft, perfectly toasted bun, it's the ultimate comfort food indulgence.",
    rating: [
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star_half.png",
    ],
    contains: [
      "https://www.kindmeal.my/images/icon_egg_disabled.png",
      "https://www.kindmeal.my/images/icon_milk.png",
      "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    ],
    discount: "20%",
    price: 139,
  },
  {
    img: "./images/menu/wraps.jpg",
    title: "Chicken Wraps",
    shop_name: "HackHub Cafe",
    location: "Mangalore",
    details:
      "Wrap up your day with our mouthwatering chicken wraps—tender grilled chicken, crisp veggies, and flavorful sauces rolled into a perfect bundle of freshness and flavor.",
    rating: [
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
    ],
    contains: [
      "https://www.kindmeal.my/images/icon_egg_disabled.png",
      "https://www.kindmeal.my/images/icon_milk.png",
      "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    ],
    discount: "20%",
    price: 199,
  },
  {
    img: "./images/menu/noodles.jpg",
    title: "Chicken Noodles",
    shop_name: "HackHub Cafe",
    location: "Mangalore",
    details:
      "Delight your palate with our exquisite noodles, expertly crafted to perfection and tossed in a symphony of savory sauces, creating a culinary journey of taste and texture in every strand.",
    rating: [
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star.png",
      "https://www.kindmeal.my/images/icon_star_half.png",
    ],
    contains: [
      "https://www.kindmeal.my/images/icon_egg.png",
      "https://www.kindmeal.my/images/icon_milk.png",
      "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    ],
    discount: "15%",
    price: 210,
  },
];

let searching = (search, categories, loca) => {
  event.preventDefault();

  let filter_search = data.filter((elem) => {
    // console.log(elem.title,search.value)
    return elem.title == search.value;
  });
  // let filter_categories = filter_search.filter((elem)=>{
  //     return elem
  // })
  // let filter_loca = filter_categories.filter((elem)=>{
  //     return elem
  // })
  console.log(filter_search);
  append(filter_search);
};

let search = document.getElementById("search");

let categories = document.getElementById("categories").value;
let loca = document.getElementById("location").value;
search_deals.addEventListener("click", () => {
  searching(search, categories, loca);
});

let doc = (tag) => {
  return document.createElement(tag);
};
let container = document.getElementById("container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let append = (data) => {
  container.innerHTML = null;
  data.forEach(
    ({
      img,
      title,
      shop_name,
      location,
      details,
      rating,
      contains,
      discount,
      price,
    }) => {
      let aimg = doc("img");
      aimg.src = img;
      aimg.setAttribute("id", "main_img");
      let atitle = doc("h1");
      atitle.innerText = title;
      let heading_div = doc("div");
      heading_div.setAttribute("id", "heading_div");
      let ashop_name = doc("h2");
      ashop_name.innerText = `${shop_name} - `;
      let alocation = doc("h3");
      alocation.innerText = location;
      heading_div.append(ashop_name, alocation);
      let adetails = doc("p");
      adetails.innerText = details;
      let button_div = doc("div");
      button_div.setAttribute("id", "button_div");
      let button = doc("button");
      button.innerText = "Add to Cart";
      let addcart = (el) => {
        console.log("akshay");
        cart.push(el);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item is added to Cart")
      };
      button.addEventListener("click", () => {
        addcart({
          img,
          title,
          shop_name,
          location,
          details,
          rating,
          contains,
          discount,
          price,
        });
      });

      let arating = doc("div");
      arating.setAttribute("id", "rating_div");
      let rating_func = (rating) => {
        rating.forEach((elem) => {
          console.log("ak");
          let img1 = doc("img");
          img1.src = elem;
          let star_div = doc("div");
          star_div.append(img1);
          arating.append(star_div);
        });
      };
      rating_func(rating);
      button_div.append(button, arating);

      let down_div = doc("div");
      down_div.setAttribute("id", "down_div");

      let acontains = doc("div");
      acontains.setAttribute("id", "contain_div");
      let contain_func = (contains) => {
        contains.forEach((elem) => {
          let img2 = doc("img");
          img2.src = elem;
          let contain_div = doc("div");
          contain_div.append(img2);
          acontains.append(contain_div);
        });
      };
      contain_func(contains);
      let adiscount = doc("p");
      adiscount.setAttribute("id", "disc");
      adiscount.innerHTML = `KindMeal Discount <p>${discount}</p>`;
      let aprice = doc("p");
      aprice.setAttribute("id", "price");
      aprice.innerHTML = `Price <h1>${price}</h1>`;
      down_div.append(acontains, adiscount, aprice);
      let div = doc("div");
      let data_div = doc("div");
      data_div.setAttribute("id", "data_div");
      data_div.append(atitle, heading_div, adetails, button_div, down_div);
      div.append(aimg, data_div);
      container.append(div);
    }
  );
};

append(data);

let y = localStorage.getItem("loginstatus");
let logout = () => {
  let x = false;
  localStorage.setItem("loginstatus", x);
  window.location.href = "index.html";
};
if (y == "true") {
  let z = JSON.parse(localStorage.getItem("UserDetails"));
  let x = document.getElementById("loginAndsignup");
  x.innerHTML = null;
  let name = document.createElement("p");
  name.innerText = `${z[0].UserName}`;
  //   name.style.color = "black";
  let lgt = document.createElement("p");
  lgt.innerText = "logout";
  lgt.addEventListener("click", logout);
  x.append(name, lgt);
}

