window.onload = function () {
  var dropdownListHide = document.querySelectorAll(".dropdown-list-hide");
  var btn = document.querySelector(".btn-group");
  var dropdownMenuPizza = document.querySelector(".dropdown-menu-pizza");
  var dropdownMenuSteak = document.querySelector(".dropdown-menu-steak");
  var dropdownMenuAll = document.querySelector(".dropdown-menu-all");
  var main__title = document.querySelector(".main__title");
  var main__abv = document.querySelector(".main__abv");
  var main__description = document.querySelector(".main__description");
  var main__foodPairing = document.querySelector(".main__food-pairing");
  var main__beerImg = document.querySelector(".main__beer-img");
  var main__tagline = document.querySelector(".main__tagline");
  var sortByAbvPizza = document.querySelector(".sortByAbvPizza");
  var sortByAbvSteak = document.querySelector(".sortByAbvSteak");
  var sortByAbvAll = document.querySelector(".sortByAbvAll");

  function getData(e) {
    e.preventDefault();
    if (e.target.classList.contains("beerForPizza")) {
      dropdownListHide[0].classList.toggle("dropdown-list-show");
      if (dropdownMenuPizza.hasChildNodes()) {
        return;
      }
      fetch("https://api.punkapi.com/v2/beers?food=pizza&per_page=80")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            let name = data[i].name;
            let description = data[i].description;
            let foodPairing = data[i].food_pairing;
            let abv = data[i].abv;
            let img = data[i].image_url;
            let tagline = data[i].tagline;
            let newLi = document.createElement("li");
            newLi.innerHTML =
              "<a href='#' class='item__text__pizza'>" +
              name +
              " " +
              abv +
              "%" +
              "<img src='" +
              img +
              "'>" +
              "</a>";
            newLi.classList.add("dropdown-item");
            newLi.classList.add("dropdown-item-pizza");
            dropdownMenuPizza.append(newLi);

            newLi.addEventListener("click", () => {
              main__title.innerHTML = name;
              main__abv.innerHTML = abv + "%";
              main__description.innerHTML = description;
              main__foodPairing.innerHTML = foodPairing;
              main__beerImg.src = img;
              main__tagline.innerHTML = tagline;
            });
          }
          // sortByAbvPizza.addEventListener("click", () => {
          //   var items = document.querySelectorAll(".dropdown-item-pizza");
          //   var parent = document.querySelector(".dropdown-menu-pizza");
          //   var SortElements = new Object();
          //   items.forEach(function (item, indx) {
          //     var itemValue = parseInt(
          //       item
          //         .querySelector(".item__text__pizza")
          //         .textContent
          //         .replace(/\D/g,'')
          //     );
          //     SortElements[itemValue] = { element: item, index: indx };
          //   });
          //   var keys = Object.keys(SortElements);
          //   function compareNumeric(a, b) {
          //     a = parseInt(a);
          //     b = parseInt(b);
          //     if (a < b) return 1;
          //     if (a > b) return -1;
          //   }
          //   keys.sort(compareNumeric);
          //   keys.map(function (key, indx) {
          //     parent.insertAdjacentElement(
          //       "beforeend",
          //       SortElements[key]["element"]
          //     );
          //   });
          // });
        });
    } else if (e.target.classList.contains("beerForSteak")) {
      dropdownListHide[1].classList.toggle("dropdown-list-show");
      if (dropdownMenuSteak.hasChildNodes()) {
        return;
      }
      fetch("https://api.punkapi.com/v2/beers?food=steak&per_page=80")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            let name = data[i].name;
            let description = data[i].description;
            let foodPairing = data[i].food_pairing;
            let abv = data[i].abv;
            let img = data[i].image_url;
            let tagline = data[i].tagline;
            let newLi = document.createElement("li");
            newLi.innerHTML =
              "<a href='#' class='item__text__steak'>" +
              name +
              " " +
              abv +
              "%" +
              "<img src='" +
              img +
              "'>" +
              "</a>";
            newLi.classList.add("dropdown-item");
            newLi.classList.add("dropdown-item-steak");
            dropdownMenuSteak.append(newLi);
            newLi.addEventListener("click", () => {
              main__title.innerHTML = name;
              main__abv.innerHTML = abv + "%";
              main__description.innerHTML = description;
              main__foodPairing.innerHTML = foodPairing;
              main__beerImg.src = img;
              main__tagline.innerHTML = tagline;
            });
          }
          // sortByAbvSteak.addEventListener("click", () => {
          //   var items = document.querySelectorAll(".dropdown-item-steak");
          //   var parent = document.querySelector(".dropdown-menu-steak");
          //   var SortElements = new Object();
          //   items.forEach(function (item, indx) {
          //     var itemValue = parseInt(
          //       item
          //         .querySelector(".item__text__steak")
          //         .textContent
          //         .replace(/\D/g,'')
          //     );
          //     SortElements[itemValue] = { element: item, index: indx };
          //   });
          //   var keys = Object.keys(SortElements);
          //   function compareNumeric(a, b) {
          //     a = parseInt(a);
          //     b = parseInt(b);
          //     if (a < b) return 1;
          //     if (a > b) return -1;
          //   }
          //   keys.sort(compareNumeric);
          //   keys.map(function (key, indx) {
          //     parent.insertAdjacentElement(
          //       "beforeend",
          //       SortElements[key]["element"]
          //     );
          //   });
          // });
        });
    } else if (e.target.classList.contains("beerAll")) {
      dropdownListHide[2].classList.toggle("dropdown-list-show");
      if (dropdownMenuAll.hasChildNodes()) {
        return;
      }
      fetch("https://api.punkapi.com/v2/beers?per_page=80")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            let name = data[i].name;
            let description = data[i].description;
            let foodPairing = data[i].food_pairing;
            let abv = data[i].abv;
            let img = data[i].image_url;
            let tagline = data[i].tagline;
            let newLi = document.createElement("li");
            newLi.innerHTML =
              "<a href='#' class='item__text__all'>" +
              name +
              " " +
              abv +
              "%" +
              "<img src='" +
              img +
              "' alt='beer'>" +
              "</a>";
            newLi.classList.add("dropdown-item");
            newLi.classList.add("dropdown-item-all");
            dropdownMenuAll.append(newLi);
            newLi.addEventListener("click", () => {
              main__title.innerHTML = name;
              main__abv.innerHTML = abv + "%";
              main__description.innerHTML = description;
              main__foodPairing.innerHTML = foodPairing;
              main__beerImg.src = img;
              main__tagline.innerHTML = tagline;
            });
          }
          // sortByAbvAll.addEventListener("click", () => {
          //   var items = document.querySelectorAll(".dropdown-item-all");
            
          //   var dropdownMenuAll = document.querySelector(".dropdown-menu-all");
            
          //   var SortElements = new Object();
          //   items.forEach(function (item, indx) {
          //     var itemValue = parseInt(
          //       item
          //         .querySelector(".item__text__all")
          //         .textContent
          //         .replace(/\D/g,'')
                  
          //     );
          //     SortElements[itemValue] = { element: item, index: indx };
          //   });
          //   var keys = Object.keys(SortElements);
          //   function compareNumeric(a, b) {
          //     a = parseInt(a);
          //     b = parseInt(b);
          //     if (a < b) return 1;
          //     if (a > b) return -1;
          //   }
          //   keys.sort(compareNumeric);
          //   keys.map(function (key, indx) {
          //     dropdownMenuAll.insertAdjacentElement(
          //       "beforeend",
          //       SortElements[key]["element"]
          //     );
          //   });
          // });
        });
    }
  }
  btn.addEventListener("click", getData);
};
