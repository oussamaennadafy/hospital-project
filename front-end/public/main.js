("use strict");

let signUp = document.querySelector(".signUp");
let Authentication = document.querySelector(".Authentication");
let signUp_btn = document.querySelector(".signUp_btn");
let logIn_btn = document.querySelector(".logIn_btn");

signUp_btn.addEventListener("click", function () {
  Authentication.classList.remove("left-1/2");
  Authentication.classList.add("-left-1/2");
  signUp.classList.remove("translate-x-full");
  signUp.classList.add("-translate-x-1/2");
});

logIn_btn.addEventListener("click", function () {
  Authentication.classList.add("left-1/2");
  Authentication.classList.remove("-left-1/2");
  signUp.classList.add("translate-x-full");
  signUp.classList.remove("-translate-x-1/2");
});

/////////////////////////////////////////////////////

let sign_up_submit = document.querySelector("#sign_up_submit");

function signUpUser() {
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var age = document.getElementById("age").value;
  var birth = document.getElementById("birth").value;

  var first_name_el = document.getElementById("first_name");
  var last_name_el = document.getElementById("last_name");
  var age_el = document.getElementById("age");
  var birth_el = document.getElementById("birth");

  var error = document.querySelector(".error");

  if (first_name == null || first_name == "") {
    first_name_el.classList.add("outline-red-500");
    error.innerHTML = "please fill all inputs";
  } else {
    first_name_el.classList.remove("outline-red-500");
    error.innerHTML = "";
  }
  //////////////////////////////////////////
  if (last_name == null || last_name == "") {
    last_name_el.classList.add("outline-red-500");
    error.innerHTML = "please fill all inputs";
  } else {
    last_name_el.classList.remove("outline-red-500");
  }
  //////////////////////////////////////////
  if (age == null || age == "") {
    age_el.classList.add("outline-red-500");
    error.innerHTML = "please fill all inputs";
  } else {
    age_el.classList.remove("outline-red-500");
  }
  //////////////////////////////////////////
  if (birth == null || birth == "") {
    birth_el.classList.add("outline-red-500");
    error.innerHTML = "please fill all inputs";
  } else {
    birth_el.classList.remove("outline-red-500");
  }

  let data = new FormData();
  data.append("first_name", first_name);
  data.append("last_name", last_name);
  data.append("age", age);
  data.append("birth", birth);

  fetch("http://localhost/Dental-Clinic-projrct/api/users/create.php", {
    method: "post",
    body: data,
  });
}

sign_up_submit.addEventListener("click", () => {
  signUpUser();
});
