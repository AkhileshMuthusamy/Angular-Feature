import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-html-to-jspdf',
  templateUrl: './html-to-jspdf.component.html',
  styleUrls: ['./html-to-jspdf.component.css']
})
export class HtmlToJspdfComponent implements OnInit {
  base64Img = null;
  margins = {
    top: 70,
    bottom: 40,
    left: 30,
    width: 550
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  generatePDF() {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(18);
    pdf.fromHTML(
      document.getElementById('html-2-pdfwrapper'),
      this.margins.left, // x coord
      this.margins.top,
      {
        // y coord
        width: this.margins.width // max width of content on PDF
      },
      // function(dispose) {
      //   this.headerFooterFormatting(pdf);
      // },
      this.margins
    );

    console.dir(pdf.output('dataurlstring'));

    const uploadData = new FormData();
    uploadData.append('pdfFile', pdf.output('dataurlstring'));
    this.http
      .post<any>('http://localhost:3000/api/emailAttachment', uploadData, {
        reportProgress: true,
        observe: 'events'
      })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }

  // headerFooterFormatting(doc, totalPages) {
  //   for (let i = totalPages; i >= 1; i--) {
  //     doc.setPage(i);
  //     // header
  //     this.header(doc);

  //     this.footer(doc, i, totalPages);
  //     doc.page++;
  //   }
  // }

  // header(doc) {
  //   doc.setFontSize(30);
  //   doc.setTextColor(40);
  //   doc.setFontStyle('normal');

  //   if (this.base64Img) {
  //     doc.addImage(this.base64Img, 'JPEG', this.margins.left, 10, 40, 40);
  //   }

  //   doc.text('Report Header Template', this.margins.left + 50, 40);
  //   doc.setLineCap(2);
  //   doc.line(3, 70, this.margins.width + 43, 70); // horizontal line
  // }

  // imgToBase64(url, callback, imgVariable) {
  //   if (!window.FileReader) {
  //     callback(null);
  //     return;
  //   }
  //   const xhr = new XMLHttpRequest();
  //   xhr.responseType = 'blob';
  //   xhr.onload = function() {
  //     const reader = new FileReader();
  //     reader.onloadend = function() {
  //       imgVariable = reader.result.replace('text/xml', 'image/jpeg');
  //       callback(imgVariable);
  //     };
  //     reader.readAsDataURL(xhr.response);
  //   };
  //   xhr.open('GET', url);
  //   xhr.send();
  // }

  // footer(doc, pageNumber, totalPages) {
  //   const str = 'Page ' + pageNumber + ' of ' + totalPages;

  //   doc.setFontSize(10);
  //   doc.text(str, this.margins.left, doc.internal.pageSize.height - 20);
  // }
}
