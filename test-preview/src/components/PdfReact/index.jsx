// import { useState } from "react";
// import PDF from "react-pdf-js";
// export default function Pdf() {
//   const [page, setPage] = useState(1); //pdf当前页数
//   const [pageTotal, setPageTotal] = useState(0); //pdf总页数

//   const onDocumentComplete = (pages) => {
//     setPage(1);
//     setPageTotal(pages);
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <PDF
//           file={
//             // "http://it-image.walimaker.com/2019/01/02/dc39e4ea855980d3e46cc9c89c7a852b.pdf"
//             "crypto-4.5.pdf"
//           }
//           onDocumentComplete={onDocumentComplete}
//           page={1}
//         />
//         <p>{page}</p>
//       </div>
//       <div>
//         {pageTotal
//           ? new Array(pageTotal).fill("").map((item, index) => {
//               return index + 1 !== 1 ? (
//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                   <PDF
//                     file={
//                       // "http://it-image.walimaker.com/2019/01/02/dc39e4ea855980d3e46cc9c89c7a852b.pdf"
//                       "./crypto-4.5.pdf"
//                     }
//                     page={index + 1}
//                   />
//                   <p>{index + 1}</p>
//                 </div>
//               ) : (
//                 ""
//               );
//             })
//           : ""}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function render(nums) {
    return new Array(nums).fill(1).map((e, i: number) => {
      if (i > 0) {
        return (
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Document
                key={i}
                file="crypto-4.5.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={i + 1} />
              </Document>
            </div>

            <p style={{ display: "flex", justifyContent: "center" }}>
              Page {i + 1} of {numPages}
            </p>
          </div>
        );
      }
    });
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Document file="crypto-4.5.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>

      <p style={{ display: "flex", justifyContent: "center" }}>
        Page {pageNumber} of {numPages}
      </p>
      {
        numPages > 0 && render(numPages) //这里显示除了第一张PDF，剩下所有的PDF
      }
    </div>
  );
}

export default MyApp;
