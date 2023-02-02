import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  outline: none;
`;
const Option = styled.option``;
const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const locaiton = useLocation();
  const category = locaiton.pathname.split("/")[2];
  const handleFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Layout>
      <Container>
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select defaultValue={"Color"} name="color" onChange={handleFilter}>
              <Option disabled>Color</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>White</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
              <Option>Black</Option>
            </Select>
            <Select defaultValue={"Size"} name="size" onChange={handleFilter}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price(asc)</Option>
              <Option value="desc">Price(desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort}></Products>
        <Newsletter></Newsletter>
      </Container>
    </Layout>
  );
};

export default ProductList;
