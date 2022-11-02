class Auth {

  constructor() {
    document.querySelector("body").style.display = "none";
    const auth = localStorage.getItem("auth");
    console.log(auth)
    this.validateAuth(auth)
  }
  validateAuth(auth) {
    if (auth === null) {
      window.location.replace("/login.html")
    }
    else {
      document.querySelector("body").style.display = "block";
    }
  }

  logout() {
    localStorage.removeItem("auth");
    window.location.replace("/login.html")
  }
}

