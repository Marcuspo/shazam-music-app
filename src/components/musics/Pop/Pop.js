import { useEffect, useState } from "react"
import { Container, Cards, BadgeInicial } from "../../Styles"

import apiSha from "../../api/apiSha"
import { Badge, Image, Spin } from "antd"
import { LinkOutlined } from "@ant-design/icons/lib/icons"

function Pop(dados) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    // eslint-disable-next-line
    const response = apiSha
      .get("/", {
        params: {
          term: "Pop",
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
          <BadgeInicial>
            <h1> Estilo musical: Pop</h1>
            Temperatura:
            <Badge
              className="site-badge-count-109"
              count={`${dados.dados.main.temp.toFixed(0)}º`}
              style={{ backgroundColor: "#52c41a" }}
            />
          </BadgeInicial>
          {data && (
            <Container>
              {data.tracks.hits.map((dados) => (
                <Cards>
                  <Image src={dados.track.images.coverart} />
                  <p>
                    {dados.track.share.subject} -{" "}
                    <a
                      href={dados.track.share.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkOutlined />
                    </a>
                  </p>
                </Cards>
              ))}
            </Container>
          )}
        </>
      )}
    </>
  )
}

export default Pop
