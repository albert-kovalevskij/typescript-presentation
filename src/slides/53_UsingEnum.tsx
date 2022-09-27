import { Slide, Text, CodePane } from "spectacle";

const UsingEnum = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      Using an enum is simple: just access any member as a property off of the
      enum itself, and declare types using the name of the enum:
    </Text>
    <CodePane language="typescript">{`
    enum UserResponse {
      No = 0,
      Yes = 1,
    }
     
    function respond(recipient: string, message: UserResponse): void {
      // ...
    }
     
    respond("Princess Caroline", UserResponse.Yes);
    `}</CodePane>
    <a href="https://www.typescriptlang.org/play/#code/KYOwrgtgBAqgzsATgJWHADgexAqBvAKCigDlMoBeKABgBoioBNNSqARnoF8CCAzMEAGMALgEtsURGiwgAJgAopg0elGhhALihxhiUSADmtKBDRwAhgeBb4SVBmwIAlFoBumUbPwMA9D6gAdEEE3ARSDnLyAEQACnpCZlAAwuaImAA2+sBRxrYo0o7AAcxwTgDcQA">Try it</a>
  </Slide>
);

export default UsingEnum;
