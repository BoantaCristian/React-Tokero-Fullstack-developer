import { store } from './services/actions/store'
import { Provider } from "react-redux"
import Operations from './components/Operations';

function App() {

  return (
    <Provider store={store}>

    <div className="col-md-8 offset-2 col-lg-6 offset-3 container" style={{backgroundColor: 'red'}}>
      <Operations />
    </div>
    </Provider>
  );
}

export default App;
