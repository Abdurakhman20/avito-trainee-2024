import { ChangeEvent, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import debounce from "lodash.debounce";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchQuery, MovieStatus } from "../../store/slices/movieSlice";
import { Input } from 'antd';

const Search = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.movie);

  const [searchValue, setSearchValue] = useState("");

  const updateSearchQuery = useCallback(
    debounce((value: string) => {
      dispatch(setSearchQuery(value));
    }, 1000),
    []
  );

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    updateSearchQuery(event.target.value);
  }
  
  return ( 
  <>
    <Input.Search 
      value={searchValue} 
      onChange={(e) => onInputValueChange(e)} 
      placeholder='seacrh movies...' 
      size='large'
      enterButton 
      loading = {status === MovieStatus.LOADING}
      hidden={ location.pathname !== "/" }
    />
  </> 
  );
}
 
export default Search;