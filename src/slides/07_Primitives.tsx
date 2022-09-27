import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Notes,
  Text,
} from "spectacle";

const Primitives = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Primitives</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          <code>string</code> represents string values like{" "}
          <code>"Hello, world"</code>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <code>number</code> is for numbers like <code>42</code>. JavaScript
          does not have a special runtime value for integers, so there’s no
          equivalent to <code>int</code> or <code>float</code> - everything is
          simply <code>number</code>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <code>boolean</code> is for the two values <code>true</code> and{" "}
          <code>false</code>
        </ListItem>
      </Appear>
    </UnorderedList>
    <Notes>
      <Text color="white">
        JavaScript has three very commonly used primitives: <code>string</code>,{" "}
        <code>number</code>, and <code>boolean</code>. Each has a corresponding
        type in TypeScript. As you might expect, these are the same names you’d
        see if you used the JavaScript typeof operator on a value of those
        types:
      </Text>

      <Text color="white">
        The type names <code>String</code>, <code>Number</code>, and{" "}
        <code>Boolean</code> (starting with capital letters) are legal, but
        refer to some special built-in types that will very rarely appear in
        your code. Always use <code>string</code>, <code>number</code>, or
        <code>boolean</code> for types.
      </Text>
    </Notes>
  </Slide>
);

export default Primitives;
