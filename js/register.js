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

  const user = {
    email: emailElm.value,
    password: passwordElm.value
  }

  const usersLocal = localStorage.getItem('users');

  if (usersLocal === null) {
    const users = [user];
    localStorage.setItem('users', JSON.stringify(users));
  } else {
  
    const users = JSON.parse(usersLocal);
    console.log(users[0]);
   
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if(element.email === user.email) {
        alert('Bi trung email!');
        return;
      }
    }
   
    users.push(user);
  
    localStorage.setItem('users', JSON.stringify(users));
  }

  emailElm.value = "";
  passwordElm.value = "";
  alert("Dang ky thanh cong!")
  window.location = "./login.html";
}

submitBtn.addEventListener("click", handleRegister);