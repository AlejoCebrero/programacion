import React, { useState } from "react";
import { sculptureList } from "../data";

interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
}

function Gallery() {
  const [index, setIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(
    null
  );
  const hasNext: boolean = index < sculptureList.length - 1;
  const hasBack: boolean = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setExpandedImageIndex(null); // Reset expanded image when changing sculpture
  }

  function handleBackClick() {
    if (hasBack) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);
    }
    setExpandedImageIndex(null); // Reset expanded image when changing sculpture
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleImageClick(imageIndex: number) {
    setExpandedImageIndex(imageIndex === expandedImageIndex ? null : imageIndex);
    setIndex(imageIndex);
  }

  let sculpture: Sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleBackClick} disabled={!hasBack}>
        Atrás
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name}</i> de {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          src={sculpture.url}
          alt={sculpture.alt}
          onClick={() => handleImageClick(index)}
          style={{
            cursor: "pointer",
            maxWidth: "100%",
            border: expandedImageIndex === index ? "2px solid red" : "none",
          }}
        />
        {showMore && <p>{sculpture.description}</p>}
        <div>
          {sculptureList.map((sculptureItem, i) => (
            <img
              key={i}
              src={sculptureItem.url}
              alt={sculptureItem.alt}
              onClick={() => handleImageClick(i)}
              style={{
                cursor: "pointer",
                maxWidth: "80px",
                margin: "4px",
                border: expandedImageIndex === i ? "2px solid red" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
