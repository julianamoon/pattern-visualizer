import React from "react";
import Button from "./Button";

function Form({ setValue, setSize, setRepeat, activeSize, activeAxis }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
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
          <Button
            value="10%"
            activeSize={activeSize}
            setSize={setSize}
            otherClasses={"rounded-l-lg"}
          >
            XS
          </Button>
          <Button value="25%" activeSize={activeSize} setSize={setSize}>
            S
          </Button>
          <Button value="50%" activeSize={activeSize} setSize={setSize}>
            M
          </Button>
          <Button value="100%" activeSize={activeSize} setSize={setSize}>
            G
          </Button>
          <Button
            value="150%"
            activeSize={activeSize}
            setSize={setSize}
            otherClasses={"rounded-r-lg"}
          >
            XG
          </Button>
        </div>
      </fieldset>

      {/* AXIS */}
      <fieldset>
        <label className="font-bold">Change Axis</label>
        <div className="w-full flex items-stretch justify-stretch">
          <Button
            repeat
            value="repeat"
            activeAxis={activeAxis}
            setRepeat={setRepeat}
            otherClasses={"rounded-l-lg"}
          >
            All Axis
          </Button>
          <Button
            repeat
            value="repeat-x"
            activeAxis={activeAxis}
            setRepeat={setRepeat}
          >
            All Axis
          </Button>
          <Button
            repeat
            value="repeat-y"
            activeAxis={activeAxis}
            setRepeat={setRepeat}
            otherClasses={"rounded-r-lg"}
          >
            All Axis
          </Button>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
