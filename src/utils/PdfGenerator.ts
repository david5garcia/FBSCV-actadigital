import { jsPDF } from "jspdf";
import { filledActa } from "./FilledActa";

export class PdfGenerator {
  public static generatePdf(acta: Acta) {
    const doc = new jsPDF();

    doc.setFontSize(10);
    doc.setFont("helvetica");

    acta = filledActa;

    this.generateLabelAndInput({
      doc: doc,
      label: "Competicion",
      input: acta.competicion,
      x: 10,
      y: 10,
      width: 190,
      height: 5
    });
    this.generateLabelAndInput({
      doc,
      label: "Categoría",
      input: acta.categoria,
      x: 10,
      y: 30,
      width: 80,
      height: 5
    });
    this.generateLabelAndInput({
      doc,
      label: "División",
      input: acta.division,
      x: 100,
      y: 30,
      width: 30,
      height: 5
    });
    this.generateLabelAndInput({
      doc,
      label: "Modalidad: Beisbol o Sofbol",
      input: acta.modalidad,
      x: 140,
      y: 30,
      width: 60,
      height: 5
    });

    this.generateLabelAndInput({
      doc,
      label: "Localidad",
      input: acta.localidad,
      x: 10,
      y: 50,
      width: 90,
      height: 5
    });

    this.generateLabelAndInput({
      doc,
      label: "Fecha",
      input: new Date(acta.fechaHora).toLocaleDateString(),
      x: 110,
      y: 50,
      width: 30,
      height: 5
    });

    this.generateLabelAndInput({
      doc,
      label: "Hora",
      input: new Date(acta.fechaHora).toLocaleTimeString(),
      x: 150,
      y: 50,
      width: 30,
      height: 5
    });

    doc.save(
      `${acta.equipoLocal}_vs_${acta.equipoVisitante}_${Date.now()}.pdf`
    );
  }

  private static generateLabelAndInput({
    doc,
    label,
    input,
    x,
    y,
    width,
    height
  }: {
    doc: jsPDF;
    label: string;
    input: string;
    x: number;
    y: number;
    width: number;
    height: number;
  }) {
    doc.text(label, x, y);
    doc.rect(x, y + 2, width, height, "D");
    doc.text(input, x + 2, y + 6);
  }
}
