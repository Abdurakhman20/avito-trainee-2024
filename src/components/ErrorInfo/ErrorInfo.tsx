import s from "./ErrorInfo.module.css";

const ErrorInfo = () => {
  return (
    <div className={s.error_wrapper}>
      <h2 className={s.error_title}>
        Произошла Ошибка <span>😕</span>
      </h2>
      <p className={s.error_text}>
        К сожалению при получении данных с сервера произошла ошибка,
        <br /> наши специалисты уже решают эту проблему!
      </p>
    </div>
  );
};

export default ErrorInfo;
