// function foo(a) {
        // console.log( a ); //22
// }
//
// foo( 2 );

function foo(a) {       
        var b = a;      // b-L
        return a + b;       
}

var c = foo( 2 );       //2-L c-R
