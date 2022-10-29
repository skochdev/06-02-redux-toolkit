import { GlobalStyle } from '../GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };
