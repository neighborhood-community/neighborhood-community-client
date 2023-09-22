import ValidProvider from './context/authorizationContext';
import Router from './router/Router';
import { GlobalStyle } from './style/globalStyle';

function App() {
  return (
    <ValidProvider>
      <Router />
      <GlobalStyle />
    </ValidProvider>
  );
}

export default App;
