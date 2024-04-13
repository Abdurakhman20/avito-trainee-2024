import { useState, useEffect } from "react";
import { Select, Button } from "antd";
import { setFilterParams } from "../../store/slices/movieSlice";
import { useAppDispatch } from "../../store/hooks";

import s from "./Filter.module.css";
import { YEAR_OPTIONS, COUTRY_OPTIONS, AGE_OPTIONS } from "./options";
import type { FilterParams } from "../../types/FilterParams";

const Filter = () => {
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState<FilterParams>({
    year: "",
    country: "",
    age: "",
  });

  const handleYearChange = (value: string) => {
    setFilter((prevParams) => ({
      ...prevParams,
      year: value,
    }));
  };

  const handleCountryChange = (value: string) => {
    setFilter((prevParams) => ({
      ...prevParams,
      country: value,
    }));
  };

  const handleAgeChange = (value: string) => {
    setFilter((prevParams) => ({
      ...prevParams,
      age: value,
    }));
  };

  useEffect(() => {
    dispatch(setFilterParams(filter));
  }, [filter, dispatch]);

  const handleClickButton = () => {
    setFilter({
      year: "",
      country: "",
      age: "",
    });
  };

  return (
    <div className={s.select}>
      <h3 className={s.title}>Фильтр по:</h3>
      <div className={s.select_controls}>
        <div className={s.select_year}>
          <label htmlFor="year">Году</label>
          <Select
            id="year"
            style={{ width: 120 }}
            options={YEAR_OPTIONS}
            onChange={handleYearChange}
            value={filter.year}
          />
        </div>

        <div className={s.select_country}>
          <label htmlFor="country">Стране</label>
          <Select
            id="country"
            style={{ width: 200 }}
            options={COUTRY_OPTIONS}
            onChange={handleCountryChange}
            value={filter.country}
          />
        </div>

        <div className={s.select_age}>
          <label htmlFor="age">Возрасту</label>
          <Select
            id="age"
            style={{ width: 120 }}
            options={AGE_OPTIONS}
            onChange={handleAgeChange}
            value={filter.age}
          />
        </div>
      </div>
      <div>
        <Button type="primary" onClick={handleClickButton}>
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );
};

export default Filter;
