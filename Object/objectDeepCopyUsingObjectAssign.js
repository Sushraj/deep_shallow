function myFunction() {
    const a = {
      en: "Bye",
      de: "Tschüss",
    };
    let b = Object.assign({}, a)
    b.de = "Ciao";
    console.log(b.de); //Ciao
    console.log(a.de); //Tschüss
  }
  
  myFunction();