function myFunction() {
    const a = [1, 2, [4,6,8]];
    const b = JSON.parse(JSON.stringify(a))
    b[1] = 4;
    console.log(b[1]); // 4
    console.log(a[1]); // 2
  }
  
  myFunction();