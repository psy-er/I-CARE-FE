import React from 'react';
import Modal from '../../Modal';
import '../css/modal/MAddQuestion.css';
import '../css/modal/ModalOneButton.css';

const MAddQuestion = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;


  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <p className="modalP">오늘의 일기를 작성하셨습니다.</p>
      <div className="modalOneButton">
        <button onClick={onClose}>닫기</button>
      </div>
    </Modal>
  );
}

export default MAddQuestion;