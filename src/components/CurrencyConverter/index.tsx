import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationState } from "src/store/types";
import { getExchangeRates } from "../../store/currency/actions";
import { getExchangeRatesState } from "../../store/currency/selectors";
import CurrencyConverter from "./CurrencyConverter";

const mapStateToProps = (state: ApplicationState) => ({
  exchange_rates: getExchangeRatesState(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getExchangeRates: () => dispatch(getExchangeRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);
