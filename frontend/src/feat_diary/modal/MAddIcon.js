import React, { useEffect, useState } from 'react';
import Modal from '../../Modal';
import '../css/modal/ModalOneButton.css';
import '../css/modal/MAddIcon.css';
import { getIconList } from '../api/api-icon';

const MAddIcon = (props) => {
  const isOpen = props.isOpen;
  const onChange = props.onChange;
  const onSubmit = props.onSubmit;
  const onClose = props.onClose;
  const diary = props.diary;
  const [icons, setIcons] = useState([]);
  const [selectedIconId, setSelectedIconId] = useState();

  useEffect(() => {
    getIconList(diary.content)
      .then(iconList => {
        if(iconList) {
          setIcons(iconList);
        }
      })
  }, [diary.content]);

  const handleIconClick = (iconId) => {
    setSelectedIconId(iconId);
    onChange({target: {name: 'iconId', value: iconId}});
  }

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <h4>오늘 하루를 아이콘으로 표현하면?</h4>
      <div className="modalIcons">
        {icons.map((icon) => 
          <div className={`modalIcon ${selectedIconId === icon.iconId ? 'selected' : ''}`}
            key={icon.iconId} onClick={() => handleIconClick(icon.iconId)}>
            {icon.font}
          </div>
        )}
      </div>
      <p className="modalP">다음 아이콘 중 하나를 선택해주세요!</p>
      <button className="modalOneButton" onClick={onSubmit}>확인</button>
    </Modal>
  );
}

export default MAddIcon;