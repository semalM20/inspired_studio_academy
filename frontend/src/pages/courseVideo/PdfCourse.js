import React from "react";

const PdfCourse = () => {
  return (
    <div>
      <iframe
        src="presentation.pdf"
        width="100%"
        style={{ height: "83vh" }}
        title="pdfFile"
      />
    </div>
  );
};

export default PdfCourse;
