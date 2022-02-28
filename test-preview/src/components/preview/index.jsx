import React from "react";
import FileViewer from "react-file-viewer";
import { CustomErrorComponent } from "custom-error";

const View = () => {
  //   const filePath = "http://xxx.docx" || "http://ccc.pdf";
  //   const type = filePath.split(".")[filePath.split(".").length - 1];

  const file = "http://example.com/image.png";
  const type = "png";
  const onError = (e) => {
    console.log(e, "error in file-viewer");
  };
  return (
    <div className="view">
      <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={onError}
      />
    </div>
  );
};

export default View;
