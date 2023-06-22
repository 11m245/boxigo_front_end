import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/joy/CircularProgress";
import Box from "@mui/joy/Box";

import { MyMoves } from "./Pages/MyMoves";
import { Layout } from "./Pages/Layout";
// import { MyProfile } from "./Pages/MyProfile";
// import { Quote } from "./Pages/Quote";
// import { Logout } from "./Pages/Logout";
import { NotFound } from "./Pages/NotFound";

function App() {
  const [apiData, setApiData] = useState({ Customer_Estimate_Flow: [] });
  const [isLoading, setIsLoading] = useState(true);

  async function getApiData() {
    const url = "http://test.api.boxigo.in/sample-data/";
    const response = await fetch(url);
    console.log("resp", response);

    if (response.status === 200) {
      // console.log("api success");
      const jsonData = await response.json();
      // console.log("api data", jsonData);
      setApiData(jsonData);
      setIsLoading(false);
      toast.success("data fetched");
    } else {
      setIsLoading(false);
      toast.error("error in data fetch");
    }
  }
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CircularProgress variant="solid" />
        </Box>
      ) : (
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
      )}
    </div>
  );
}

export default App;
