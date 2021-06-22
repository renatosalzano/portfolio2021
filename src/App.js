import { AppProvider } from "./context/AppContext";
import Router from "./Router";
// STYLE
import "./style/layout.scss";
import "./style/code_style.scss";
import "./style/vsc_style.scss";
import "./style/page.scss";
import "./style/media_query.scss";

function App() {
  return (
    <div className="layout">
      <AppProvider>
        <Router />
      </AppProvider>
    </div>
  );
}

export default App;
