import React, { useState } from "react";
import MAddProfile from "./modal/MAddProfile";
import MCheck from "./modal/MCheck";

const AddProfile = (props) => {
  const onUpdate = props.onUpdate;
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isCheckPopupOpen, setIsCheckPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsAddPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsAddPopupOpen(false);
    setIsCheckPopupOpen(false);
  }

  return (
    <div>
      <button onClick={handleOpenPopup} className="plus"><span>+</span> 0/5</button>
      <MAddProfile isOpen={isAddPopupOpen} onClose={handleClosePopup}
        onUpdate={onUpdate} />
      <MCheck isOpen={isCheckPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default AddProfile;