N= parseInt (prompt ("Ingrese un número"));
N2= parseInt (prompt("Ingrese otro número"));
N3= parseInt (prompt("Ingrese un tercer número"));

if(N>N2 & N>N3){
    document.write("El número mas alto es: " ,N, "</br>");
}else if (N2>N & N2>N3){
    document.write("El número mas alto es: " ,N2, "</br>");
}else{
    document.write("El número mas alto es: " ,N3, "</br>");
}