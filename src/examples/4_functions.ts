/* eslint-disable @typescript-eslint/no-unused-vars */
function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
  if (!a && !b) {
    return {x: undefined, y: undefined}
  }

  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }

  return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))

/**
 * Equality narrowing
 * TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to 
 * narrow types. For example:
 */
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

/**
 * The in operator narrowing
 * 
JavaScript has an operator for determining if an object has a property with a name: 
the in operator. TypeScript takes this into account as a way to narrow down potential types.
 *
For example, with the code: "value" in x. where "value" is a string literal and x is a union type.
The “true” branch narrows x’s types which have either an optional or required property value,
and the “false” branch narrows to types which have an optional or missing property value.
 */
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}