import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ marginLeft: "10px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  ${mobile({ width: "60px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const getName = (name) => {
    let newName = name.toLowerCase().charAt(0).toUpperCase();
    let oldName = name.toLowerCase().slice(1);
    return `${newName}${oldName}`;
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon
              style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to={"/"}>TIKA SHOP</Link>
          </Logo>
        </Center>
        <Right>
          {!user ? (
            <>
              <MenuItem>REGISTER</MenuItem>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <div>Welcome to {getName(user.username)}</div>
          )}

          <Link to="/carts">
            <MenuItem>
              <Badge
                overlap="rectangular"
                badgeContent={quantity}
                color="primary"
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
