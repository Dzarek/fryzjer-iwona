import React from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import styled from "styled-components";

const Gallery = () => {
  return (
    <Wrapper className="page">
      <ElfsightWidget widgetID="a2a8f83c-3b64-4955-8980-cc9fe7c9c8bb" />;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #222;
`;

export default Gallery;

// a2a8f83c-3b64-4955-8980-cc9fe7c9c8bb
