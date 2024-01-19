import { Container } from "../../views/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import s from "./Card.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice";

export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.product);
  console.log("data", data);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>Кресло с подлокотниками</h2>
        <div className={s.content}>
          <div className={s.sliders}>
            <div className={s.mainSwiper}>
              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={24}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={setMainSwiper}>
                <SwiperSlide>
                  <img src="../../../public/img/photo.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../../public/img/photo.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../../public/img/photo.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../../public/img/photo.png"></img>
                </SwiperSlide>
              </Swiper>
              <button onClick={() => mainSwiper.slidePrev()}>prev</button>
              <button onClick={() => mainSwiper.slideNext()}>next</button>
            </div>
            <div className={s.thumbsSwiper}>
              <Swiper
                modules={[Thumbs]}
                spaceBetween={16}
                slidesPerView={4}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}>
                <SwiperSlide>
                  <img src="../../../public/img/photo.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../../public/img/photo.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../../public/img/photo.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../../public/img/photo.png"></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className={s.info}>
            <p className={s.price}>{"5000".toLocaleString()} ₽</p>
            <p className={s.article}>арт. 84348945757</p>

            <div className={s.characteristics}>
              <h3>Общие характеристики</h3>

              <div className={s.attribute}>
                <div className={s.attributeName}>Тип</div>
                <div className={s.attributeValue}>Прямой диван</div>

                <div className={s.attributeName}>Ширина, см</div>
                <div className={s.attributeValue}>170</div>

                <div className={s.attributeName}>Глубина, см</div>
                <div className={s.attributeValue}>65</div>

                <div className={s.attributeName}>Высота, см</div>
                <div className={s.attributeValue}>80</div>

                <div className={s.attributeName}>Бренд</div>
                <div className={s.attributeValue}>MAI HE MAI</div>
              </div>
            </div>
            <button className={s.btn}>В корзину</button>
          </div>
        </div>
      </Container>
    </section>
  );
};
