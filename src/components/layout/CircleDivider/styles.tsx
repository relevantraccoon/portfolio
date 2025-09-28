import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.palette.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.sections.normal};
`;

export const CirclesCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;