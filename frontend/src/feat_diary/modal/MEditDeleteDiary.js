import React from 'react';
import Modal from '../../Modal';
import '../css/modal/ModalTwoButton.css';
import { deleteDiary } from '../api/api-diary';
import { useNavigate } from 'react-router-dom';

const MEditDeleteDiary = (props) => {
  const navigate = useNavigate();
  const isOpen = props.isOpen.isOpen;
  const type = props.isOpen.type;
  const onClose = props.onClose;
  const stringDate = props.stringDate;
  const diary = props.diary;
  const date = props.date;

  const onEdit = () => {
    navigate('/diary/add', {state: {diary, date, stringDate}});
  }

  const onDelete = () => {
    onClose();
    deleteDiary(diary)
      .then(response => {
        if(response){
          const deletedDate = response;
          navigate('/diary', {state: {deletedDate}});
        }
      })
  }

  if(!isOpen) return null;
  if(type === "수정") {
    return (
      <Modal onClose={onClose} className="modal">
        <h3>{stringDate}</h3>
        <p>공감 일기를 수정하시겠습니까?</p>
        <div className="modalTwoButton">
          <button className="yes" onClick={onEdit}>수정</button>
          <button className="no" onClick={onClose}>취소</button>
        </div>
      </Modal>
    );
  } else if(type === "삭제") {
    return (
      <Modal onClose={onClose} className="modal">
        <h3>{stringDate}</h3>
        <p>공감 일기를 삭제하시겠습니까?</p>
        <div className="modalTwoButton">
          <button className="yes" onClick={onDelete}>삭제</button>
          <button className="no" onClick={onClose}>취소</button>
        </div>
      </Modal>
    );
  }
};

export default MEditDeleteDiary;