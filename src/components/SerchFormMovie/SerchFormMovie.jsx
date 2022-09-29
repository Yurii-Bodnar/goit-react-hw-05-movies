import { useState } from "react";
import { Button, Input, Wrapper } from "./SerchFormMovie.styled";


const SerchFormMovie = ({setSearch}) => {
    const [searchInput, setSearchInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    
        setSearch({ query: searchInput });
      };
    const handleChange = (e)=> {
        setSearchInput(e.target.value)
    }
    return ( <Wrapper>
        <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchInput"
          value={searchInput}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
    </Wrapper>  );
}
 
export default SerchFormMovie;