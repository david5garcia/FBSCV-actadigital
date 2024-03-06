import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";
import logo from "../assets/logo.jpeg";

export class PdfGeneratorService {
  public static generatePdf(acta: Acta) {
    const doc = new jsPDF("p", "mm", "a4", true);

    //acta = filledActa;
    doc.setFont("helvetica");

    doc.addImage(logo, "JPEG", 10, 5, 20, 20, undefined, "FAST");

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
      input: acta.competicion.value,
      x: 10,
      y: yLine,
      width: 190,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Categoría",
      input: acta.categoria.value,
      x: 10,
      y: yLine,
      width: 80,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "División",
      input: acta.division.value,
      x: 100,
      y: yLine,
      width: 30,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Modalidad: Beisbol o Sofbol",
      input: acta.modalidad.value,
      x: 140,
      y: yLine,
      width: 60,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Localidad",
      input: acta.localidad.value,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Fecha",
      input: new Date(acta.fechaHora.value).toLocaleDateString(),
      x: 110,
      y: yLine,
      width: 40,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Hora",
      input: new Date(acta.fechaHora.value).toLocaleTimeString(),
      x: 160,
      y: yLine,
      width: 40,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Terreno de Juego",
      input: acta.terreno.value,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Delegado de Campo",
      input: acta.delegado.value,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Equipo Local",
      input: acta.equipoLocal.value,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Equipo Visitante",
      input: acta.equipoVisitante.value,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Entrenador Equipo Local",
      input: acta.entrenadorLocal.value,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Entrenador Equipo Visitante",
      input: acta.entrenadorVisitante.value,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Arbitro Principal",
      input: acta.arbitroPrincipal.value,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Arbitro Primera Base",
      input: acta.arbitroPrimeraBase.value,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Arbitro Segunda Base",
      input: acta.arbitroSegundaBase.value,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Arbitro Tercera Base",
      input: acta.arbitroTerceraBase.value,
      x: 110,
      y: yLine,
      width: 90,
      height: 4
    });

    yLine += 9;
    this.generateLabelAndInput({
      doc,
      label: "Anotador",
      input: acta.anotador.value,
      x: 10,
      y: yLine,
      width: 90,
      height: 4
    });
    this.generateLabelAndInput({
      doc,
      label: "Comisario Técnico",
      input: acta.comisarioTecnico.value,
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
      acta.equipoLocal.value,
      acta.equipoVisitante.value,
      yLine
    );

    yLine += 35;
    this.generateLabelAndInput({
      doc,
      label: "Amonestaciones",
      input: acta.amonestaciones.value,
      x: 10,
      y: yLine,
      width: 190,
      height: 25
    });

    yLine += 30;
    this.generateLabelAndInput({
      doc,
      label: "Expulsiones",
      input: acta.expulsiones.value,
      x: 10,
      y: yLine,
      width: 190,
      height: 25
    });

    yLine += 30;
    this.generateLabelAndInput({
      doc,
      label: "Observaciones",
      input: acta.observaciones.value,
      x: 10,
      y: yLine,
      width: 190,
      height: 25
    });

    yLine += 30;
    this.generateLabelAndSignature({
      doc,
      label: "Firma Entrenador Local",
      input: acta.firmaEntrenadorLocal.value,
      x: 10,
      y: yLine,
      width: 60,
      height: 40
    });

    this.generateLabelAndSignature({
      doc,
      label: "Firma Arbitro Principal",
      input: acta.firmaArbitroPrincipal.value,
      x: 75,
      y: yLine,
      width: 60,
      height: 40
    });

    this.generateLabelAndSignature({
      doc,
      label: "Firma Entrenador Visitante",
      input: acta.firmaEntrenadorVisitante.value,
      x: 140,
      y: yLine,
      width: 60,
      height: 40
    });

    doc.save(
      `${acta.equipoLocal.value}_vs_${
        acta.equipoVisitante.value
      }_${Date.now()}.pdf`
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
    doc.text(doc.splitTextToSize(input, width - 4), x + 2, y + 4);
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
    doc.addImage(input, "PNG", x, y + 2, width, height, undefined, "FAST");
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
    ).reduce((acc, curr) => acc! + (curr.value || 0), 0);
    const resultadoVisitanteTotal = Object.values(
      resultadoVisitante.carrerasPorEntrada
    ).reduce((acc, curr) => acc! + (curr.value || 0), 0);

    autoTable(doc, {
      startY: y,
      styles: { fontSize: 9 },
      headStyles: { fillColor: "#104777" },
      head: [
        [
          "Equipo",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "Total",
          "Hits",
          "Errores"
        ]
      ],
      body: [
        [
          equipoLocal,
          ...Object.values(resultadoLocal.carrerasPorEntrada).map((entrada) =>
            typeof entrada.value == "number" ? entrada.value : ""
          ),
          resultadoLocalTotal,
          resultadoLocal.hits.value,
          resultadoLocal.errores.value
        ],
        [
          equipoVisitante,
          ...Object.values(resultadoVisitante.carrerasPorEntrada).map(
            (entrada) => (typeof entrada.value == "number" ? entrada.value : "")
          ),
          resultadoVisitanteTotal,
          resultadoVisitante.hits.value,
          resultadoVisitante.errores.value
        ]
      ]
    });
  }
}
