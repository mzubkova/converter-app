import React, { useState, lazy } from "react";
import { IExchangeRate } from "../../store/currency/types";
import { USD, EUR } from "../../constants/index";
import { getStorageData, setStorageData } from "../../helpers/helpers";
import { StCurrencyList, StTitle } from "./styled";
import { StInput, StButton, StFlex } from "../styled/common";

export type TCurrencyList = {
  exchange_rates: Array<IExchangeRate>;
};

const CurrencyList = ({ exchange_rates }: TCurrencyList) => {
  const [value, setValue] = useState("");

  const getCurrency = exchange_rates.filter((rate) => {
    return rate.base_ccy === getStorageData("currency")?.toUpperCase()
      ? rate
      : null;
  });

  const customRateBase = getCurrency.find(
    (rate) => rate.base_ccy === getStorageData("currency")?.toUpperCase()
  );
  const customRateEUR = getCurrency.find((rate) => rate.ccy === EUR);
  const customRateUSD = getCurrency.find((rate) => rate.ccy === USD);

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  const handleConfirm = () => {
    setStorageData("currency", JSON.stringify(value));
    setValue("");
  };
  return (
    <StFlex
      height="100vh"
      justifyContent="space-between"
      backgroundColor="#80ed99"
    >
      <StCurrencyList>
        <div>
          <StTitle>Base currency: {customRateBase?.base_ccy}</StTitle>
          <StTitle>
            1 USD: {customRateEUR ? Number(customRateEUR?.buy).toFixed(2) : ""}
          </StTitle>
          <StTitle>
            1 EUR: {customRateUSD ? Number(customRateUSD?.buy).toFixed(2) : ""}
          </StTitle>
        </div>
        <div>
          <StTitle>Change base currency</StTitle>
          <StFlex>
            <StInput
              value={value}
              onChange={handleChange}
              label="Enter currency"
            ></StInput>
            <StButton
              onClick={handleConfirm}
              color="blue"
              variant="contained"
              data-testid="btn-save"
              margin="0 0 0 20px"
            >
              Save
            </StButton>
          </StFlex>
        </div>
      </StCurrencyList>
    </StFlex>
  );
};

export default CurrencyList;
