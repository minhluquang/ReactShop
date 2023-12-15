import { ToastContainer } from "react-toastify";

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

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
