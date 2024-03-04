import SignatureCanvas from "react-signature-canvas";

const Firma = () => {
  return (
    <div>
      <SignatureCanvas
        penColor="green"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
      />
    </div>
  );
};

export default Firma;
