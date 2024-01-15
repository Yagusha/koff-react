import s from "./DeveloperList.module.scss";

export const DeveloperList = () => (
  <ul className={s.developer}>
    <li className={s.item}>
      Designer:&nbsp;
      <a className={s.link} href="#" target="_blank" rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li>
      Developer:&nbsp;
      <a className={s.link} href="#" target="_blank" rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
  </ul>
);
