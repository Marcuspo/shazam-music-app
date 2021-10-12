import { Button, Input } from "antd"

import { useState } from "react"
import api from "./api/api"
import openApi from "./api/apiTemp"

import Rock from "./musics/Rock/Rock"
import Classica from "./musics/Classica/Classica"
import Pop from "./musics/Pop/Pop"
import Lofi from "./musics/Lofi/Lofi"

import { NavBar, TextNav, ContainerInput, Musicas } from "./Style"

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [temp, setTemp] = useState("")
  const [error, setError] = useState("")

  async function changeSearch(event) {
    event.preventDefault()
    setSearch(event.target.value)
    console.log(search)
  }

  async function fetchData(e) {
    // eslint-disable-next-line
    const response = await api
      .get(`/weather?q=${search}&appid=${openApi}&units=metric`)
      .then((e) => {
        setData(e.data)
        console.log(e)
        setTemp(e.data.main.temp)
        setError("")
      })
      .catch((error) => {
        setError(error.message)
        setTemp("")
      })
  }

  return (
    <div className="App">
      <NavBar>
        <TextNav>Músicas!!!</TextNav>
      </NavBar>

      <ContainerInput>
        <form>
          <Input
            placeholder="Digite sua cidade"
            value={search}
            onChange={changeSearch}
            style={{ fontSize: 20 }}
            onPressEnter={(e) => {
              e.preventDefault()
            }}
          />
          <Button
            style={{ fontSize: 19, marginTop: 15 }}
            type="primary"
            size="large"
            onClick={fetchData}
          >
            Buscar músicas
          </Button>
        </form>
        <Musicas>
          {(() => {
            if (temp >= 32) {
              return <Rock dados={data} />
            } else if (temp < 32 && temp >= 24) {
              return <Pop dados={data} />
            } else if (temp < 24 && temp > 16) {
              return <Classica dados={data} />
            } else if (temp < 16 && temp > 0) {
              return <Lofi dados={data} />
            }
          })()}
          <br />
        </Musicas>
        {error}
      </ContainerInput>
    </div>
  )
}

export default App
