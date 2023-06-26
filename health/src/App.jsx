import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Notes from "./components/Notes";
import { Container } from "@mantine/core";
// import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fakeNotes = [];
    for (let index = 0; index < 10; index++) {
      fakeNotes.push({
        id: faker.datatype.uuid(),
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraph(),
      });
    }
    setNotes(fakeNotes);
  }, []);

  return (
    <Container>
      <Notes notes={notes} />
    </Container>
  );
}

export default App;