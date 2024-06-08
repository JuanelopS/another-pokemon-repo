import { useState } from "react";
import { useAppContext, AppContextType } from "../providers/AppProvider";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const { dispatch } = useAppContext() as AppContextType;
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input") as HTMLInputElement;
    const searchValue = input.value;
    setSearch(searchValue);
    form.reset();
    dispatch({ type: "CHANGE_POKEMON", payload: searchValue });
    navigate(`/pokemon/${searchValue}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search any pokemon..."
          onChange={(e) => setSearch(e.target.value)}
          maxLength={25}
          required
        />
      </form>
    </>
  );
};

export default Search;
