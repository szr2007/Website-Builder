//test1
import BuilderLayout from "./builderLayout";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
      <main>    
        <BuilderLayout />    
      </main>
      </DndProvider>
    </div>
  );
}

export default App;
