import { useParams } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";

const MoviePage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Wrapper>Movie page</Wrapper>
    </>
  );
};

export default MoviePage;
