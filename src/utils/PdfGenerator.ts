import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";
import logo from "../assets/logo.jpeg";
import { filledActa } from "./FilledActa";

export class PdfGenerator {
  public static generatePdf(acta: Acta) {
    const doc = new jsPDF();

    //acta = filledActa;
    doc.setFont("helvetica");

    doc.addImage(logo, "JPEG", 10, 5, 20, 20);

    doc.setFontSize(20);
    doc.setTextColor("#104777");
    doc.text(
      doc.splitTextToSize(
        "Federación de Beisbol y Sofbol de la Comunidad Valenciana",
        100
      ),
      60,
      10
    );
    doc.setTextColor("#333");
    doc.setFontSize(16);
    doc.text("Acta Oficial de Encuentro", 60, 27);

    doc.setFontSize(8);

    let yLine = 35;
    this.generateLabelAndInput({
      doc: doc,
      label: "Competicion",
      input: acta.competicion,
      x: 10,
      y: yLine,
      width: 190,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Categoría",
      input: acta.categoria,
      x: 10,
      y: yLine,
      width: 80,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "División",
      input: acta.division,
      x: 100,
      y: yLine,
      width: 30,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Modalidad: Beisbol o Sofbol",
      input: acta.modalidad,
      x: 140,
      y: yLine,
      width: 60,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Localidad",
      input: acta.localidad,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Fecha",
      input: new Date(acta.fechaHora).toLocaleDateString(),
      x: 110,
      y: yLine,
      width: 40,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Hora",
      input: new Date(acta.fechaHora).toLocaleTimeString(),
      x: 160,
      y: yLine,
      width: 40,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Terreno de Juego",
      input: acta.terreno,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Delegado de Campo",
      input: acta.delegado,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Equipo Local",
      input: acta.equipoLocal,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Equipo Visitante",
      input: acta.equipoVisitante,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Entrenador Equipo Local",
      input: acta.entrenadorLocal,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Entrenador Equipo Visitante",
      input: acta.entrenadorVisitante,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Arbitro Principal",
      input: acta.arbitroPrincipal,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Arbitro Primera Base",
      input: acta.arbitroPrimeraBase,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Arbitro Segunda Base",
      input: acta.arbitroSegundaBase,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Arbitro Tercera Base",
      input: acta.arbitroTerceraBase,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Anotador",
      input: acta.anotador,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Comisario Técnico",
      input: acta.comisarioTecnico,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateResultTable(
      doc,
      acta.resultadoLocal,
      acta.resultadoVisitante,
      acta.equipoLocal,
      acta.equipoVisitante,
      yLine
    );

    yLine += 35;
    this.generateLabelAndInput({
      doc,
      label: "Amonestaciones",
      input: acta.amonestaciones,
      x: 10,
      y: yLine,
      width: 190,
      height: 25
    });

    yLine += 30;
    this.generateLabelAndInput({
      doc,
      label: "Expulsiones",
      input: acta.expulsiones,
      x: 10,
      y: yLine,
      width: 190,
      height: 25
    });

    yLine += 30;
    this.generateLabelAndInput({
      doc,
      label: "Observaciones",
      input: acta.observaciones,
      x: 10,
      y: yLine,
      width: 190,
      height: 25
    });

    yLine += 30;
    this.generateLabelAndSignature({
      doc,
      label: "Firma Entrenador Local",
      input: acta.firmaEntrenadorLocal,
      x: 10,
      y: yLine,
      width: 60,
      height: 40
    });

    this.generateLabelAndSignature({
      doc,
      label: "Firma Arbitro Principal",
      input: acta.firmaArbitroPrincipal,
      x: 75,
      y: yLine,
      width: 60,
      height: 40
    });

    this.generateLabelAndSignature({
      doc,
      label: "Firma Entrenador Visitante",
      input: acta.firmaEntrenadorVisitante,
      x: 140,
      y: yLine,
      width: 60,
      height: 40
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
    doc.rect(x, y + 1, width, height, "D");
    doc.text(input, x + 2, y + 4);
  }

  private static generateLabelAndSignature({
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
    doc.addImage(input, "PNG", x + 2, y + 6, 60, 50);
  }

  private static generateResultTable(
    doc: jsPDF,
    resultadoLocal: Resultado,
    resultadoVisitante: Resultado,
    equipoLocal: string,
    equipoVisitante: string,
    y: number
  ) {
    const resultadoLocalTotal = Object.values(
      resultadoLocal.carrerasPorEntrada
    ).reduce((acc, curr) => acc! + (curr || 0), 0);
    const resultadoVisitanteTotal = Object.values(
      resultadoVisitante.carrerasPorEntrada
    ).reduce((acc, curr) => acc! + (curr || 0), 0);

    autoTable(doc, {
      startY: y,
      styles: { fontSize: 9},
      head: [["Equipo", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "Total", "Hits", "Errores"]],
        body: [
            [
            equipoLocal,
            ...Object.values(resultadoLocal.carrerasPorEntrada),
            resultadoLocalTotal,
            resultadoLocal.hits,
            resultadoLocal.errores
            ],
            [
            equipoVisitante,
            ...Object.values(resultadoVisitante.carrerasPorEntrada),
            resultadoVisitanteTotal,
            resultadoVisitante.hits,
            resultadoVisitante.errores
            ]
        ]
    });
  }
}
