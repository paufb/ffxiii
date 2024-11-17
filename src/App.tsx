import { useRoutes } from 'react-router-dom';
import './App.css'
import './fonts.css';
import { MainMenuPage } from './pages/MainMenu.tsx';
import { InventoryPage } from './pages/InventoryPage.tsx';
import { HelpHeader } from './components/HelpHeader.tsx';

function App() {
  const routes = useRoutes([
    { path: '/', element: <MainMenuPage /> },
    { path: '/inventory', element: <InventoryPage /> }
  ]);

  return (
    <>
      <div className="background" />
      <HelpHeader theme={'dark'} />
      {routes}
    </>
  );
}

export default App
