declare module '@ericblade/quagga2' {
    interface QuaggaConfig {
      inputStream: {
        type: string;
        constraints: {
          facingMode: string;
        };
        target: HTMLElement | string |null;
      };
      decoder: {
        readers: string[];
      };
    }
  
    interface QuaggaResult {
      codeResult?: {
        code: string;
      };
    }
  
    class Quagga {
      static init(config: QuaggaConfig, callback: (err?: any) => void): void;
      static start(): void;
      static stop(): void;
      static onDetected(callback: (result: QuaggaResult) => void): void;
      static offDetected(callback: (result: QuaggaResult) => void): void;
    }
  
    export = Quagga;
  }
  