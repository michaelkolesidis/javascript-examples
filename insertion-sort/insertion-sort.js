/* Insertion Sort 
 *
 * The function runs four times, each time sorting
 * an array of n size. It outputs the time needed
 * to sort the array each time, illustrating the 
 * fact that when n increases by 4, time increases 
 * by 4^2.
 */

function iS() {

    let n;

    for (n = 100000; n <= 400000; n += 100000) {

        const A = new Array(n);

        let k;
        for (k = 0; k < n; k++) {
            A[k] = Math.floor(Math.random() * (1000 - 1) + 1);
        }

        function insertionSort(arr) {
            let key, i, j;
            for (j = 1; j < arr.length; j++) {
                key = arr[j];
                i = j - 1;
                while (i >= 0 && arr[i] > key) {
                    arr[i + 1] = arr[i];
                    i = i - 1;
                }
                arr[i + 1] = key;
            }
        }

        t = performance.now();

        let t0 = performance.now();
        insertionSort(A);
        let t1 = performance.now();

        console.log(`For n = ${A.length} insertionSort took ${t1 - t0} milliseconds.`);
    }
}
