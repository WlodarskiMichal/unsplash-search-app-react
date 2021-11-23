import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Mainpage from "./components/MainPage";
import Search from "./components/Search";
import Header from "./components/Header"
import Folder from "./components/Folder"
// import CreateFolder from "./components/CreateFolder";
function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("")
  let config = {
    headers: {
      Authorization: "Client-ID RK2bDw_h5ZyNudBqtsIQQj2hK2NePfJiw1ApS-LXaFI"
    }
  };

  useEffect(() => {
    const getImages = async () => {
      const res = await axios.get(
        "https://api.unsplash.com/photos?page=1&per_page=30",
        config
      );
      setImages(res.data);
      console.log(res.data)
    };
    getImages();
  }, []);
  return (
    <Router>
      <Route path="/" exact>
        <Header/>
          {/* <CreateFolder/> */}
          <Folder setImages={setImages} config={config}/>
        <Search setQuery={setQuery} setImages={setImages} config={config} />
          <Mainpage query={query} images={images} setImages={setImages} config={config} />
      </Route>
    </Router>
  );
}

export default App;
