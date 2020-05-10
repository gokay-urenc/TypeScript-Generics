function value(x: number): number {
    return x;
}

function value2(x: string): string {
    return x;
}

let number = value(10);
console.log(number);

let city = value2('Los Angeles');
console.log(city);

function value3<T>(x: T): T {
    return x;
}
let number2 = value3<number>(2);
let city2 = value3<string>("New York");

class GenericClass<T> {
    variable: T;
    function(parameter: T): T {
        return parameter;
    }
}

let y = new GenericClass<string>();
y.function('Los Angeles');