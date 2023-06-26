import PropTypes from "prop-types";
import { Accordion, ActionIcon, Box } from "@mantine/core";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NoteControl(props) {

  const { note, remove } = props;
  const navigate = useNavigate();

  const dataSet = {
    id: note.id,
    title: note.title,
    text: note.text
  };

  const handleOnRemove = () => {
    remove(note.id);
  };

  const handleOnEdit = () => {
    // navigate("/edit");
    navigate("/edit", {state: dataSet});
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Accordion.Control>{note.title}</Accordion.Control>
      <ActionIcon onClick={handleOnEdit} size="lg">
        <FaEdit size ={16} />
      </ActionIcon>
      <ActionIcon onClick={handleOnRemove} size="lg">
        <FaTrash size={16} />
      </ActionIcon>
    </Box>
  );
}

export default NoteControl;

NoteControl.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
