import React, { useEffect } from "react";
import { useState } from "react";

import eyesOpen from "./images/streamline-plump_eye-optic-remix.svg";
import eyesClosed from "./images/solar_eye-closed-bold.svg";
import Form from "./Components/Form";

export default function App() {
  const [value, setValue] = useState(
    "https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150717257.jpg"
  );
  const [size, setSize] = useState("50%");
  const [repeat, setRepeat] = useState("repeat");
  const [activeSize, setActivSize] = useState("50%");
  const [activeAxis, setActiveAxis] = useState("repeat");
  const [eyeButton, setEyeButton] = useState(true);

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
      <div className="bg-white p-6 rounded-lg shadow absolute top-16 left-1/2 transform -translate-x-1/2">
        <button
          className="m-auto block cursor-pointer"
          onClick={() => setEyeButton(!eyeButton)}
        >
          {eyeButton ? (
            <img src={eyesOpen} alt="" />
          ) : (
            <img src={eyesClosed} alt="" />
          )}
        </button>
        {eyeButton && (
          <div className="w-[400px] pt-2">
            {/* heading + text */}
            <h1 className="text-xl font-bold text-center">
              Pattern Visualizer
            </h1>

            <p className="text-center text-sm px-4">
              To use the pattern visualizer please add a image in the input
              below or add a link to a image with the URL input.
            </p>
            {/* form */}
            <Form
              setValue={setValue}
              setSize={setSize}
              setRepeat={setRepeat}
              activeSize={activeSize}
              activeAxis={activeAxis}
            />
          </div>
        )}
      </div>
    </div>
  );
}
