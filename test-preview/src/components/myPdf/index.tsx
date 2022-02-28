import React, { useEffect, useState } from "react";
import PDF from "react-pdf-js";
import axios from "axios";
function MyApp() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [blob, setBlob] = useState<any>(null);
  const [pdfblob, setPdfBlob] = useState<any>(null);

  useEffect(() => {
    //重点在此！！！！！如何将PDF文件流转base64
    axios({
      url: "crypto-4.5.pdf",
      method: "get",
      responseType: "blob", //必写！
    }).then((res) => {
      setBlob(res.data);
      let reader = new FileReader();
      reader.readAsDataURL(res.data); // 转换为base64，可以直接放入a标签href
      reader.addEventListener("load", function () {
        let base64 = reader.result as string;
        setPdfBlob(base64.split(",")[1]);
      });
    });
  }, []);
  //史诗级重点！不进行异常处理会报错！全网找不到的！

  let newpdfblob = "data:application/pdf;base64," + pdfblob;
  if (!pdfblob) return null;

  function onDocumentLoadSuccess(totalPage: any) {
    setTotalPages(totalPage);
    setCurrentPage(1);
  }
  // function onChangePage(page:any) {
  //   setCurrentPage(page);
  //   console.log(page)
  // }
  function directlyRenderPdf(nums: number) {
    const x = [];
    for (let i = 2; i <= nums; i++)
      x.push(
        <div>
          <div>
            <PDF page={i} key={`x${i}`} file={newpdfblob} />
          </div>
          <p style={{ display: "flex", justifyContent: "center" }}>{i}</p>
        </div>
      );
    return x;
  }

  console.log(directlyRenderPdf(totalPage));
  console.log(pdfblob);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <PDF
            file={newpdfblob} //这里的newpdfblob已经是base64格式了
            onDocumentComplete={onDocumentLoadSuccess}
            page={currentPage}
          />
        </div>
        <p>{page}</p>
      </div>
      {totalPage > 1 && directlyRenderPdf(totalPage)}
    </div>
  );
}

export default MyApp;
