import './index.css';
import React, { useMemo, useState, useRef, useCallback } from 'react';


//  每行多少列
const COLUMN = 5;
//  每个元素宽度
const WIDTH = 120;
//  每个元素高度
const HEIGHT = 80;
// 图片左右 padding
const IMAGE_PADDING = 5;

const showList = [
  {
    id: 2,
    name: 'osmo pocket',
    image: 'https://cdn.pixabay.com/photo/2021/05/29/05/48/beach-6292506__340.jpg',
  },
  {
    id: 4,
    name: 'mavic pro',
    image: 'https://cdn.pixabay.com/photo/2021/05/24/11/56/lake-6278825__340.jpg',
  },
  {
    id: 1,
    name: 'mavic mini2',
    image: 'https://cdn.pixabay.com/photo/2021/05/25/12/50/flower-6282371__340.jpg',
  },
  {
    id: 3,
    name: '机甲大师s1',
    image: 'https://cdn.pixabay.com/photo/2021/05/28/15/58/marina-6291287__340.jpg',
  },
  {
    id: 0,
    name: 'mavic 2',
    image: 'https://cdn.pixabay.com/photo/2021/05/29/17/37/fantasy-6293929__340.jpg',
  },
];


/** 将某元素插入到数组中的某位置 */
export function insertBefore(list, from, to) {
  const copy = [...list];
  const fromIndex = copy.indexOf(from);
  if (from === to) {
    return copy;
  }
  copy.splice(fromIndex, 1);
  const newToIndex = to ? copy.indexOf(to) : -1;
  if (to && newToIndex >= 0) {
    copy.splice(newToIndex, 0, from);
  } else {
    // 没有 To 或 To 不在序列里，将元素移动到末尾
    copy.push(from);
  }
  return copy;
}

/** 判断是否数组相等 */
export function isEqualBy(a, b, key) {
  const aList = a.map((item) => item[key]);
  const bList = b.map((item) => item[key]);
  
  let flag = true;
  aList.forEach((i, idx) => {
    if (i !== bList[idx]) {
      flag = false
    }
  })
  return flag;
}


const DragAndDropPage = () => {
  const [list, setList] = useState(showList);
  const dropAreaRef = useRef(null)
  const dragItemRef = useRef()

  // 动画需要，需要保持一定的渲染顺序
  const sortedList = useMemo(() => {
    return list.slice().sort((a, b) => {
      return a.id - b.id;
    });
  }, [list]);

  const listHeight = useMemo(() => {
    const size = list.length;
    return Math.ceil(size / COLUMN) * HEIGHT;
  }, [list]);

  const handleDragStart = (e, data) => {
    dragItemRef.current = data
    const el = dropAreaRef.current?.querySelector(`[data-id="${data.id}"]`)
    if (el) {
      el.classList.add('.draggingItem')
    }
  }

  const handleDragEnd = useCallback(()=>{
    const data = dragItemRef.current
    if (data) {
      const el = dropAreaRef.current?.querySelector(`[data-id="${data.id}"]`)
      if (el) {
        el.classList.remove('.draggingItem')
      }
      dragItemRef.current = undefined
    }
  }, [])

  const updateList = useCallback((clientX, clientY) => {
      const dropRect = dropAreaRef.current?.getBoundingClientRect();
      
      if (dropRect) {
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

        const col = Math.floor(offsetX / WIDTH);
        const row = Math.floor(offsetY / HEIGHT);
        let currentIndex = row * COLUMN + col;
        const fromIndex = list.indexOf(dragItem);
        if (fromIndex < currentIndex) {
          // 从前往后移动
          currentIndex++;
        }
        const currentItem = list[currentIndex];

        const ordered = insertBefore(list, dragItem, currentItem);
        if (isEqualBy(ordered, list, 'id')) {
          return;
        }
        setList(ordered);
      }
    }, [list]);

  const handleDragOver = useCallback((e) => {
      e.preventDefault();
      updateList(e.clientX, e.clientY);
    }, [updateList]);

  return (
    <div 
      className="warpper"
      // 绑定 ref 属性
      ref={dropAreaRef}
      style={{ width: COLUMN * (WIDTH + IMAGE_PADDING) + IMAGE_PADDING }}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <ul className="list" style={{ height: listHeight }}>
        {sortedList.map((item) => {
          const index = list.findIndex((i) => i === item);
          const row = Math.floor(index / COLUMN);
          const col = index % COLUMN;
          return (
            <li
              key={item.id}
              className="item"
              // draggable 属性的值设置为 true 使其变为可拖动元素
              draggable
              style={{
                height: HEIGHT,
                left: col * (WIDTH + IMAGE_PADDING),
                top: row * HEIGHT,
                padding: `0 ${IMAGE_PADDING}px`
              }}
              data-id={item.id}
              // 同时绑定 ondragstart 事件
              onDragStart={(e) => handleDragStart(e, item)}
            >
              <img src={item.image} alt={item.name} width={WIDTH} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(DragAndDropPage);
