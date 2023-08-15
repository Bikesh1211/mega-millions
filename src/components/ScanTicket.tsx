import React, { useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const ScannerComponent = () => {
  const [scannedNumbers, setScannedNumbers] = useState([]);
  const webcamRef: any = React.useRef(null);

  const captureFrame = async () => {
    if (webcamRef.current) {
      const video = webcamRef.current.video;
      const canvas = document.createElement("canvas");
      const context: any = canvas.getContext("2d");

      canvas.width = video.width;
      canvas.height = video.height;
      context.drawImage(video, 0, 0, video.width, video.height);

      // Perform OCR on the captured frame
      const {
        data: { text },
      } = await Tesseract.recognize(canvas, "eng", {
        logger: (m) => console.log(m),
      });

      const extractedNumbers = parseScannedText(text);
      setScannedNumbers(extractedNumbers);
    }
  };

  const parseScannedText = (text: any) => {
    // Split the scanned text into individual words
    const words = text.split(/\s+/);

    // Extract numbers from the words using regular expression
    const extractedNumbers = words
      .map((word: any) => {
        const match = word.match(/\d+/); // Regular expression to match numbers
        return match ? parseInt(match[0], 10) : null; // Convert matched text to integer
      })
      .filter((number: any) => number !== null); // Filter out non-numeric values

    return extractedNumbers;
  };

  return (
    <div>
      <Webcam ref={webcamRef} />
      <button onClick={captureFrame}>Capture Frame</button>
      <div>Scanned Numbers: {scannedNumbers.join(", ")}</div>
    </div>
  );
};

export default ScannerComponent;
