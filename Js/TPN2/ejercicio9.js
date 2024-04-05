for (let i = 1; i <= 500; i++) {
    document.write(i);
  
    if (i % 4 === 0 && i % 9 === 0) {
      document.write(" (Múltiplo de 4 y 9)");
    } else if (i % 4 === 0) {
      document.write(" (Múltiplo de 4)");
    } else if (i % 9 === 0) {
      document.write(" (Múltiplo de 9)");
    }
  
    document.write("<br />");
  
    if (i % 5 === 0) {
      document.write("—————————————————————<br />");
    }
  }