import React from "react";
import { BrowserRouter } from "react-router-dom";
import RenderRouter from "./routes";
import ThemeProvider from "~/theme/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
