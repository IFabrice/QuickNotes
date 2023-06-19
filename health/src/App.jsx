
import {userState}  from "react";

function App() {
  const [notes, setNotes] = userState([
    {
      title:  "Shopping",
      text: "Buy milk!"
    },
    {
      title: "Study",
      text: "Review react notes"
    }
  ]);

  return (
    <>
      {
        notes.map(note => (
          <div>
            <p>{note.title}</p>
            <p>{note.text}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;