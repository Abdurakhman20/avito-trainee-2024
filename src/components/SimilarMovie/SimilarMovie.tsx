import { useRef } from "react";
import { Carousel, Button } from "antd";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons/lib/icons";
import { CarouselRef } from "antd/es/carousel";

import s from "./SimilarMovie.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { Movie } from "../../types/Movie";

type SimilarMovieProps = {
  data: Movie[]
}

const SimilarMovie = ({data}: SimilarMovieProps) => {
  const ref = useRef<CarouselRef>(null);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Похожие фильмы</h2>
      <Carousel slidesToShow={3} ref={ref} draggable>
        {data.map((item) => (
          <MovieCard {...item} />
        ))}
      </Carousel>
      <div className={s.controls}>
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

export default SimilarMovie;
