import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counterReducer from './redux/reducers/counterReducer';

// creating store
const store = createStore(counterReducer);

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
          <Counter />
      </Provider>      
    </div>
  );
}

export default App;
