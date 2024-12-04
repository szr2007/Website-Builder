import BuilderLayout from "./components/BuilderLayout";
import Login from "./components/Login"


import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div>  
      <main>    
        <Login />
      </main>
    </div>
    </DndProvider>
  );
}

export default Login;
