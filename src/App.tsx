import { GlobalStyle } from "./styles/global"
import Header from "././components/header"
import MainPage from "./pages/main"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
