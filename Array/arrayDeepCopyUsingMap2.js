function myFunction() {
    const a = [1, 2, 3];
    const b = a.map((el, index) => index === 1 ? 4 : el)
    b[1] = 4;
    console.log(b[1]); // 4
    console.log(a[1]); // 2
  }
  
  myFunction();
  