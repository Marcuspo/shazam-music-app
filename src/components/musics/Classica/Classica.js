import { useEffect, useState } from "react"
import { Container, Cards } from "./Styles"

import apiSha from "../../api/apiSha"
import { Image, Spin } from "antd"

function Classica(dados) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const response = apiSha
      .get("/", {
        params: {
          term: "Classica",
          locale: "pt-BR",
          limit: "10",
        },
      })
      .then((e) => {
        setData(e.data)
        console.log(e.data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
          {data && (
            <Container>
              {" "}
              {data.tracks.hits.map((dados) => (
                <Cards>
                  <Image src={dados.track.images.coverart} />
                  <p>{dados.track.share.subject}</p>
                </Cards>
              ))}
            </Container>
          )}
        </>
      )}
    </>
  )
}

export default Classica
