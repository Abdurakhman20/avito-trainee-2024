import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  console.log(id);
  return <>Movie page</>;
};

export default MoviePage;
