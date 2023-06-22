import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";

import { MyMoves } from "./Pages/MyMoves";
import { Layout } from "./Pages/Layout";
// import { MyProfile } from "./Pages/MyProfile";
// import { Quote } from "./Pages/Quote";
// import { Logout } from "./Pages/Logout";
import { NotFound } from "./Pages/NotFound";

function App() {
  const [apiData, setApiData] = useState({ Customer_Estimate_Flow: [] });

  async function getApiData() {
    const url = "http://test.api.boxigo.in/sample-data/";
    const response = await fetch(url);
    console.log("resp", response);

    if (response.status === 200) {
      console.log("api success");
      const jsonData = await response.json();
      console.log("api data", jsonData);
      setApiData(jsonData);
      toast.success("data fetched");
    } else {
      toast.error("error in data fetch");
    }
  }
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyMoves apiData={apiData} />} />
          <Route path="my-moves" element={<MyMoves apiData={apiData} />} />
          {/* <Route path="my-profile" element={<MyProfile />} />
          <Route path="get-quote" element={<Quote />} />
          <Route path="logout" element={<Logout />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
