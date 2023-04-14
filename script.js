// let form = document.getElementById("form");
// let img1 = document.getElementById("img1");
// let img2 = document.getElementById("img2");
// let img3 = document.getElementById("img3");
// let modal = document.getElementById("exampleModal");
// let img2_1 = document.getElementById("img2-1");
// let img2_2 = document.getElementById("img2-2");
// let img2_3 = document.getElementById("img2-3");
// let closeBtn = document.getElementById("btn");
// let classImage = document.getElementsByClassName("image2");
// const storeImg = [];

// const submitFunction = async (event) => {
//   event.preventDefault();
//   let input = document.getElementById("inp").value;
//   const res = await fetch(`https://source.unsplash.com/1600x900/?${input}`);
//   storeImg.push(res.url);
//   if (storeImg.length == 3) {
//     modal.style.display = "block";
//     img2_1.src = storeImg[0];
//     img2_2.src = storeImg[1];
//     img2_3.src = storeImg[2];
//   }
// };
// form.addEventListener("submit", submitFunction);

// // find image
// for (let i = 0; i < classImage.length; i++) {
//   classImage[i].addEventListener("click", () => {
//     let source = classImage[i].src;
//     img1.src = source;
//     img2.src = source;
//     img3.src = source;
//   });
// }

// // close modal

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });

//  More About Api

// let data = {
//   name: "Ashish",
//   age: 25,
// };
// const callApi = async () => {
//   const res = await axios({
//     method: "patch",
//     url: "http://localhost/postData",
//     data,
//     withCredentials: true,
//   });
//   console.log(res.data);
// };
// callApi();

// local storage

// window.localStorage.setItem("name", "vashu");

// let data = window.localStorage.getItem("name");
// console.log(data);
