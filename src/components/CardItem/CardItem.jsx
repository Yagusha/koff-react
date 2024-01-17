import s from './CardItem.module.scss'

export const CardItem = ({ name, price,images: [image], id}) => ( 
    <article className={s.card}>

        <div className={s.content}>
            <a className={s.link} href={`/product/${id}`}>
                <img className={s.img} src={`https://koff-api.vercel.app/${image}`} alt={name}></img>
            </a>
            <div className={s.info}>
                <h3 className={s.title}>
                    <a className={s.link} href={`/product/${id}`}>{name}</a>
                </h3>
                <p className={s.price}>{price.toLocaleString()} ₽</p>
            </div>         
        </div>
        <button className={s.btn}>В корзину</button>
    </article>

)