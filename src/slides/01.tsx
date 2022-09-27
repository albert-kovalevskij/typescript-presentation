import { FlexBox, Slide } from "spectacle";
import { ReactComponent as TypescriptLogo } from "../assets/typescript-logo.svg";

const Slide01 = () => (
  <Slide backgroundColor="black">
    <FlexBox height="100%">
      <TypescriptLogo width={500} height={500} />
    </FlexBox>
  </Slide>
);

export default Slide01;