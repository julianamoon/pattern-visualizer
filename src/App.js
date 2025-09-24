import React, { useEffect } from "react";
import { useState } from "react";

const buttonStyle =
  "bg-blue-600 text-white py-2 px-2 flex-1 cursor-pointer transition hover:bg-blue-400";
const activeButtonStyle =
  "bg-white text-blue-600 font-bold py-2 px-2 flex-1 cursor-pointer";

export default function App() {
  const [value, setValue] = useState(
    "https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150717257.jpg"
  );
  const [size, setSize] = useState("50%");
  const [repeat, setRepeat] = useState("repeat");
  const [activeSize, setActivSize] = useState("50%");
  const [activeAxis, setActiveAxis] = useState("repeat");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setActivSize(size);
    setActiveAxis(repeat);
    console.log(repeat);
  }, [size, repeat]);

  return (
    // background
    <div
      className={`h-screen w-screen relative bg-repeat`}
      style={{
        backgroundImage: `url(${value})`,
        backgroundSize: `${size}`,
        backgroundRepeat: `${repeat}`,
        backgroundPosition: "center",
      }}
    >
      {/* modal */}
      <div className="container w-[400px] bg-white px-8 py-6 rounded-lg shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* heading + text */}
        <h1 className="text-xl font-bold text-center">Pattern Visualizer</h1>

        <p className="text-center text-sm px-4">
          To use the pattern visualizer please add a image in the input below or
          add a link to a image with the URL input.
        </p>
        {/* form */}
        <form action="" className="py-4 space-y-2" onSubmit={handleSubmit}>
          {/* FILE */}
          <fieldset className="pb-2">
            <label htmlFor="imageFile" className="font-bold">
              Add image via file
            </label>
            <input
              type="file"
              name="imageFile"
              id="imageFile"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-400 file:disabled:opacity-50 file:disabled:pointer-events-none"
              onChange={(e) => setValue(URL.createObjectURL(e.target.files[0]))}
            />
          </fieldset>

          {/* URL */}
          <fieldset>
            <label htmlFor="imageURL" className="font-bold">
              Add image via URL
            </label>
            <input
              type="text"
              name="imageURL"
              id="imageURL"
              className="block w-full text-sm border-2 border-blue-600 rounded-lg py-1 px-2 placeholder:text-gray-500"
              placeholder="Paste URL here"
              onChange={(e) => setValue(e.target.value)}
            />
          </fieldset>

          {/* SIZE */}
          <fieldset>
            <label className="font-bold">Change Size</label>
            <div className="w-full flex items-stretch justify-stretch">
              <button
                data-size="10%"
                className={`rounded-l-lg
                                    ${
                                      activeSize === "10%"
                                        ? activeButtonStyle
                                        : buttonStyle
                                    }`}
                onClick={(e) => setSize(e.target.dataset.size)}
              >
                XS
              </button>
              <button
                data-size="25%"
                className={
                  activeSize === "25%" ? activeButtonStyle : buttonStyle
                }
                onClick={(e) => setSize(e.target.dataset.size)}
              >
                S
              </button>
              <button
                data-size="50%"
                className={
                  activeSize === "50%" ? activeButtonStyle : buttonStyle
                }
                onClick={(e) => setSize(e.target.dataset.size)}
              >
                M
              </button>
              <button
                data-size="100%"
                className={
                  activeSize === "100%" ? activeButtonStyle : buttonStyle
                }
                onClick={(e) => setSize(e.target.dataset.size)}
              >
                G
              </button>
              <button
                data-size="150%"
                className={`rounded-r-lg
                                    ${
                                      activeSize === "150%"
                                        ? activeButtonStyle
                                        : buttonStyle
                                    }`}
                onClick={(e) => setSize(e.target.dataset.size)}
              >
                XG
              </button>
            </div>
          </fieldset>

          {/* AXIS */}
          <fieldset>
            <label className="font-bold">Change Axis</label>
            <div className="w-full flex items-stretch justify-stretch">
              <button
                data-size="repeat"
                className={`rounded-l-lg
                                    ${
                                      activeAxis === "repeat"
                                        ? activeButtonStyle
                                        : buttonStyle
                                    }`}
                onClick={(e) => setRepeat(e.target.dataset.size)}
              >
                All Axis
              </button>
              <button
                data-size="repeat-x"
                className={
                  activeAxis === "repeat-x" ? activeButtonStyle : buttonStyle
                }
                onClick={(e) => setRepeat(e.target.dataset.size)}
              >
                X Axis
              </button>
              <button
                data-size="repeat-y"
                className={`rounded-r-lg
                                    ${
                                      activeAxis === "repeat-y"
                                        ? activeButtonStyle
                                        : buttonStyle
                                    }`}
                onClick={(e) => setRepeat(e.target.dataset.size)}
              >
                Y Axis
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
