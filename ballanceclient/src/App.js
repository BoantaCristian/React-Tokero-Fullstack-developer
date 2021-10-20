import { store } from './services/actions/store'
import { Provider } from "react-redux"
import Deposits from './components/Deposits';
import { Paper } from '@material-ui/core'
import Withdrawals from './components/Withdrawals';
import SelectOperation from './components/SelectOperation';


function App() {

  return (
    <Provider store={store}>

    <Paper className="col-md-8 offset-2 col-lg-6 offset-3 container">
      <SelectOperation />
      <Deposits />
    </Paper>
    </Provider>
  );
}

export default App;
