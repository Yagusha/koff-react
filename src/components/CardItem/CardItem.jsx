import s from './CardItem.module.scss'

export const CardItem = () => ( 
    <article className={s.card}>
        <a className={s.link} href="#">
            <img className={s.img} src='/public/img/photo.png' alt='фото товара'></img>
        </a>
        <div className={s.info}>
            <h3 className={s.title}>
                <a className={s.link} href="#">Кресло с подлокотниками</a>
            </h3>
            <p className={s.price}>5 000 ₽</p>
        </div>
        <button className={s.btn}>В корзину</button>
    </article>

)