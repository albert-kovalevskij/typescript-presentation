enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[1]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)

enum ShapeKind {
  Circle,
  Square,
}
 
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
 
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
 
// let c: Circle = {
//   kind: ShapeKind.Square,
//   radius: 100,
// };

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}

/**
 * The other change is that enum types themselves effectively 
 * become a union of each enum member. With union enums, 
 * the type system is able to leverage the fact that it knows the exact set of values
 * that exist in the enum itself. Because of that, 
 * TypeScript can catch bugs where we might be comparing values incorrectly. For example:
 */

enum E {
  Foo,
  Bar,
}
 
// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar) {

//   }
// }

/**
 * In modern TypeScript, you may not need an enum when an object with as const could suffice:
 */

 const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
 
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// Using the enum as a parameter
function walk(dir: EDirection) {}
 
// It requires an extra line to pull out the values
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}
 
walk(EDirection.Left);
run(ODirection.Right);