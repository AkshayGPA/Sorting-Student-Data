import myJson from "./MOCK_DATA.json" assert { type: "json" };
console.log(myJson);
let data = document.getElementById("data");
let search = document.getElementById("searchBtn");
let az = document.getElementById("az");
let za = document.getElementById("za");
let bymarks = document.getElementById("bymarks");
let byclass = document.getElementById("byclass");
let bygender = document.getElementById("bygender");
let bypassing = document.getElementById("bypassing");

myJson.forEach((e) => {
  if (e.passing == true) {
    e.passing = "Pass";
  } else {
    e.passing = "Fail";
  }
  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${e.id}</td><td> <img src="${e.img_src}" alt="" height = 10px> ${e.first_name} ${e.last_name}</td><td>${e.gender}</td><td>${e.class}</td><td>${e.marks}</td><td>${e.passing}</td><td>${e.email}</td>`;
  data.append(tr);
});
let table_row = document.querySelectorAll("tr");
// console.log(table_row[9]);
search.addEventListener("click", searchData);

// search button functionallity
function searchData() {
  let input = document.getElementsByTagName("input")[0];
  for (let i = 0; i < myJson.length; i++) {
    console.log(input.value);
    if (
      myJson[i].first_name.toLowerCase().includes(input.value.toLowerCase()) ||
      myJson[i].last_name.toLowerCase().includes(input.value.toLowerCase()) ||
      myJson[i].email.toLowerCase().includes(input.value.toLowerCase())
    ) {
      table_row[i + 1].style.display = "block";
    } else {
      table_row[i + 1].style.display = "none";
    }
  }
  table_row[0].style.display = "block";
}

//search end

// sort functions
function sortaz() {
  let arr = myJson.map((e) => {
    e.fullname = `${e.first_name} ${e.last_name}`;
    return e;
  });
  arr = myJson.sort((a, b) => {
    let fa = a.fullname.toLowerCase(),
      fb = b.fullname.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  for (let i = 1; i < table_row.length; i++) {
    table_row[i].innerHTML = `<td>${arr[i - 1].id}</td><td> <img src="${
      arr[i - 1].img_src
    }" alt="" height = 10px> ${arr[i - 1].first_name} ${
      arr[i - 1].last_name
    }</td><td>${arr[i - 1].gender}</td><td>${arr[i - 1].class}</td><td>${
      arr[i - 1].marks
    }</td><td>${arr[i - 1].passing}</td><td>${arr[i - 1].email}</td>`;
  }
}

function sortza() {
  let arr = myJson.map((e) => {
    e.fullname = `${e.first_name} ${e.last_name}`;
    return e;
  });
  arr = myJson.sort((a, b) => {
    let fa = a.fullname.toLowerCase(),
      fb = b.fullname.toLowerCase();

    if (fa > fb) {
      return -1;
    }
    if (fa < fb) {
      return 1;
    }
    return 0;
  });
  for (let i = 1; i < table_row.length; i++) {
    table_row[i].innerHTML = `<td>${arr[i - 1].id}</td><td><img src="${
      arr[i - 1].img_src
    }" alt="" height = 10px> ${arr[i - 1].first_name} ${
      arr[i - 1].last_name
    }</td><td>${arr[i - 1].gender}</td><td>${arr[i - 1].class}</td><td>${
      arr[i - 1].marks
    }</td><td>${arr[i - 1].passing}</td><td>${arr[i - 1].email}</td>`;
  }
}

function sortBymarks() {
  let arr = myJson.map((e) => {
    e.fullname = `${e.first_name} ${e.last_name}`;
    return e;
  });
  arr = myJson.sort((a, b) => {
    let fa = a.marks,
      fb = b.marks;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  for (let i = 1; i < table_row.length; i++) {
    table_row[i].innerHTML = `<td>${arr[i - 1].id}</td><td><img src="${
      arr[i - 1].img_src
    }" alt="" height = 10px> ${arr[i - 1].first_name} ${
      arr[i - 1].last_name
    }</td><td>${arr[i - 1].gender}</td><td>${arr[i - 1].class}</td><td>${
      arr[i - 1].marks
    }</td><td>${arr[i - 1].passing}</td><td>${arr[i - 1].email}</td>`;
  }
}

function sortByclass() {
  let arr = myJson.map((e) => {
    e.fullname = `${e.first_name} ${e.last_name}`;
    return e;
  });
  arr = myJson.sort((a, b) => {
    let fa = a.class,
      fb = b.class;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  for (let i = 1; i < table_row.length; i++) {
    table_row[i].innerHTML = `<td>${arr[i - 1].id}</td><td><img src="${
      arr[i - 1].img_src
    }" alt="" height = 10px> ${arr[i - 1].first_name} ${
      arr[i - 1].last_name
    }</td><td>${arr[i - 1].gender}</td><td>${arr[i - 1].class}</td><td>${
      arr[i - 1].marks
    }</td><td>${arr[i - 1].passing}</td><td>${arr[i - 1].email}</td>`;
  }
}

function sortBygender() {
  let arr = [];
  myJson.forEach((e) => {
    // console.log(e);
    if (e.gender == "Female") {
      arr.push(e);
    }
  });
  console.log(arr);
  myJson.forEach((e) => {
    // console.log(e);
    if (e.gender == "Male") {
      arr.push(e);
    }
  });
  console.log(arr);
  //
  for (let i = 1; i < arr.length; i++) {
    table_row[i].innerHTML = `<td>${arr[i - 1].id}</td><td><img src="${
      arr[i - 1].img_src
    }" alt="" height = 10px> ${arr[i - 1].first_name} ${
      arr[i - 1].last_name
    }</td><td>${arr[i - 1].gender}</td><td>${arr[i - 1].class}</td><td>${
      arr[i - 1].marks
    }</td><td>${arr[i - 1].passing}</td><td>${arr[i - 1].email}</td>`;
  }
}

function sortBypassing() {
  let arr = [];
  myJson.forEach((e) => {
    // console.log(e);
    if (e.passing == "Pass") {
      arr.push(e);
    }
  });
  let tt = table_row.length;
  for (let i = 1; i < arr.length; i++) {
    table_row[i].innerHTML = `<td>${arr[i - 1].id}</td><td><img src="${
      arr[i - 1].img_src
    }" alt="" height = 10px> ${arr[i - 1].first_name} ${
      arr[i - 1].last_name
    }</td><td>${arr[i - 1].gender}</td><td>${arr[i - 1].class}</td><td>${
      arr[i - 1].marks
    }</td><td>${arr[i - 1].passing}</td><td>${arr[i - 1].email}</td>`;
  }

  for (let k = arr.length + 1; k < tt; k++) {
    table_row[k].style.display = "none";
  }
}

/// sort buttons functionallity
az.addEventListener("click", sortaz);
za.addEventListener("click", sortza);
bymarks.addEventListener("click", sortBymarks);
byclass.addEventListener("click", sortByclass);
bygender.addEventListener("click", sortBygender);
bypassing.addEventListener("click", sortBypassing);
