module.exports = function solveEquation(equation) {
  
  //Достаем данные из строки с уравнением
  let data = equation.split(" ");

  let a = data[0];
  let b;
  if (data[3] == '-') b = data[4]*(-1);
  else b = data[4];
  let c;
  if (data[7] == '-') c = data[8]*(-1);
  else c = data[8];
  //console.log(a);console.log(b);console.log(c);

  let d = Math.sqrt((b*b)-(4*a*c));
  let x1 = Math.round(((-1)*b-d)/(2*a));
  let x2 = Math.round(((-1)*b+d)/(2*a));
  //console.log(d);console.log(x1);console.log(x2);

  if (Number(x1)<Number(x2)) return [x1, x2];
  else return [x2, x1];
  
}
