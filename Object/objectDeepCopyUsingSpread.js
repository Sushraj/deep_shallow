function myFunction() {
  const a = {
    en: "Bye",
    de: "Tschüss",
  };
  let b = { ...a };
  b.de = "Ciao";
  console.log(b.de); //Ciao
  console.log(a.de); //Tschüss
}

myFunction();
