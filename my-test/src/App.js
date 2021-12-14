import Test from "./components/test/Test";
import DragAndDropPage from "./components/cankao/index.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components/dnd/Container";
import Card2 from "./components/three/c1";
import BasicCard from "./components/test/11.jsx";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("https://api.zuk.pw/situ/book/isbn/9787201094605 ")
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className="App" style={{ height: "10000px" }}>
      <Test />
      {/* <DragAndDropPage/> */}
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
      <BasicCard />
      <Card2 />
    </div>
  );
}

export default App;
