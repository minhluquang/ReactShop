import Container from "react-bootstrap/Container";

import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AppRoutes />
      </Container>
    </div>
  );
}

export default App;
