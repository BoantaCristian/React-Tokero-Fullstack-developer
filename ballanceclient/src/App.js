import React, {useState} from 'react'
import { store } from './services/actions/store'
import { Provider } from "react-redux"
import { Paper } from '@material-ui/core'
import Deposits from './components/Deposits';
import Withdrawals from './components/Withdrawals';
import TradeOrders from './components/TradeOrders';
import SelectOperation from './components/SelectOperation';


function App() {
  const selectOption = "deposits"
  const [selectedOption, setSelectedOption] = useState(selectOption)
  return (
    <Provider store={store}>
      <Paper className="col-md-8 offset-2 col-lg-6 offset-3 container">
        <SelectOperation selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        {
          selectedOption === "deposits" && <Deposits />
        }
        {
          selectedOption === "withdrawals" && <Withdrawals />
        }
        {
          selectedOption === "tradeOrders" && <TradeOrders />
        }
      </Paper>
    </Provider>
  );
}

export default App;
