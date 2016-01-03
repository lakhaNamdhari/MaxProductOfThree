// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var max1, max2, max3, min1, min2, i, temp, prod1, prod2;

    for ( i = 0; i < A.length; i++ ){
        // find max 3 numbers
        if ( max1 === undefined || A[i] > max1 ){
            if ( max1 === undefined ){
                max1 = A[i];
            }else{
                temp = max1;
                max1 = A[i];
                max3 = max2;
                max2 = temp;                
            }
        }else if ( max2 === undefined || A[i] > max2 ){
            if ( max2 === undefined ){
                max2 = A[i];
            }else{
                temp = max2;
                max2 = A[i];
                max3 = temp;             
            }
        }else if ( max3 === undefined || A[i] > max3 ){
            max3 = A[i];
        }

        // find min 2 numbers
        if ( min1 === undefined || A[i] < min1 ){
            if ( min1 === undefined ){
                min1 = A[i];
            }else{
                temp = min1;
                min1 = A[i];
                min2 = temp;             
            }
        }else if ( min2 === undefined || A[i] < min2 ){
            min2 = A[i];
        }
    }
    
    prod1 =  max1 * max2 * max3;
    prod2 =  max1 * min1 * min2;

    return prod1 > prod2 ? prod1 : prod2;
}