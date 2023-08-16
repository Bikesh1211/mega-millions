declare module 'react-qr-barcode-scanner' {
    import { FC } from 'react';
  
    interface BarcodeScannerComponentProps {
      width?: number;
      height?: number;
      onUpdate?: (error: Error | null, result: any) => void;
    }
  
    const BarcodeScannerComponent: FC<BarcodeScannerComponentProps>;
  
    export default BarcodeScannerComponent;
  }
  