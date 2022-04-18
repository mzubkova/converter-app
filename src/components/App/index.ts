import App from "./App";
import { connect } from "react-redux";
import { ApplicationState } from "src/store/types";
import { getExchangeRatesState } from "../../store/currency/selectors";

const mapStateToProps = (state: ApplicationState) => ({
  exchange_rates: getExchangeRatesState(state),
});

export default connect(mapStateToProps)(App);
