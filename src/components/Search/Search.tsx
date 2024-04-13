import { ChangeEvent, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { useAppDispatch } from "../../store/hooks";
import { setSearchQuery } from "../../store/slices/movieSlice";

import { Input } from 'antd';

const Search = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");

  const updateSearchQuery = useCallback(
    debounce((value: string) => {
      dispatch(setSearchQuery(value));
    }, 350),
    []
  );

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    updateSearchQuery(event.target.value);
  }
  
  return ( 
  <>
    <Input.Search value={searchValue} onChange={(e) => onInputValueChange(e)} placeholder='seacrh movies...' size='large' />
  </> 
  );
}
 
export default Search;