import SignatureCanvas from "react-signature-canvas";
import styles from "./css/Firma.module.scss";

const Firma = () => {
  let sigCanvas: any;
  const clear = () => {
    sigCanvas.clear();
  };

  return (
    <div className="canvasContainer">
      <SignatureCanvas
        penColor="#104777"
        clearOnResize={false}
        canvasProps={{ className: styles.sigCanvas }}
        ref={(ref) => {
          sigCanvas = ref;
        }}
      />
      <button type="button" className={styles.button} onClick={clear}>
        Reset
      </button>
    </div>
  );
};

export default Firma;
