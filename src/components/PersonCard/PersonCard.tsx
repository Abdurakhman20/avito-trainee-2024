import { Person } from "../../types/Person";
import s from "./PersonCard.module.css";


const PersonCard = (person: Person) => {
  const {photo, description, name, profession} = person;
  return (
    <li className={s.person}>
      <div className={s.person_img_wrapper}>
        <img className={s.person_img} src={photo} alt="img" />
      </div>
      <div className={s.person_info}>
        {
          description && <p className={s.person_character}>Персонаж:<br/> {description}</p>
        }
        <p className={s.person_name}>{profession}:<br /> {name}</p>
      </div>
    </li>
  );
};

export default PersonCard;