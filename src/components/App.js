import { Button, Input } from "antd"

import { useState } from "react"
import api from "./api/api"

import { NavBar, TextNav, ContainerInput } from "./Style"

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  const openApi = "864a189243203c0746b9fff8f966f747"

  async function changeSearch(event) {
    setSearch(event.target.value)
    console.log(search)
  }

  async function fetchData() {
    const response = await api.get(
      `/weather?q=${search}&appid=${openApi}&units=metric`
    )
    console.log(response)
    setData(response.data)
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
          />
          <Button style={{ marginTop: 15 }} type="primary" onClick={fetchData}>
            Post
          </Button>
        </form>
      </ContainerInput>
    </div>
  )
}

export default App
