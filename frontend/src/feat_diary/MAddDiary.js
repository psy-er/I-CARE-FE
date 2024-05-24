import React from 'react';
import Modal from '../Modal';
import './css/MAddDiary.css';

const MAddDiary = (props) => {
  const date = props.date;
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const onConfirm = props.onConfirm;

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <h3>{date}</h3>
      <p>공감 일기를 작성하시겠습니까?</p>
      <div className="check">
        <a href="/dariy/add" className="link" onClick={onConfirm}>예</a>
        <button onClick={onClose}>아니오</button>
      </div>
    </Modal>
  );
}

export default MAddDiary;