import { useState } from "react";
const CreateFolder = ({}) => {
    const [input, setInput] = useState('')
  function handleClickNameFolder(e) {
    e.preventDefault();
    localStorage.setItem("folderName",input);
    console.log('this is input ' + input)
    }
  return (
    <div className="container text-center">
        <form className="mt-4 mb-4"
            onSubmit={handleClickNameFolder}>
            <input
            value={input} onInput={e => setInput(e.target.value)}
            type="text"
            className="w-75 text-center mt-4 ms-4 me-4 "
            id="query"
            placeholder="Name your folder to save photos for later"
            ></input>
            <button className="btn btn-outline-dark mx-1 fs-6 mt-auto" onClick={handleClickNameFolder}>Save name</button>
        </form>
    </div>
  );
};

export default CreateFolder;