// Переход между разными страницами(компонентами) сайта.
import { Route, Routes } from 'react-router-dom';
// =======[REACT_ROUTES_COMPONENTS]=======
import MainLayout from './MainLayout';
import { Home } from './components/BookList/Home';
import BookList from './components/BookList/BookList'
import UseState from './components/Hooks/useState/UseState';
import UseEffect from './components/Hooks/useEffect/UseEffect';
import BirthdayReminder from './components/miniProjects/birthdayReminder/BirtdayReminder';
import { About } from './components/BookList/About';
// =======[_________END__________]=======
// Стили рендеринга главного компонента сайта.
import '../styles/scss/index.scss';

// Главная функция рендеринга элементов сайта react приложения.
function App() {
  // =======[HOOKS]=======

  // =======[_END_]=======

  // =======[HANDLERS]=======

  // =======[___END___]=======
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index path='Home' element={<Home />}></Route>
          <Route index path='Books' element={<BookList />}/>
          <Route index path='UseState' element={<UseState />} />
          <Route index path='UseEffect' element={<UseEffect />} />
          <Route index path='BirthdayReminder' element={<BirthdayReminder />} />
          <Route index path='About' element={<About />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
