import { Resume } from "../Resume";
import { Form } from "../Form";
import { Container, Content } from "./styles";

export function Main() {
  return (
    <Container>
      <Content>
        <Resume type={"input"} />
        <Resume type={"output"} />
        <Resume type={"total"} />
      </Content>

      <Form />
    </Container>
  );
}
