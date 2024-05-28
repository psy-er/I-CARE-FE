import React from 'react';
import Modal from '../../Modal';
import '../css/modal/MAddDiary.css';
import '../css/modal/ModalTwoButton.css';
import { useNavigate } from 'react-router-dom';

const MAddDiary = (props) => {
  const date = props.date;
  const stringDate = props.stringDate;
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const navigate = useNavigate();

  const onMoveToAdd = () => {
    onClose();
    navigate('/diary/add', {state: {date, stringDate}});
  }

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <h3>{stringDate}</h3>
      <p className="modalP">공감 일기를 작성하시겠습니까?</p>
      <div className="modalTwoButton">
        <button className="yes" onClick={onMoveToAdd}>예</button>
        <button className="no" onClick={onClose}>아니오</button>
      </div>
    </Modal>
  );
}

export default MAddDiary;