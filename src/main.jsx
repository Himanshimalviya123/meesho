import { createRoot } from 'react-dom/client'
import "../css/style.css";

import App from './App.jsx'
import Store from '../pages/store.jsx';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
<Provider store={Store}>
 <App />
</Provider>
   

)
