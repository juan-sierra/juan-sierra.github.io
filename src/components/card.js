import React from "react";
import styled from "styled-components";

const CardContainer = styled.section`
  padding: 1.5em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const CardHolder = styled.article`
  border: 1px solid #eeee;
  padding: 20px;
  &::before {
    content: " ";
    background: pink;
    height: 100px;
    width: 100px;
    position: absolute;
    z-index: -1;
  }
`;

const CardHeader = styled.header``;

const Category = styled.span`
  border: 1px solid #eeee;
  border-radius: 20px;
  padding: 10px;
  margin-right: 10px;
`;

const CardBody = styled.div`
  padding-top: 20px;
`;

const Card = () => (
  <CardContainer>
    <CardHolder>
      <CardHeader>
        <h3>hello</h3>
        <Category>JavaScript</Category>
        <Category>HTML</Category>
        <Category>CSS</Category>
      </CardHeader>

      <CardBody>
        <p>another hello</p>
      </CardBody>
    </CardHolder>
    <CardHolder>
      <CardHeader>
        <h3>hello 2</h3>
        <Category>JavaScript</Category>
        <Category>HTML</Category>
        <Category>CSS</Category>
      </CardHeader>

      <CardBody>
        <p>another hello</p>
      </CardBody>
    </CardHolder>
    <CardHolder>
      <CardHeader>
        <h3>hello 3</h3>
        <Category>JavaScript</Category>
        <Category>HTML</Category>
        <Category>CSS</Category>
      </CardHeader>

      <CardBody>
        <p>another hello</p>
      </CardBody>
    </CardHolder>
  </CardContainer>
);

export default Card;
