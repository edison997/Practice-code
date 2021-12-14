import React, { useState, useMemo, useRef, useCallback, memo } from "react";
import { imgList } from "../imgList/imgList";
import "./test.css";
import "../../assets/iconfont/iconfont.css";
//  每行多少列
const COLUMN = 5;
//  每个元素宽度
const WIDTH = 128;
//  每个元素高度
const HEIGHT = 80;

/** 将某元素插入到数组中的某位置 */
export function insertBefore(list, from, to) {
  // console.log(from, to);
  // 展开原数组
  const copy = [...list];
  // 对比顺序
  const fromIndex = copy.indexOf(from);
  if (from === to) {
    return copy;
  }
  // 下面就是交换位置的操作（也就是删除之前位置的元素，然后把这个元素放到拖动后的位置）

  // 删除拖动的元素
  copy.splice(fromIndex, 1);
  // 判断拖动后的位置
  const newToIndex = to ? copy.indexOf(to) : -1;
  if (to && newToIndex >= 0) {
    // 把拖动前的元素添加到拖动后的位置去
    copy.splice(newToIndex, 0, from);
  } else {
    // 没有 To 或 To 不在序列里，将元素移动到末尾
    copy.push(from);
  }
  return copy;
}

/** 判断是否数组相等 */
export function isEqualBy(a, b, key) {
  // 返回的是现在数组和之前数组，组成的id组成的a、b数组
  const aList = a.map((item) => item[key]);
  const bList = b.map((item) => item[key]);

  let flag = true;
  // 判断两个数组的每一项的id是不是相等的，有有一项不等说明数组的顺序发生了改变
  aList.forEach((i, idx) => {
    if (i !== bList[idx]) {
      flag = false;
    }
  });
  return flag;
}

function Test() {
  const [state, setState] = useState(imgList);
  const dropAreaRef = useRef();
  const dragItemRef = useRef();

  //确定ul的高度 （假如有只有2行，他的高度就是三倍height）
  const listHeight = useMemo(() => {
    const size = state.length;
    console.log(size);
    return Math.ceil(size / COLUMN) * HEIGHT;
  }, [state]);

  // 获取到拖动的li的数据
  const handleDragStart = (e, data) => {
    dragItemRef.current = data;
    console.log(dragItemRef);
  };

  const updateList = useCallback(
    (clientX, clientY) => {
      const dropRect = dropAreaRef.current?.getBoundingClientRect();

      if (dropRect) {
        // 算出li距离div的距离（dropRect.left,dropRect.top  是div距离窗口原点的坐标） (offsetY,offsetX)这个是li距离div的坐标  （clientX，offsetY）这个是li距离窗口的坐标
        const offsetX = clientX - dropRect.left;
        const offsetY = clientY - dropRect.top;
        const dragItem = dragItemRef.current;

        // 超出拖动区域
        if (
          !dragItem ||
          offsetX < 0 ||
          offsetX > dropRect.width ||
          offsetY < 0 ||
          offsetY > dropRect.height
        ) {
          return;
        }

        // 算出li是第几列，第几行(0就是1)
        const col = Math.floor(offsetX / WIDTH);
        const row = Math.floor(offsetY / HEIGHT);

        // 拖动后要去所在的位置
        let currentIndex = row * COLUMN + col;

        // 拖动的元素所在的位置
        const fromIndex = state.indexOf(dragItem);
        //
        if (fromIndex < currentIndex) {
          // 从前往后移动
          currentIndex++;
        }
        // 拖动后对应位置的元素

        const currentItem = state[currentIndex];

        // 插入数组（state：原数组，dragItem：拖动的元素，currentItem：）
        const ordered = insertBefore(state, dragItem, currentItem);

        // 根据上面函数的判断，是否要去更新数组的内容
        if (isEqualBy(ordered, state, "id")) {
          return;
        }
        setState(ordered);
      }
    },
    [state]
  );

  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      // li相对于文档（窗口左上角原点）所在的坐标
      updateList(e.clientX, e.clientY);
    },
    [updateList]
  );

  const TTT = (e) => {
    console.log(e.target);
    return <img src={e.target.src} alt="" />;
  };
  return (
    <div
      className="testImglistDiv"
      ref={dropAreaRef}
      onDragOver={handleDragOver}
      style={{ width: COLUMN * WIDTH }}
    >
      <svg className="icon-svg" aria-hidden="true">
        <use xlinkHref="#icon-bingtutubiao"></use>
      </svg>
      <ul className="testImgListUl" style={{ height: listHeight }}>
        {state.map((item) => {
          // 找到对应元素的下标
          const index = state.findIndex((i) => i === item);
          const row = Math.floor(index / COLUMN);
          const col = index % COLUMN;
          return (
            <li
              onClick={TTT}
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              style={{
                height: HEIGHT,
                left: col * WIDTH,
                top: row * HEIGHT,
              }}
            >
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-bingtutubiao"></use>
              </svg>
              <img src={item.src} alt="" />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(Test);
