function GCD(num1, num2) {
    var smaller, gcd, bigger;
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    if (num1 === 0 || num2 === 0) {
        return num1 + num2;
    }
    gcd = smaller = num1 < num2 ? num1 : num2;
    bigger = num1 < num2 ? num2 : num1;
    while (gcd > 1) {
        if (bigger % gcd === 0) {
            return gcd;
        } else {
            while (gcd > 1) {
                gcd--;
                if ((smaller) % gcd === 0) {
                    break;
                }
            }
        }
    }
    return 1;
}

function euklidianGCD(num1, num2) {
    var temp = 0;
    while (num2 !== 0) {
        temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

/* result for:
a = 64536632465, b = 23432425
euklidian ~= 0.28 ms | mine ~= 92 ms

a = 64536632465, b = 0
euklidian ~= 0.1 ms | mine ~= 0.2 ms

*/
var a, b, t1, t2;
a = 64536632465;
b = 0;
t1 = window.performance.now();
euklidianGCD(a, b);
t2 = window.performance.now();
console.log(t2-t1);
t1 = window.performance.now();
GCD(a, b);
t2 = window.performance.now();
console.log(t2-t1);
