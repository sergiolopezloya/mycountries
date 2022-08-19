let activeCountry = 0;
function openModal(id) {
  UIkit.modal(document.getElementById(id)).show();
}

function closeModal(id) {
  UIkit.modal(document.getElementById(id)).hide();
}

function toFavorites(id, name) {
  activeCountry = id;
  document.getElementById("country_name").innerHTML = name;
  openModal("tofavorite");
}

function addtoFavorites() {
  const email = document.getElementById("fav_email").value;
  if (email == "") {
    UIkit.notification({
      message: "Please enter your email",
      status: "danger",
      pos: "top-center",
      timeout: 5000
    });
    return;
  }
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat)) {
    UIkit.notification({
      message: "Please enter a valid email",
      status: "danger",
      pos: "top-center",
      timeout: 5000
    });
    return;
  }
  const body = JSON.stringify({
    email: email,
    country_id: activeCountry
  });
  fetch(`http://localhost:8080/api/favorites/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
    .then(res => res.json())
    .then(data => {
      if (data.status == "success") {
        closeModal("tofavorite");
        UIkit.modal.alert("Country added to favorites");
        sessionStorage.setItem("email", email);
      } else {
        UIkit.notification({
          message: data.message || "Error adding country to favorites",
          status: "danger",
          pos: "top-center",
          timeout: 5000
        });
      }
    });
}

function logout() {
  sessionStorage.setItem("email", "");
  document.getElementById("sessionMenu").innerHTML = "";
}

function login() {
  const email = document.getElementById("login_email").value;
  fetch(`http://localhost:8080/api/favorites?email=${email}`)
    .then(res => res.json())
    .then(data => {
      if (data.status == "success") {
        sessionStorage.setItem("email", email);
        document.getElementById("sessionMenu").innerHTML = email;
        closeModal("login");
        UIkit.modal.alert("Login successful");
      } else {
        UIkit.notification({
          message: data.message || "Error logging in",
          status: "danger",
          pos: "top-center",
          timeout: 5000
        });
      }
    });
}