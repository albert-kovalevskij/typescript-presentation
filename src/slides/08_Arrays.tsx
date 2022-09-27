import { Slide, Heading, Text } from "spectacle";

const Arrays = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Arrays</Heading>
    <Text>
      To specify the type of an array like <code>[1, 2, 3]</code>, you can use
      the syntax <code>number[]</code>; this syntax works for any type (e.g.{" "}
      <code>string[]</code> is an array of strings, and so on). You may also see
      this written as <code>Array&lt;number&gt;</code>, which means the same
      thing. We’ll learn more about the syntax <code>T&lt;U&gt;</code> when we
      cover <i>generics</i>.
    </Text>
  </Slide>
);

export default Arrays;
