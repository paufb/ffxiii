import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { MemoizedMainMenuPage } from './pages/MainMenuPage.tsx';
import { InventoryPage } from './pages/InventoryPage.tsx';
import { HelpHeader } from './components/HelpHeader.tsx';
import './App.css'
import './fonts.css';

function App() {
  const [text, setText] = useState('');
  const routes = useRoutes([
    { path: '/', element: <MemoizedMainMenuPage setHelpHeaderText={setText} /> },
    { path: '/inventory', element: <InventoryPage setHelpHeaderText={setText} /> }
  ]);

  return (
    <>
      <div className="background" />
      <HelpHeader theme={'dark'} text={text} />
      {routes}
    </>
  );
}

export default App
