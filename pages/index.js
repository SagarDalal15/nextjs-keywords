import { getAllRecords } from "../helpers/api-utils";
import HomePage from "../components/home-page";

export default function Home(props) {
  return (
    <div>
      <HomePage recordsData={props.records.data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await getAllRecords();
  return {
    props: {
      records: data,
    },
    revalidate: 3000,
  };
};
