import axios from "axios";
import { useEffect, useState } from "react";

import { CardWrapperStyle, Wrapper } from "../styles/CardStyle";
import { API_OPTIONS } from "../utils/api_options";
import Card from "./Card";

export default function CardWrapper() {
  const urls = API_OPTIONS;
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  let endpoints = [];

  urls.forEach((url) => {
    endpoints = [
      ...endpoints,
      {
        service: url,
        url: "https://api.factoryfour.com/" + url + "/health/status",
      },
    ];
  });

  const fetchAPI = () => {
    setLoading(true);
    axios
      .all(
        endpoints.map((endpoint) =>
          axios
            .get(endpoint.url)
            .then((data) =>
              setServices((service) => [
                ...service,
                { data: data.data, name: endpoint.service },
              ])
            )
            .catch(() => setError(endpoint))
        )
      )
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAPI();
    setInterval(() => {
      setServices([]);
      fetchAPI();
    }, 15000);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <CardWrapperStyle>
        {!loading && <Card services={services} />}
      </CardWrapperStyle>
    </Wrapper>
  );
}
