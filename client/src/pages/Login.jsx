import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  border-radius: 10px;
  border: 0.5px solid #ccc;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  width: 40%;
  border: 1px solid teal;
  padding: 15px 20px;
  background-color: transparent;
  border-radius: 4px;
  transition: 0.25s ease;
  cursor: pointer;
  margin: 10px auto;
  &:hover {
    background-color: teal;
    color: white;
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: teal;
  }
`;
const Error = styled.span`
  color: red;
`;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Enter your Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Enter your Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Error>Username or password not valid</Error>}
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
          {/* to={navigate("/register")} */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
