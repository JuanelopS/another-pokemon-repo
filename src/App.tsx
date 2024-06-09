import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./providers/AppProvider";
import Home from "./components/pages/Home"; // later we will use this component
import Pokemon from "./components/Pokemon";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Error from "./components/pages/Error";
import "./fonts/ProggyCleanNerdFont-Regular.ttf";
import "./App.css";


function App() {
  return (
    <>
    <AppProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
    </>
  );
}

export default App;
