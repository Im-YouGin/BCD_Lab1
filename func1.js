function printNumbers(n) {
    var s = "";
    for(var i = 0; i < (n - 1); i += 1) {
      s += i + " ";
    }
    console.log(s);
};

function checkDivision(n, a, b){
    if (n % a === 0 && n % b === 0){
        return true

    } else {
        return false
    }
};

function capitalizeString(st){
    if (st.length <= 10 && st.length >= 1){
        return st.charAt(0).toUpperCase() + st.slice(1);
    } else {
        console.log('String length must be <= 10 characters')
    }

};

function main(){
    printNumbers(15);
    var a = checkDivision(6, 2, 3);
    console.log(a);
    var b = capitalizeString('hello!');
    console.log(b);
};

main();