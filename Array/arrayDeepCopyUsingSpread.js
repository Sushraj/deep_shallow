function myFunction() {
    const a = [1,2,3]
    let b = { ...a };
    b[1] = 4
    console.log(b[1]); //4
    console.log(a[1]); //2
  }
  
  myFunction();