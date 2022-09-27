import { Slide, FlexBox, Heading } from "spectacle";
import { ReactComponent as TypescriptLogo1 } from "../assets/typescript-logo1.svg";

const Slide02 = () => (
  <Slide backgroundColor="black">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" fontSize="150px">
        ✨<TypescriptLogo1 height={100} width={500} />✨
      </Heading>
      <Heading margin="0px" fontSize="h3">
        TypeScript is a strongly typed programming language that builds on
        JavaScript, giving you better tooling at any scale.
      </Heading>
    </FlexBox>
  </Slide>
);

export default Slide02;
