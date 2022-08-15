import { Container, Title, Icon, Amount, Content } from "./styles";

import { IconInput, IconOutput, IconDollar } from "../../../styles/icons";

export function Resume(prop) {
  switch (prop.type) {
    case "input":
      return (
        <Container>
          <Content>
            <Title>Movimentação</Title>
            <Icon>
              <IconInput />
            </Icon>
          </Content>
          <Amount>R$ 200,00</Amount>
        </Container>
      );

    case "output":
      return (
        <Container>
          <Content>
            <Title>Movimentação</Title>
            <Icon>
              <IconOutput />
            </Icon>
          </Content>
          <Amount>R$ 200,00</Amount>
        </Container>
      );

    case "total":
      return (
        <Container>
          <Content>
            <Title>Movimentação</Title>
            <Icon>
              <IconDollar />
            </Icon>
          </Content>
          <Amount>R$ 200,00</Amount>
        </Container>
      );
  }
}
