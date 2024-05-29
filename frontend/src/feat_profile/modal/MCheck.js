import React from "react";
import Modal from '../../Modal';

const MCheck = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <h4>아직 프로필 생성을 위한 공감일기를 다 채우지 못 했습니다.</h4>
      <button className="modalOneButton" onClick={onClose}>확인</button>
    </Modal>
  );
}

export default MCheck;