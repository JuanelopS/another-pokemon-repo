import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./providers/AppProvider";
import Home from "./components/pages/Home";
import Pokemon from "./components/Pokemon";
import Header from "./components/layout/Header";
import Error from "./components/pages/Error";

import "./App.css";

function App() {
  return (
    <>
    <AppProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </AppProvider>
    </>
  );
}

export default App;
