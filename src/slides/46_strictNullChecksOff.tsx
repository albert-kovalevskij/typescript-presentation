import { Slide, Text, Heading } from "spectacle";

const StrictNullChecksOff = () => (
  <Slide backgroundColor="white">
    <Heading color="black">
      <code>strictNullChecks</code> off
    </Heading>
    <Text fontSize="30px">
      With strictNullChecks <em>off</em>, values that might be <code>null</code> or{" "}
      <code>undefined</code> can still be accessed normally, and the values{" "}
      <code>null</code> and <code>undefined</code> can be assigned to a property
      of any type. This is similar to how languages without null checks (e.g.
      C#, Java) behave. The lack of checking for these values tends to be a
      major source of bugs; we always recommend people turn strictNullChecks on
      if it’s practical to do so in their codebase.
    </Text>
  </Slide>
);

export default StrictNullChecksOff;
