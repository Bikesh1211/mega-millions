import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

const ScanTicket: React.FC = () => {
  const [scannedCode, setScannedCode] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const handleScan = (data: string | null) => {
    if (data) {
      setScannedCode(data);
    }
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  const startScanning = () => {
    setIsScanning(true);
  };

  const stopScanning = () => {
    setIsScanning(false);
  };

  return (
    <div>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%", height: "auto" }}
        facingMode="environment"
        showViewFinder={isScanning}
      />
      <div>Scanned Barcode: {scannedCode}</div>
      <div>
        <button onClick={startScanning} disabled={isScanning}>
          Start Scanning
        </button>
        <button onClick={stopScanning} disabled={!isScanning}>
          Stop Scanning
        </button>
      </div>
    </div>
  );
};

export default ScanTicket;
