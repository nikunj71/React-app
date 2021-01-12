import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const TogoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <DeleteIcon
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <EditIcon
          onClick={() => {
            props.onupdate(props.id);
          }}
        />

        {<li>{props.text}</li>}
      </div>
    </>
  );
};
export default TogoList;
