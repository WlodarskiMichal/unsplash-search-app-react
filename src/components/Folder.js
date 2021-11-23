import axios from "axios";
const Folder = ({ setImages, config }) => {
  const OpenFolder = async () => {
    let folder = []
    for(var i =0; i < localStorage.length; i++){
      let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log(temp.id)
      let res = await axios.get(
        `https://api.unsplash.com/photos/${temp.id}`,
        config
      )
      folder.push(res.data)
    }
    setImages(folder)
  };
  return (
    <div className="text-center">
      <button className="btn btn-outline-dark mx-1 fs-6 mt-auto" onClick={OpenFolder}>Open your folder</button>
    </div>
  );
};

export default Folder;