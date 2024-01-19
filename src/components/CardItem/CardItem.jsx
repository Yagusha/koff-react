import s from './CardItem.module.scss'
import { Link } from "react-router-dom";

export const CardItem = ({ name, price,images: [image], id}) => ( 
    <article className={s.card}>

        <div className={s.content}>
            <Link className={s.link} to={`/product/${id}`}>
                <img className={s.img} src={`https://koff-api.vercel.app/${image}`} alt={name}></img>
            </Link>
            <div className={s.info}>
                <h3 className={s.title}>
                    <Link className={s.link} to={`/product/${id}`}>{name}</Link>
                </h3>
                <p className={s.price}>{price.toLocaleString()} ₽</p>
            </div>         
        </div>
        <button className={s.btn}>В корзину</button>
    </article>

)