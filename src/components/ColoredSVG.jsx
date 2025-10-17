import React, { useEffect, useState } from "react";

const ColoredSVG = ({ svg, url, color }) => {
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
      style={{ fill: color, height: svg?.height || '10px', width: svg?.width || '10px' }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default ColoredSVG;
