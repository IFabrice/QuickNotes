import { IconNote } from "@tabler/icons-react";
import { Grid, Button, Group } from "@mantine/core";
import Search from "./Search";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Toggle from "./Toggle";

function Header(props) {
  const { query, setQuery, add } = props;
  const navigate = useNavigate();

  const handleOnClick = () => {
    const { id, title, text } = add();

    navigate("/edit", { state: { id, title, text, mode: "remove-on-cancel" } });
  };

  return (
    <Grid>
      {/* <Grid.Col span={10}> */}
      <Grid.Col span={9}>
        <Search query={query} setQuery={setQuery} />
      </Grid.Col>
      {/* <Grid.Col span={2}> */}
      <Grid.Col span={3}>
        <Group position="right">
          <Button
            onClick={handleOnClick}
            fullWidth
            variant="default"
            leftIcon={<IconNote />}
          >
            Add Note
          </Button>
          <Toggle />
        </Group>
      </Grid.Col>
    </Grid>
  );
}

export default Header;

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
  add: PropTypes.func,
};
