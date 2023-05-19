import axios from "axios";
import React, { useState, useEffect } from "react";
const baseURL = `${process.env.REACT_APP_K8_HOST}/v1/k8/getResource`;

function Resources() {
  const [podreponse, setPodResponse] = useState([]);
  const [svcreponse, setSvcResponse] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(
        "response : " + response.data.podResponse.items[0].metadata.name
      );

      setPodResponse(response.data.podResponse.items);
      setSvcResponse(response.data.svcResponse.items);
      // setSvcResponse(response.data.svcResponse);
      console.log("Pod response : " + podreponse.items[0].metadata.name);
    });
  },[]);
  return (
    <>
      <div className="table tabletop">
        <table>
          <thead>
            <tr>
              <th>Pod Name</th>
              <th>PodIP</th>
              <th>Namespace</th>
              <th>Phase</th>
            </tr>
          </thead>
          <tbody>
            {podreponse.map((items) => (
              <tr>
                <td>{items.metadata.name}</td>
                <td>{items.status.podIP}</td>
                <td>{items.metadata.namespace}</td>
                <td>{items.status.phase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table tablebottom">
        <table>
          <thead>
            <tr>
              <th>Sevice Name</th>
              <th>Sevice type</th>
              <th>ClusterIP</th>
              <th>Namespace</th>
            </tr>
          </thead>
          <tbody>
            {svcreponse.map((items) => (
              <tr>
                <td>{items.metadata.name}</td>
                <td>{items.spec.type}</td>
                <td>{items.spec.clusterIP}</td>
                <td>{items.metadata.namespace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Resources