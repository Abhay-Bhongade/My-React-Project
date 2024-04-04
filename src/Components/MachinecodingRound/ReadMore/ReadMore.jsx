import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxLength) : text;

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <p>{resultString}</p>
      {text.length > maxLength && (
        <button onClick={toggleTruncate}>
          {isTruncated ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

const ReadMoreApp = () => {
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div>
      <h1>Read More Example</h1>
      <ReadMore text={longText} maxLength={100} />
    </div>
  );
};

export default ReadMoreApp;
