import React from 'react';
import Modal from '../../Modal';
import '../css/modal/ModalOneButton.css';
import { deleteDiary } from '../api/api-diary';
import { useNavigate } from 'react-router-dom';

const MDeleteDiary = (props) => {
  const navigate = useNavigate();
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const stringDate = props.stringDate;
  const diary = props.diary;

  const onDelete = () => {
    onClose();
    deleteDiary(diary)
      .then(response => {
        if(response){
          navigate('/diary');
        }
      })
  }

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose} className="modal">
      <h3>{stringDate}</h3>
      <p>공감 일기를 삭제하시겠습니까?</p>
      <button className="modalOneButton" onClick={onDelete}>삭제</button>
    </Modal>
  );
};

export default MDeleteDiary;