const getRandomImage = async (event) => {
  event.preventDefault();
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const inp = document.getElementById("inp").value;

  const res = await fetch("https://source.unsplash.com/1600x900/?nature");
  const result = await res.json();
  console.log(result);
  img1.src = result.msg;
  img2.src = result.msg;
  img3.src = result.msg;
};

let form = document.getElementById("form");

form.addEventListener("submit", getRandomImage);
