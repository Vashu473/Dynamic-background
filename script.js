let form = document.getElementById("form");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let modal = document.getElementById("exampleModal");
let img2_1 = document.getElementById("img2-1");
let img2_2 = document.getElementById("img2-2");
let img2_3 = document.getElementById("img2-3");

const storeImg = [];

const submitFunction = async (event) => {
  event.preventDefault();
  let input = document.getElementById("inp").value;
  const res = await fetch(`https://source.unsplash.com/1600x900/?${input}`);
  storeImg.push(res.url);
  if (storeImg.length == 3) {
    modal.style.display = "block";
    img2_1.src = storeImg[0];
    img2_2.src = storeImg[1];
    img2_3.src = storeImg[2];
  }
  // img1.src = res.url;
  // img2.src = res.url;
  // img3.src = res.url;
};
form.addEventListener("submit", submitFunction);

// find image
