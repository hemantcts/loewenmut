import React, { useEffect, useState } from "react";

const ColoredSVG = ({ url, color }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        setSvgContent(data);
      });
  }, [url]);

  return (
    <div
      className="colored-svg"
      style={{ fill: color }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default ColoredSVG;
