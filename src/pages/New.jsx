import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";

const New = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6">
      <Dropdown onSelect={setSelected} />
      <div className="mt-4">
        {selected === "postImage" && <PostImage />}
        {selected === "postVideo" && <PostVideo />}
      </div>
    </div>
  );
};

export default New;

