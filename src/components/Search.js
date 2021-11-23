import axios from "axios";
const Search = ({setQuery, setImages, config }) => {
  const Searchit = async (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setQuery("")
      return;
    }
    setQuery(e.target.value)
    console.log(e.target.value)
    let res = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${e.target.value}`,
      config
    );
    setImages(res.data.results);
  };
  const submitted = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${e.target[0].value}`,
      config
    );
    setImages(res.data.results);
    setQuery(e.target[0].value)
    console.log(e.target[0].value)
    e.target[0].value = "";
  };
  return (
    <div className="container text-center">
      <form
        onSubmit={submitted}
      >
        <input
          type="text"
          className="w-75 text-center mt-4"
          id="query"
          placeholder="Search for images"
          onChange={Searchit}
        ></input>

      </form>
    </div>
  );
};

export default Search;
