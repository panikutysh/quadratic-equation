module.exports = function solveEquation(equation) {
  var A=0,B=0,C=0,x1=0,x2=0;
  var FirstVariablePoition = (equation.indexOf("x^2"));
  var SecondVariablePoition = (equation.indexOf("x",FirstVariablePoition+3));
  if (FirstVariablePoition > 0)
  {
    EndA = FirstVariablePoition-2;
  }
  else
  {
    EndA = FirstVariablePoition+1;
  }
  A=+(equation.substring(0,EndA));
  SignB = equation.substring(FirstVariablePoition+4,FirstVariablePoition+5);
  if (SignB=="+")
  {
    B=+(equation.substring(FirstVariablePoition+6,SecondVariablePoition-3));
  }
  else
  {
    B=-(equation.substring(FirstVariablePoition+6,SecondVariablePoition-3));
  }
  SignC = equation.substring(SecondVariablePoition+2,SecondVariablePoition+3);
  if (SignC=="+")
  {
    C=+(equation.substring(SecondVariablePoition+3));
  }
  else
  {
    C=-(equation.substring(SecondVariablePoition+3));
  }
  D=((B*B)-(4*A*C));
  if (D>0) 
  {
    x1=(-B+Math.sqrt(D))/(2*A);
    x2=(-B-Math.sqrt(D))/(2*A);
  }
  if (x1>x2)
  {
    var arr = [Math.round(x2), Math.round(x1)];
  }
  else if (x1 < x2)
  {
    var arr = [Math.round(x1), Math.round(x2)];
  }
  return arr;
}
