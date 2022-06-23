import { Provider } from "react-redux";
import './App.css';
import { createStore } from "redux";
import {reducer} from './features/conatainer/store';
import Parent from './features/conatainer/parent'

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Parent />
      </Provider>
    </div>
  );
}

export default App;