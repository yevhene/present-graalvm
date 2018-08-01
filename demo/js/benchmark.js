function isPrime(p) {
    const upper = Math.sqrt(p);
    for(let i = 2; i <= upper; i++) {
        if (p % i === 0 ) {
            return false;
        }
    }
    return true;
}

// Return n-th prime
function prime(n) {
    if (n < 1) {
        throw Error("n too small: " + n);
    }
    let count = 0;
    let result = 1;
    while(count < n) {
        result++;
        if (isPrime(result)) {
            count++;
        }
    }
    return result;
}

function run() {
  for(let i = 1; i < 10000; i++) {
    prime(i);
  }
}

console.log('Warmup started');
console.time('Warmup');
run();
console.timeEnd('Warmup');

console.log('Benchmark started');
console.time('Benchmark');
run();
console.timeEnd('Benchmark');
