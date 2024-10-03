// //getElementById ----------
// const heading = document.getElementById("main-heading");

// //querySelector, querySelectorAll ------------
// const navitem = document.querySelector(".nav-item"); //selects first element only or one only..
// const navitems = document.querySelectorAll(".nav-item");

// //innerText == does not show hidden ie. behaves normal;
// //testContent == shows hidden text also;
// heading.innerText = "new heading 2";

// //for styling in js camel case is used insted of dash-----------
// heading.style.backgroundColor = "red";

// //getAttribute and setAttribute-----
// const link = document.querySelector("a");
// link.setAttribute("href", "abcd");
// console.log(link.getAttribute("href"));

// //getElemtntsByClassName --------
// const navlist = document.getElementsByClassName("nav-item");

// //iterate elements or htmlCollection------------------
// const navItems = document.getElementsByTagName("a");
// console.log(navItems);

// for (i = 0; i < navItems.length; i++) {
//   let navitem = navItems[i];

//   navitem.style.color = "red";
// }

// for (let navitem of navItems) {
//   navitem.style.color = "red";
// }

// //we CANNOT use for each directly on htmlCollection;
// //instead we can convert it to ARRAY;
// //when we select elements using querySelector we get "node-list" that can be directly iterable by the forEach loop

////classList-------------------------->
// const header = document.querySelector("header");
// header.classList.toggle("bg-dark");
// console.log(header.classList);
