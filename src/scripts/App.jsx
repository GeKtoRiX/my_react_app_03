// Переход между разными страницами(компонентами) сайта.
import { Route, Routes } from "react-router-dom";
// =======[REACT_ROUTES_COMPONENTS]=======
import MainLayout from "./layouts/MainLayout";
// =======[_________END__________]=======
// Стили рендеринга главного компонента сайта.
import "../styles/scss/index.scss";
// Главная функция рендеринга элементов сайта react приложения.
function App() {
  // =======[HOOKS]=======

  // =======[_END_]=======

  // =======[HANDLERS]=======

  // =======[___END___]=======
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Корневой каталог сайта. */}
        </Route>
      </Routes>
    </div>
  );
}
export default App;
