import React from "react";

const OfflineB = () => {
  const buttonStyle = {
    backgroundColor: "#c3aee1",
    borderRadius: "50px",
    color: "#313a46",
    display: "inline-block",
    fontFamily: "Arial, serif",
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "50px",
    textAlign: "center",
    textDecoration: "none",
    width: "200px",
    WebkitTextSizeAdjust: "none",
  };
  return (
    <div className="flex justify-center flex-col items-center h-96">
      <p>Pay the course fee on monthly basis by clicking on the below link</p>

      {/* test for 2000 gbp */}
      {/* <div>
        <a
          href="https://app.payitmonthly.uk/agreement/pay-by-link/6f73846d-fd9d-493d-99fb-dba0d4314ec2/L3NJLIE1SzWOoOo5sM0CUi5ya/button"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Pay By Pay It Monthly
        </a>
      </div> */}

      {/* live for 2000 gbp */}
      <div>
        <a
          href="https://app.payitmonthly.uk/agreement/pay-by-link/16612130-15af-445e-88b6-f2fb5c7073c8/GArt9M6FsR5llycKU5mHuFnmo/button"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Pay By Pay It Monthly
        </a>
      </div>

      {/* live 10 gbp  */}
      {/* <div>
        <a
          href="https://app.payitmonthly.uk/agreement/pay-by-link/e54c32b1-ac8c-4c22-9338-d2c15a7547e3/fgg8IBS3iaBiZS77zZw5r6g9S/button"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Pay By Pay It Monthly
        </a>
      </div> */}
      <p>
        After successful payment, course will be updated in the next 24 hours
      </p>
    </div>
  );
};

export default OfflineB;
