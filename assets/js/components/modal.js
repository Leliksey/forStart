// function sortAbv() {
//             var items = document.querySelectorAll(".dropdown-item");
            
//             var parent = document.querySelector(".dropdown-list-show");
            
//             var SortElements = new Object();
//             items.forEach(function (item, indx) {
//               var itemValue = parseInt(
//                 item
//                   .querySelector(".item__text")
//                   .textContent
//                   .replace(/\D/g,'')
                  
//               );
//               SortElements[itemValue] = { element: item, index: indx };
//             });
//             var keys = Object.keys(SortElements);
//             function compareNumeric(a, b) {
//               a = parseInt(a);
//               b = parseInt(b);
//               if (a < b) return 1;
//               if (a > b) return -1;
//             }
//             keys.sort(compareNumeric);
//             keys.map(function (key, indx) {
//                 parent.insertAdjacentElement(
//                 "beforeend",
//                 SortElements[key]["element"]
//               );
//             });
//         }