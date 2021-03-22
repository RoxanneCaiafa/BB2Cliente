import './assets/css/main.css';
import Header from './components/Header';

import { AppRouter } from './components/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {

  return (
    <Provider store={store}>
      <Header />
      <AppRouter />
    </Provider>)
}
export default App;
