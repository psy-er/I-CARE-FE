import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`;

const ModalContent = styled.div`
background: white;
padding: 20px;
border-radius: 8px;
width: 250px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
z-index: 1001;
`;

const Modal = ({children, onClose}) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;