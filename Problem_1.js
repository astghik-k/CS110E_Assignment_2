const base_t = 5;
const height_t = 9;

const base_r = 3;
const height_r = 15;

const area_t = base_t * height_t / 2;
const area_r = base_r * height_r;

if (area_t > area_r) {
    console.log("The triangle has a bigger area");
}
else {
    if (area_t === area_r) {
        console.log("Areas are equal");
    }
    else { 
        console.log("The rectangle has a bigger area");
    }
}

