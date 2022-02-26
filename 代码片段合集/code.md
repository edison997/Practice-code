# 代码片段合集

- ## 1、文件下载

```tsx
// item是数据源
handleDownload = (item) => {
  axios.get(`${item.url}`, { responseType: "blob" }).then((blob) => {
    const a = document.createElement("a");
    const href = window.URL.createObjectURL(blob.data);
    a.setAttribute("href", href);
    a.setAttribute("download", item.fileName);
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(href);
    document.body.removeChild(a);
  });
};
```

- ## 2、递归删除树结构中的对象

```tsx
function filter(condition = () => false, key) {
  return function filtrate(data) {
    return data.reduce((res, item) => {
      if (!condition(item)) {
        const children = item[key];
        res.push({
          ...item,
          [key]: Array.isArray(children) ? filtrate(children) : children,
        });
      }
      return res;
    }, []);
  };
}

var data = [
  {
    id: 1,
    name: "mock",
    type: 1,
    subs: [
      {
        id: 4,
        name: "agency.sol",
        type: 2,
        subs: {
          id: 10,
          name: "account.sol",
          type: 2,
          subs: null,
        },
      },
      {
        id: 5,
        name: "blockchain.sol",
        type: 2,
        subs: null,
      },
    ],
  },
  {
    id: 2,
    name: "public",
    type: 1,
    subs: [
      {
        id: 6,
        name: "vote.sol",
        type: 2,
        subs: null,
      },
      {
        id: 7,
        name: "user.sol",
        type: 2,
        subs: null,
      },
    ],
  },
];

var filterIdEqual2 = filter((item) => item.id == 2, "subs");
var filterIdEqual7 = filter((item) => item.id == 7, "subs");

console.log(filterIdEqual2(data));
console.log("----------");
console.log(filterIdEqual7(data));
```

- ## 3、上传文件部分代码

```tsx
    <input
        type='file'
        id={}
        title={}
        // 上传类型
        accept={}
        name={}
        onChange={(e)=>handleOnChange(e)}
        palceholder=''
        // 多文件上传
        multiple
    />

    <span title='点击上传' style={{}}>
        为了覆盖原来的样式
    </span>
-----------------------------------------------------------------------------------

    // 函数
    const handleOnChange= (e:any)=>{
        e.preventDefault();
        // 获取上传的信息
        let file = e.target.files;
        // fiel是类数组，对他进行转换
        let fileList:any[]= Array.from(file)


        // 这里用到了umi request（请求根据实际情况去写）
        let formData = new FormData();
        // 对上传的数量进行判断，请求不同接口
        if(file.length > 2 ){
            formData.append(singleFilename,file[0])
            // 单个图片的请求
            Request.post(uploadurl,{
                data:formData,
                requestType:'form'
            }).then((res)=>{

            })
        }else {
            for (let i = 0 ; i < fileList.length; i++){
                formData.append(multipleFileName,fileList[i])
            }
            Request.post(multipleUploadurl,{
                data:formData,
                requestType:'form'
            }).then((res)=>{

            })
        }

    }
```

- ## 4、滚动条的样式修改

```css
/* 有前两个一般就够用了 */
.innerbox::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
.innerbox::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.innerbox::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}


主要有下面7个属性
::-webkit-scrollbar 滚动条整体部分，可以设置宽度啥的
::-webkit-scrollbar-button 滚动条两端的按钮
::-webkit-scrollbar-track  外层轨道
::-webkit-scrollbar-track-piece  内层滚动槽
::-webkit-scrollbar-thumb 滚动的滑块
::-webkit-scrollbar-corner 边角
::-webkit-resizer 定义右下角拖动块的样式

```

- ## 5、nav 的选中高亮

```tsx
//利用index 来判断是否被选中
const [currentIndex, setCurrentIndex] = useState<number>(0);

const handleClick = (index, item) => {
  setCurrentIndex(index);
};

const handle = () => {
  return data.map((item, index) => {
    <li key={index} onClick={() => handleClick(index, item)}>
      <div className={currentIndex === index ? style.liActive : ""}>
        {item.name}
      </div>
    </li>;
  });
};
```
