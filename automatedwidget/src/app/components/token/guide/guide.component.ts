import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {
  @ViewChild('content') content!: ElementRef;
  @ViewChild('sectionToExclude') sectionToExclude!: ElementRef;



    // Pdf downloading
    loading: boolean = false;

    startLoading() {
      // Set loading to true after a delay of 500 milliseconds
      setTimeout(() => {
        this.loading = true;
        this.downloadPdf();
      });
    }

    
    downloadPdf() {
      
      const content = this.content.nativeElement;
      const sectionToExclude = this.sectionToExclude.nativeElement;
    
      // // Hide the section before capturing the content
      // sectionToExclude.style.display = 'none';
      
      // Increase DPI for better quality
      const dpi = 300; // Adjust as needed
    
      html2canvas(content, {
        allowTaint: true,
        useCORS: true,
        scale: dpi / 96 // 96 is the default DPI
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
        // Define padding
        const paddingTop = 80; // Adjust as needed
    
        // Add header image
        const headerImg = new Image();
        headerImg.src = 'assets/img/pdf/header.png'; // Replace with the path to your header image
        headerImg.onload = () => {
          const headerWidth = imgWidth; // Use the full width of the page for the header
          const headerHeight = (headerImg.height * headerWidth) / headerImg.width;
          pdf.addImage(headerImg, 'PNG', 0, 0, headerWidth, headerHeight);
    
          // Add footer image
          const footerImg = new Image();
          footerImg.src = 'assets/img/pdf/footer.png'; // Replace with the path to your footer image
          footerImg.onload = () => {
            const footerWidth = imgWidth; // Use the full width of the page for the footer
            const footerHeight = (footerImg.height * footerWidth) / footerImg.width;
            const footerY = pdf.internal.pageSize.height - footerHeight; // Position the footer at the bottom of the page
            pdf.addImage(footerImg, 'PNG', 0, footerY, footerWidth, footerHeight);
    
            // Add content image with padding
            pdf.addImage(imgData, 'PNG', 0, paddingTop, imgWidth, imgHeight);
            pdf.save('content.pdf');

            // // Show the section again after generating the PDF
            // sectionToExclude.style.display = 'block';
    
            this.loading = false;
          };
        };
      });
    }
    

    ///////// Copie number 
    @ViewChild('number', { static: false }) numberElement!: ElementRef;
  isCopied: boolean = false;

  copyNumber() {
    const numberText = this.numberElement.nativeElement.textContent;
    navigator.clipboard.writeText(numberText).then(() => {
      console.log('Number copied to clipboard');
      this.isCopied = true;

      
      setTimeout(() => {
        this.isCopied = false;
      }, 2200);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}