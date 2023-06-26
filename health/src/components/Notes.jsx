
import Note from "./Note";
import PropTypes from "prop-types";
import { Accordion } from "@mantine/core";

function Notes(props) {
  const { notes } = props;

  return (
    <Accordion chevronPosition="left">
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </Accordion>
  );
}

export default Notes;

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};