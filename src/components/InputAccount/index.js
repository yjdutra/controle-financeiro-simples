import { Container, Describe, Value, Type, Add, Label } from "./styles";

export function InputAccount() {
  return (
    <Container>
      <Describe placeholder="Descrição" />
      <Value placeholder="Valor" />

      <Label>
        <Type />
        Saida
      </Label>

      <Label>
        <Type />
        Entrada
      </Label>

      <Add> Send </Add>
    </Container>
  );
}
