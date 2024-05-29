import React, { useState } from "react";
import "./css/QuestionHome.css";
import Select from 'react-select';

const options = [
    { value: '오래된순', label: '오래된순' },
    { value: '최신순', label: '최신순' }
  ];
  
  const customStyles = {
    option: (provided, state) => ({ // 오래된순, 최신순
      ...provided,
      backgroundColor: state.isFocused ? '#6271f5' : null,
      color: state.isFocused ? '#fff' : '#000',
      paddingLeft: 10,
      borderRadius: '2px',
      textAlign: 'center',
      fontSize: '12px',
    }),
    control: (provided) => ({ // 보이는 부분 (default=최신순)
      ...provided,
      borderRadius: '10px',
      textAlign: 'center',
      fontSize: '13px',
    }),
  };

const SelectOption = () => {
    const [sortOrder, setSortOrder] = useState(options[1]); // 기본값을 최신순으로 설정

    const handleSortChange = (selectedOption) => {
      setSortOrder(selectedOption);
    }; //오래된순 <-> 최신순 변경
    
    return (
        <div>
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          options={options}
          styles={customStyles}
          className="selectBox"
        />
        </div>
    )
}

export default SelectOption;