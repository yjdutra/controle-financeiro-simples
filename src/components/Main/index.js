import { Resume } from "../Resume";
import { InputAccount } from "../InputAccount";
import { Container, Content } from "./styles";

export function Main() {
  return (
    <Container>
      <Content>
        <Resume type={"input"} />
        <Resume type={"output"} />
        <Resume type={"total"} />
      </Content>

      <InputAccount />
    </Container>
  );
}
