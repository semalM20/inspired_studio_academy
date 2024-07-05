// CertificateGenerator.js
import React from "react";
import { jsPDF } from "jspdf";
import logo from "../../assets/CertificatePicture1.jpg";
import logo2 from "../../assets/CertificatePicture2.png";
import signatureImg from "../../assets/CertificatePictureSign.jpg";

const CertificateGenerator = ({ userName }) => {
  const generateCertificate = () => {
    const doc = new jsPDF();

    const date = new Date().toLocaleDateString();

    const logoImg = logo;
    const logoImg2 = logo2;
    const signImg = signatureImg;

    // Add image to the PDF
    doc.addImage(logoImg, "JPEG", 10, 0, 150, 100);
    doc.addImage(logoImg2, "JPEG", 160, 15, 45, 65);

    // Add text to the PDF
    doc.setFontSize(30);
    doc.text("CERTIFICATE", 105, 90, null, null, "center");
    doc.setFontSize(16);
    doc.text(
      `THIS CERTIFICATE IS PROUDLY PRESENTED TO`,
      105,
      105,
      null,
      null,
      "center"
    );
    doc.text(`${userName}`, 105, 115, null, null, "center");
    doc.setFontSize(14);
    doc.text(
      `FOR SUCCESSFULLY COMPLETING THE BEGINNER-BARBER COURSE ONLINE.`,
      105,
      125,
      null,
      null,
      "center"
    );
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 30, 145, null, null, "center");
    doc.setFontSize(10);
    doc.text(`INSTRUCTOR : ADRIAN MECHERES`, 35, 150, null, null, "center");
    doc.addImage(signImg, "JPEG", 15, 151, 40, 15);

    // Save the PDF
    doc.save("certificate.pdf");
  };

  return (
    <div className="certificate-container">
      <button
        onClick={generateCertificate}
        className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
      >
        GENERATE CERTIFICATE
      </button>
    </div>
  );
};

export default CertificateGenerator;
