import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  color: #999;
  pointer-events: none;
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-top: 5px;
  border: 1px solid #999;
  transition: 0.25s ease;
  outline: none;
  margin-bottom: 10px;
  &:not(:placeholder-shown) + .lable,
  &:focus + ${Label} {
    display: inline-block;
    padding: 0 10px;
    top: 6px;
    background-color: #fff;
    border-radius: 12px;
    transition: 0.25s ease;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid teal;
  padding: 15px 20px;
  background-color: transparent;

  border-radius: 4px;
  transition: 0.25s ease;
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Div>
            <Input placeholder="Enter your First name" />
          </Div>
          <Div>
            <Input placeholder="Enter your Last name" />
          </Div>
          <Div>
            <Input placeholder="Enter your Username" />
          </Div>
          <Div>
            <Input placeholder="Enter your Email" />
          </Div>
          <Div>
            <Input placeholder="Enter your Password" />
          </Div>
          <Div>
            <Input placeholder="Enter your Confirm password" />
          </Div>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
