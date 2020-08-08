import styled from "styled-components";
import media from "styled-media-query";
import { Modal } from "@joaowillamy-test-quero/core";

export const CustomModal = styled(Modal)`
  padding: 20px;
`;

export const ModalCol = styled.div`
  width: 100%;
  margin-top: 20px;

  ${media.greaterThan("medium")`
    width: 50%;
    padding: 10px;
    display: inline-block;
    margin-top: 10px;
  `}
`;
