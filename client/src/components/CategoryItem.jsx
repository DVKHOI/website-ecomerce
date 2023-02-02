import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 0 5px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
  ${tablet({ height: "40vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  color: white;
  letter-spacing: 2px;
  padding: 15px 0;
`;
const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #e0eafc 0%,
    #cfdef3 51%,
    #e0eafc 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  display: block;
  border: none;
  cursor: pointer;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
