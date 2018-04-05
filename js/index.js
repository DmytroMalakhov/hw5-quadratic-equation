const a = parseInt(prompt('Enter the number A', 20));
const b = parseInt(prompt('Enter the number B', 50));
const c = parseInt(prompt('Enter the number C', 25));

document.write('Example:<br>');
document.write('(D < 0) A = 5, B = 3, C = 7;<br>');
document.write('(D = 0) A = 1, B = 12, C = 36;<br>');
document.write('(D > 0) A = 1, B = -2, C = -3;<br><br>');

document.write('The entered numbers:<br>');
document.write('Number A = ' + a + ';<br>');
document.write('Number B = ' + b + ';<br>');
document.write('Number C = ' + c + ';<br>');

const d = discr (a, b, c);

const result = quadrEquat(a, b, c);
document.write(result);

function quadrEquat (x, y, z) {
  const x3 = oneX (x, y);
  const x1 = firstX (x, y, d);
  const x2 = secondX (x, y, d);
  
  if (d < 0) {
    return 'The equation has no roots;';
  } else if (d == 0) {
    return 'x = ' + x3; 
  } else {
    return 'x1 = ' + x1 + ', x2 = ' + x2 + ';'; 
  }
}

function discr (x, y, z) {
  return b**2 - 4 * a * c;
}

function oneX (x, y) {
  return -b / 2 * a;
}

function firstX (x, y, d) {
  return ((-b) + (Math.sqrt(d))) / (2 * a);
}

function secondX (x, y, d) {
  return ((-b) - (Math.sqrt(d))) / (2 * a);
}