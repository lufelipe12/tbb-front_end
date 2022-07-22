import { GlobalStyle } from "./styles/global"
import Header from "././components/header"
import MainPage from "./pages/main"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <MainPage />
    </div>
  )
}

export default App
