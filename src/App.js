import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conteiner from "./Layout/Conteiner/Conteiner";
import Main from "./Components/Main/Main";

function App() {

  return (

    <>

      <BrowserRouter>

        <Conteiner>

          <Routes>

            <Route path="/" element={<Main />} />

          </Routes>

        </Conteiner>

      </BrowserRouter>

    </>

  )

}

export default App;
