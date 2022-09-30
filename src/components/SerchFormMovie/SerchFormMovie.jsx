import { useState } from "react";
import { Button, Input, Wrapper } from "./SerchFormMovie.styled";

const SerchFormMovie = ({setSearch}) => {
    const [searchInput, setSearchInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput.trim() === '') {
            alert('Please fill in the search field');
            return;
          }
        setSearch({ query: searchInput ,page: 1});
      };
    const handleChange = (e)=> {
        setSearchInput(e.target.value)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <Wrapper>
        <Input
          type="text"
          name="searchInput"
          value={searchInput}
          onChange={handleChange}
        />
        
        <Button type="submit">Search</Button>
       
        </Wrapper>
      </form>
      );
}
 
export default SerchFormMovie;