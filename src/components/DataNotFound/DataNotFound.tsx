import s from "./DataNotFound.module.css";

const DataNotFound = () => {
  return (
    <div className={s.content_wrapper}>
      <h2 className={s.content_title}>
        Нет данных<span>😕</span>
      </h2>
      <p className={s.content_text}>
        К сожалению по вашему запросу не удалось получить данные.
      </p>
    </div>
  );
};

export default DataNotFound;
