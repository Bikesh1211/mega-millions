import React, { useState, useEffect, useRef } from "react";
import Quagga from "@ericblade/quagga2";

const ScanTicket: React.FC = () => {
  const [scannedCode, setScannedCode] = useState<string>("");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (isScanning) {
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            constraints: {
              facingMode: "environment",
            },
            target: scannerRef.current,
          },
          decoder: {
            readers: ["ean_reader"], // You can change the reader type here
          },
        },
        (err: any) => {
          if (err) {
            console.error(err);
            return;
          }
          Quagga.start();
        }
      );

      Quagga.onDetected(handleDetection);
    } else {
      Quagga.offDetected(handleDetection);
      Quagga.stop();
    }

    return () => {
      Quagga.stop();
    };
  }, [isScanning]);

  const startScanning = () => {
    setIsScanning(true);
  };

  const stopScanning = () => {
    setIsScanning(false);
  };

  const handleDetection = (result: any) => {
    if (result && result.codeResult) {
      const scannedCode = result.codeResult.code;
      setScannedCode(scannedCode);
      stopScanning();
    }
  };

  return (
    <div>
      <div ref={scannerRef} style={{ width: "100%", height: "auto" }} />
      <div>
        <button onClick={isScanning ? stopScanning : startScanning}>
          {isScanning ? "Stop Scanning" : "Start Scanning"}
        </button>
      </div>
      <div>Scanned Barcode: {scannedCode}</div>
    </div>
  );
};

export default ScanTicket;
