"use strict";

const ulItems = document.querySelectorAll(".item");
console.dir(`Number of categories: ${ulItems.length}`);

ulItems.forEach((element) => {
   const liTitle = element.firstElementChild
   console.dir(`Category: ${liTitle.textContent}`);
   const liItems = liTitle.nextElementSibling.children
   console.dir(`Elements: ${liItems.length}`)
})




