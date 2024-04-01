import React from "react";
import {
  StyledCatagories,
  StyledCatagoriesItems,
  StyledCatagoriesCorousal,
} from "./Catagories.styles";
import { CATEGORIES } from "../../utils/categories";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { ITranslations } from "../../utils/translations";

const Catagories = () => {
  const { text, activeCatagories, setActiveCatagories } = useAppContext();

  return (
    <StyledCatagoriesCorousal>
      <StyledCatagories>
        {CATEGORIES.map((name, index) => {
          return (
            <StyledCatagoriesItems
              active={name.toLowerCase() === activeCatagories.toLowerCase()}
              key={index}
              onClick={() => setActiveCatagories(name)}
            >
              <Text>{text[name as keyof ITranslations]}</Text>
            </StyledCatagoriesItems>
          );
        })}
      </StyledCatagories>
    </StyledCatagoriesCorousal>
  );
};

export default Catagories;
