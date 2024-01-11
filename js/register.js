const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

function handleRegister () {
  if(emailElm.value === "") {
    alert("Ban chua nhap email!");
    return;
  }
  if(passwordElm.value === "") {
    alert("Ban chua nhap password!");
    return;
  }
  // luu email va password vao 1 object
  const user = {
    email: emailElm.value,
    password: passwordElm.value
  }
  // Lay user ra tu localStorage va parse ve dang array
  const usersLocal = localStorage.getItem('users');
  // Kiem tra xem trong localStorage da co users hay chua
  if (usersLocal === null) {
    const users = [user];
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    // Chuyen string ve dang array su dung JSON.parse
    const users = JSON.parse(usersLocal);
    console.log(users[0]);
    // Kiem tra trung email
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if(element.email === user.email) {
        alert('Bi trung email!');
        return;
      }
    }
    // Them user moi vao mang users
    users.push(user);
    // Luu mang users moi vao localStorage
    localStorage.setItem('users', JSON.stringify(users));
  }

  emailElm.value = "";
  passwordElm.value = "";
  alert("Dang ky thanh cong!")
  window.location = "./login.html";
}

submitBtn.addEventListener("click", handleRegister);