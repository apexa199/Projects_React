import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  const [length, setLength] = useState(6);

  const [num, setNum] = useState(false);

  const [char, setChar] = useState(false);

  const [password, setPassword] = useState("");
  
  const passwordRef = useRef(null)
  
  const passwordGenerater = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "@!#$%^&*_=-";

    for (let i = 1; i <= length; i++) {
      
      let charac = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(charac);
    }
    setPassword(pass);

  }, [length, num, char]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(() => {
    
    passwordGenerater()

  },[length,num,char,passwordGenerater])



  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-9 my-20 py-4 text-black text-lg  bg-gray-300">
        <h1 className="text-black text-center my-4">Password Generater</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />

          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-lg gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              id="numbrerInput"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="numbrerChar"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="numberChar">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
