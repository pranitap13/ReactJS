import React from "react";
import ReactDOM from "react-dom/client";
import Practice from "./practice.jsx";  // Import Practice component
import Condition from "./Condition.jsx"; // Import Condition component

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Practice />
    <Condition /> {/* Now Condition will be rendered */}
  </>
);
