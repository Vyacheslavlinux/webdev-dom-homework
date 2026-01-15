export const ChangeHTML = (symbol) => {
        return symbol.replaceAll("<", "&lt;").replaceAll(">", "&gt");
      };