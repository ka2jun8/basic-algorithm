export function fibonacci(factor: number): number {
    let num = 0; 
    let answer = 0;
    let before1 = 0;
    let before2 = 0;
    while(num < factor) {
        if(answer === 0) {
            answer = 1;
        }
        else {
            before2 = before1;
            before1 = answer;
            answer = before1 + before2;
        }
        num++;
    }
    return answer;
}

let start, end;

const a = [];
start = +new Date();
a.push(fibonacci(1));
a.push(fibonacci(2));
a.push(fibonacci(3));
a.push(fibonacci(4));
a.push(fibonacci(5));
a.push(fibonacci(6));
a.push(fibonacci(39)); //63,245,986
end = +new Date();
console.log({a, time: end-start});

export function fibonacciRecursive(factor: number, times: number = 0, before1: number = 0, before2: number = 0): number {
    if(times === 0) {
        return fibonacciRecursive(factor, 1, 1, before1);
    }
    else if(times < factor) {
        let answer = before1 + before2;
        return fibonacciRecursive(factor, times+1, answer, before1);
    }
    else {
        return before1;
    }
}


const b = [];
start = +new Date();
b.push(fibonacciRecursive(1));
b.push(fibonacciRecursive(2));
b.push(fibonacciRecursive(3));
b.push(fibonacciRecursive(4));
b.push(fibonacciRecursive(5));
b.push(fibonacciRecursive(6));
b.push(fibonacciRecursive(39)); //63,245,986
end = +new Date();
console.log({b, time: end-start});

export function fibonacciEasiest(n: number) {
    if(n < 2) {
        return n;
    }
    else {
        return fibonacciEasiest(n-1) + fibonacciEasiest(n-2);
    }
}

const c = [];
start = +new Date();
c.push(fibonacciRecursive(1));
c.push(fibonacciRecursive(2));
c.push(fibonacciRecursive(3));
c.push(fibonacciRecursive(4));
c.push(fibonacciRecursive(5));
c.push(fibonacciRecursive(6));
c.push(fibonacciRecursive(39)); //63,245,986
end = +new Date();
console.log({c, time: end-start});
