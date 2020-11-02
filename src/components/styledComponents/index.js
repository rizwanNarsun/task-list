import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  background-color: #333;
`;
const MyLink = styled.a`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const CancelButton = styled.button`
  color: red;
  margin: 0.5rem 1rem 0 auto;
  background-color: #333;
  border: none;
  display: block;
`;
const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 50%;

  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const List = styled.div`
  background-color: lightblue;
  margin: 20px;
  padding: 20px;
  font-size: 22px;
`;
const DelList = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 20px;
  font-size: 22px;
`;

export default {
  Container,
  MyLink,
  Button,
  Input,
  CancelButton,
  List,
  DelList,
};
