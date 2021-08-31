import { useState } from "react";

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("").then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);
  return (
    <form action="">
      <input
        type="text"
        value={param.name}
        onChange={(evt) => {
          setParam({ ...param, name: evt.target.value });
        }}
      />
      <select
        value={param.personId}
        onChange={(evt) =>
          setParam({
            ...personId,
            personId: evt.target.value,
          })
        }
      >
        <option value={""}>负责人</option>
      </select>
    </form>
  );
};
