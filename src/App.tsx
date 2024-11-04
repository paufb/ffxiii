import { useRoutes } from 'react-router-dom';
import './App.css'
import './fonts.css';
import { InventoryPage } from './pages/InventoryPage.tsx';

function App() {
  const routes = useRoutes([
    { path: '/', element: <></> },
    { path: '/inventory', element: <InventoryPage /> }
  ]);

  return (
    <>
      <div className="background" />
      {routes}
    </>
  );
}

export default App
