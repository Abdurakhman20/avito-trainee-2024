import { useRef } from "react";
import { Carousel, Button } from "antd";
import s from "./PostersCarousel.module.css";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons/lib/icons";
import { CarouselRef } from "antd/es/carousel";
import { Poster } from "../../types/Movie";

type CarouselProps = {
  data: Poster[];
};

const PostersCarousel = ({ data }: CarouselProps) => {
  const ref = useRef<CarouselRef>(null);

  return (
    <div className={s.posters}>
      <h2 className={s.posters_title}>Постеры</h2>
      <Carousel ref={ref} draggable>
        {data.map((item) => (
          <div className={s.poster_img_wrapper}>
            <img className={s.poster_img} src={item.url} alt="img" />
          </div>
        ))}
      </Carousel>
      <div className={s.poster_controls}>
        <Button
          onClick={() => ref.current?.prev()}
          className={s.left_btn}
          icon={<CaretLeftOutlined />}
          shape="circle"
          size="large"
        />
        <Button
          onClick={() => ref.current?.next()}
          className={s.right_btn}
          icon={<CaretRightOutlined />}
          shape="circle"
          size="large"
        />
      </div>
    </div>
  );
};

export default PostersCarousel;
