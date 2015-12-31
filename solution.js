// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var f, s, t, i, temp;

    for ( i = 0; i < A.length; i++ ){

        if ( f === undefined || A[i] > f ){
            if ( f === undefined ){
                f = A[i];
            }else{
                temp = f;
                f = A[i];
                t = s;
                s = temp;                
            }
        }else if ( s === undefined || A[i] > s ){
            if ( s === undefined ){
                s = A[i];
            }else{
                temp = s;
                s = A[i];
                t = temp;             
            }
        }else if ( t === undefined || A[i] > t ){
            t = A[i];
        }
    }
    
    return f * s * t;
}