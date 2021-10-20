const a = 2;
const b = 4;
const c = 2;

const D = b * b - 4 * a * c;

if (a === 0) {
    console.log("x =" + (-c / b));
}
else {
    if (D > 0) {
        console.log("x1 = " + (-b + Math.sqrt(D) ) / (2 * a) );
        console.log("x2 = " + (-b - Math.sqrt(D) ) / (2 * a) );
    }
    else {
        if (D === 0) {
            console.log("x =" + b / (2 * a ));
        }
        else {
            console.log( "Unsolvable");
        }
    }
}
