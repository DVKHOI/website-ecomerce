import styled from "styled-components";
import { categories } from "../data";
import { mobile, tablet } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
  ${mobile({ padding: "0px", flexDirection: "column" })}
  ${tablet({ padding: "0px", flexDirection: "column", marginTop: "20px" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.length > 0 &&
        categories.map((item) => (
          <CategoryItem key={item.id} item={item}></CategoryItem>
        ))}
    </Container>
  );
};

export default Categories;
