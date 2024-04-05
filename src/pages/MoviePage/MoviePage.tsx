import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <PageWrapper>Movie page</PageWrapper>
    </>
  );
};

export default MoviePage;
