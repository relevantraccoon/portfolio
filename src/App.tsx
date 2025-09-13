import "./App.css";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { GlobalStyles } from "@/styles/GlobalStyles";

function App() {
  return (
    <DefaultThemeProvider>
      <>
        <GlobalStyles />
        <div>App</div>
      </>
    </DefaultThemeProvider>
  );
}

export default App;
