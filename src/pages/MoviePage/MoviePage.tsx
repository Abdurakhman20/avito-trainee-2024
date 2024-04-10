import Wrapper from "../../components/Wrapper/Wrapper";
import { useParams } from "react-router-dom";

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
