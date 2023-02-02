import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
  letter-spacing: 5px;
  ${mobile({ fontSize: "50px" })}
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 40px;
  color: gray;
  ${mobile({ textAlign: "center", fontSize: "20px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding: 0 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: teal;
  }
  ${mobile({ padding: "0 5px" })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
