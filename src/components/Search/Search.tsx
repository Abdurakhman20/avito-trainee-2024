import { ChangeEvent, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchQuery } from "../../store/slices/movieSlice";
import { MovieStatus } from "../../store/slices/movieSlice";

import { Input } from 'antd';

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.movie.status);

  const [searchValue, setSearchValue] = useState("");

  const updateSearchQuery = useCallback(
    debounce((value: string) => {
      dispatch(setSearchQuery(value));
      navigate("/");
    }, 350),
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
    />
  </> 
  );
}
 
export default Search;