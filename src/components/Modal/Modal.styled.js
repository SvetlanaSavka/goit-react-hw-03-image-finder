import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
`;

export const ModalWindow = styled.div`
  width: 100vw;
`;
