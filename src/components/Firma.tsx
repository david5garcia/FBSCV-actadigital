import SignatureCanvas from "react-signature-canvas";
import styles from "./css/Firma.module.scss";

const Firma = () => {
  return (
    <div className="canvasContainer">
      <SignatureCanvas
        penColor="blue"
        canvasProps={{ className: styles.sigCanvas }}
      />
    </div>
  );
};

export default Firma;
