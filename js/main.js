var bookmarkName = document.getElementById("bookmarkName");
var siteUrl = document.getElementById("siteUrl");
var bookmarkList = [];
var closeBtn = document.getElementById("closeBtn");
var fixedBox = document.getElementById("fixed-box");

// regex
var regex = /^[A-Za-z_]{3,}$/;
function validationFunc() {
  if (regex.test(bookmarkName.value)) {
    return true;
  } else {
    return false;
  }
}
var urlRegex = /^(https)?(www\.)?[A-Za-z0-9\.]{1,}\.[a-z]{3}$/;
function validationUrl() {
  if (urlRegex.test(siteUrl.value)) {
    return true;
  } else {
    return false;
  }
}

// creat function
function creatBookmark() {
  if (validationFunc && validationUrl) {
    var bookMarker = {
      name: bookmarkName.value,
      Url: siteUrl.value,
    };
    bookmarkList.push(bookMarker);
    displayProduct();
  }
  //  else {
  //   alert("invalid");
  // }
}
function delte(index) {
  bookmarkList.splice(index, 1);

  displayProduct();
}

function displayProduct() {
  cartona = "";
  for (var i = 0; i < bookmarkList.length; i++) {
    cartona += `<tr>
    <td>${i + 1}</td>
    <td>${bookmarkList[i].name}</td>
    <td> <button type="button" class="btn btn-outline-success" onclick=''>
    <a  href="${
      bookmarkList[i].Url
    }" target="blank" ><i class="fa-solid fa-eye pe-2"> </i> Visit</a>
       </button>
      </td>
    
    <td>
      <button type="button" class="btn btn-outline-danger" onclick='delte(${i})'>
      <i class="fa-solid fa-trash-can pe-2"> </i> Delete
      </button>
    </td>
  </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}
closeBtn.addEventListener("click", function () {
  fixedBox.classList.replace("d-flex", "d-none");
});

SubmitClck.addEventListener("click", function () {
  fixedBox.classList.replace("d-none", "d-flex");
});
