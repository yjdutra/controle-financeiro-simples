import { Container, Title, Icons, Amount, Content } from "./styles";

export function Resume({ title, Icon, value }) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Icons>
          <Icon />
        </Icons>
      </Content>
      <Amount>{value}</Amount>
    </Container>
  );
}
