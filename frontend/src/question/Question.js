import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, Fab } from "@mui/material";
import React, { useState } from "react";

const Question = (props) => {
    const [item, setItem] = useState(props.item);

    const {output} = item;


    return (
        <React.Fragment>
        <ListItem>

            {/* id */}
            <ListItemText>
                <InputBase 
                    type="text"
                    id={item.questionId}
                    name="id"
                    value={item.questionId}
                />
            </ListItemText>

            {/* output - 답변 */} 
            <ListItemText>
                <h5>output: </h5>
                <InputBase 
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id}
                    name="output"
                    value={output}
                />
            </ListItemText>
        </ListItem>
        </React.Fragment>
    );
};

export default Question;