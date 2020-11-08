import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counterReducer from './redux/reducers/counterReducer';
import Table from './components/Table';
import ValidationTextFields from './components/MaterialForm';
import CrudApp from './components/CrudApp';

// creating store
const store = createStore(counterReducer);

function App() {
  
  return (
    <div className="App">
      <CrudApp />
      {/* <ValidationTextFields /> */} 
      {/* <Table /> */}
      {/* <Provider store={store}>
          <Counter />
      </Provider>       */}
    </div>
  );
}

export default App;
