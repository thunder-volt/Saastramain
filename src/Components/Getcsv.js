import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_CSV = gql`
  query Query {
    getPAIDCSV
  }
`;

function Getcsv() {
  const { data, error, loading } = useQuery(GET_CSV);

  const downloadCsv = () => {
    // document.write(data?.getCSV);
    var downloadElement = document.createElement("a");
    downloadElement.href =
      "data:text/csv;charset=utf-8," + encodeURI(data?.getPAIDCSV);
    downloadElement.target = "_blank";
    downloadElement.download = `Data.csv`;
    downloadElement.click();
  };

  if (loading) {
    return <pre>Loading</pre>;
  }
  if (error) {
    return <pre>{error.message}</pre>;
  }
  if (data) {
    return (
      <div>
        <div>Get data</div>
        <button onClick={() => downloadCsv()}>Click here</button>
      </div>
    );
  }
}

export default Getcsv;
