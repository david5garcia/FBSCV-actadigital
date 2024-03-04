import SignatureCanvas from "react-signature-canvas";
import styles from "./Firma.module.scss";

const Firma = () => {
  return (
    <div>
      <SignatureCanvas
        penColor="blue"
        canvasProps={{ className: styles.sigCanvas }}
      />
    </div>
  );
};

export default Firma;
