const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");

function inputBox1(e) {
  if (e.key == "Enter") {
    console.log("done hai");
  }
}
input1.addEventListener("keypress", inputBox1);

function inputBox2() {}

function inputBox3() {}

function inputBox4() {}
