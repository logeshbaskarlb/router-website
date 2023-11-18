import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import All from "./JSXfiles/All";
import NavBar from "./JSXfiles/NavBar";
import FullStack from "./JSXfiles/FullStack";
import DataScience from "./JSXfiles/DataScience";
import CyberSecurity from "./JSXfiles/CyberSecurity";
import Career from "./JSXfiles/Career";
import { dataList } from "./data";

function App() {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<All data={dataList} />} />

            <Route path="/fullstack" element={<FullStack data={dataList} />} />

            <Route
              path="/data-science"
              element={<DataScience data={dataList} />}
            />

            <Route
              path="/CyberSecurity"
              element={<CyberSecurity data={dataList} />}
            />

            <Route path="/career" element={<Career data={dataList} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
