import { Component, OnInit } from '@angular/core';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.css']
})
export class GeneratePdfComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  generatePDF() {
    const doc = new jsPDF('p', 'pt', 'a4');
    let finalY = 20;

    const img = document.getElementById('clientLogo') as HTMLImageElement;
    // console.log(img);
    doc.addImage(this.getBase64Image(img), 'PNG', 50, finalY, img.width, img.height);

    finalY = finalY + img.height;

    doc.setFont('helvetica');
    doc.setFontStyle('bold');

    finalY = finalY + 25;
    /**
     * text(String, x-position, y-position)
     */
    doc.text('This is helvetica bold.', 20, finalY);

    /**
     * Creating underline
     */
    doc.setLineWidth(1);
    /** line(x1, y1, x2, y2) */
    doc.line(20, finalY + 2, 200, finalY + 2);

    finalY = finalY + 5;

    // --------------------------------------------------------
    const empData = [];
    empData.push(['Akhilesh', 'Muthusamy', 'Software Engineer', '01/09/1990']);
    empData.push(['Akhilesh', 'Muthusamy', 'Software Engineer', '01/09/1990']);
    empData.push(['Akhilesh', 'Muthusamy', 'Software Engineer', '01/09/1990']);

    doc.autoTable({
      startY: finalY,
      head: [['First Name', 'Last Name', 'Designation', 'DOB']],
      body: empData
    });

    finalY = doc.lastAutoTable.finalY + 15;

    const text = 'This is centred text.';
    const xOffset = doc.internal.pageSize.width / 2 - (doc.getStringUnitWidth(text) * doc.internal.getFontSize()) / 2;
    doc.text(text, xOffset, finalY);

    const empHistory = [];
    empHistory.push(['Organisation 1', '1/1/2010', '31/12/2010']);
    empHistory.push(['Organisation 2', '1/1/2011', '31/06/2012']);
    empHistory.push(['Organisation 3', '1/07/2012', '31/12/2016']);

    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 20,
      head: [['Company Name', 'Joining Date', 'Relieving Date']],
      body: empHistory
    });

    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    // FOOTER
    const str = 'Your footer text';
    doc.setTextColor(100);
    doc.setFontSize(10);
    doc.text(str, pageWidth / 2, pageHeight - 10, 'center');

    // ADD PAGE NUMBER
    doc.setFontSize(12);
    doc.addPage();
    doc.addPage();

    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 0; i < pageCount; i++) {
      doc.setPage(i);
      doc.text(pageWidth - 60, pageHeight - 20, doc.internal.getCurrentPageInfo().pageNumber + '/' + pageCount);
    }

    doc.save('table.pdf');
  }

  getBase64Image(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const dataURL = canvas.toDataURL('image/png');
    console.log(dataURL);
    return dataURL;
  }
}
