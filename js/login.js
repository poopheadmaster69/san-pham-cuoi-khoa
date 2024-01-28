const emailElm = document.getElementById("email");
const passwordElm = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

function handleLogin() {
  if (emailElm.value === "") {
    alert("Ban chua nhap email!");
    return;
  }
  if (passwordElm.value === "") {
    alert("Ban chua nhap password!");
    return;
  }
  const email = emailElm.value;
  const password = passwordElm.value;

  const usersLocal = localStorage.getItem("users");
  const users = JSON.parse(usersLocal);

  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if (element.email === email && element.password === password) {
      alert("Dang nhap thanh cong!");
      window.location = "./index.html";
      return;
    }
  }
  alert("Sai thong tin dang nhap!");
}

submitBtn.addEventListener("click", handleLogin);
