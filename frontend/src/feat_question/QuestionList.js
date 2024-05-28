import {ListItem, ListItemText, InputBase } from "@mui/material";
import React, { useState } from "react";

const QuestionList = (props) => {
    const [item, setItem] = useState(props.item);



    return (
        <React.Fragment>
        <ListItem>
            
            {/* output - 답변 */} 
            <ListItemText>
                <InputBase 
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id}
                    name="output"
                    value={item.output}
                />
            </ListItemText>

        </ListItem>
        </React.Fragment>
    );
};

export default QuestionList;