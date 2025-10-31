const fruitFinderInput = document.querySelector("#fruitFinder");
const fruitList = document.querySelector(".fruitList");
const fruits = fruitList.querySelectorAll("li");
const totalFruits = fruits.length;
const noResultMsg = document.querySelector(".no-results");
const resultCount = document.querySelector(".result-count");

fruitFinderInput.addEventListener("input", () => {
  const searchText = fruitFinderInput.value.trim().toLocaleLowerCase();
  let visibleFruits = 0; //to track

  for (let fruit of fruits) {
    const fruitName = fruit.textContent.toLocaleLowerCase();
    if (searchText === "" || fruitName.startsWith(searchText)) {
      fruit.style.display = "";
      visibleFruits++;
    } else {
      fruit.style.display = "none";
    }
  }

  //no result msg
  if (visibleFruits === 0) {
    noResultMsg.style.display = "block";
  } else {
    noResultMsg.style.display = "none";
  }

  //result count
  if (searchText === "" || visibleFruits === 0) {
    resultCount.textContent = "";
  } else {
    resultCount.textContent = `${visibleFruits} fruits${
      visibleFruits !== 1 ? "s" : ""
    } out of ${totalFruits} found`;
  }
});
