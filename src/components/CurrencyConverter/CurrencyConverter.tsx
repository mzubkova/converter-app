import React, { useState, useEffect } from "react";
import { IExchangeRate } from "../../store/currency/types";
import { StCurrencyConverter } from "./styled";
import { Typography } from "@mui/material";
import { StButton, StInput, StFlex } from "../styled/common";

export type TCurrencyConverter = {
  exchange_rates: Array<IExchangeRate>;
  getExchangeRates: () => void;
};

const CurrencyConverter = ({
  exchange_rates,
  getExchangeRates,
}: TCurrencyConverter) => {
  useEffect(() => {
    getExchangeRates();
  }, []);

  const initialState = {
    inputValue: "",
    count: "",
    currencyFrom: "",
    currencyTo: "",
    error: "",
    result: "",
  };

  const [state, setState] = useState<typeof initialState>(initialState);
  const { count, currencyFrom, currencyTo, inputValue, error, result } = state;

  const handleChangeInput = (e) => {
    let value = e.target.value;
    const arrayFromInput = value
      .split(" ")
      .filter((str) => str.replace(/\s+/g, ""));

    setState({
      ...state,
      inputValue: value,
      count: arrayFromInput[0],
      currencyFrom: arrayFromInput[1],
      currencyTo: arrayFromInput[3],
      error: "",
    });
  };

  const handleConvert = () => {
    let firstValue = Number(count);
    let secondValue = 1;

    if (!currencyFrom && !currencyTo) {
      setState({
        ...state,
        result: "",
        error: "Please, enter correct symbols",
      });
    } else {
      for (let i = 0; i < exchange_rates.length; i++) {
        if (exchange_rates[i]?.ccy === currencyFrom?.toUpperCase()) {
          firstValue = Number(count) * Number(exchange_rates[i]?.buy);
        }
        if (exchange_rates[i]?.ccy === currencyTo?.toUpperCase()) {
          secondValue = Number(exchange_rates[i]?.buy);
        }
      }

      let result = firstValue / secondValue;
      return setState({
        ...state,
        result: result.toFixed(2),
        error: "",
      });
    }
  };

  return (
    <StCurrencyConverter>
      <StFlex justifyContent="space-between">
        <StInput
          value={inputValue}
          onChange={handleChangeInput}
          label="1 usd in uah"
        />
        <StButton
          onClick={handleConvert}
          variant="contained"
          margin="20px 0 20px 20px"
          color="blue"
        >
          Convert
        </StButton>
      </StFlex>
      <Typography fontSize="14px" color="#d43e5b">
        {error}
      </Typography>
      <Typography fontSize="20px">Result: {result}</Typography>
    </StCurrencyConverter>
  );
};

export default CurrencyConverter;
