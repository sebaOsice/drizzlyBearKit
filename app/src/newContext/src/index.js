import AccountData from "./AccountData.js";
import ContractData from "./ContractData.js";
import PostboardData from "./PostboardData.js";
import ContractForm from "./ContractForm.js";
import LoadingContainer from "./LoadingContainer.js";
import AccountDataNew from "./new-context-api/AccountData";
import ContractDataNew from "./new-context-api/ContractData";
import PostboardDataNew from "./new-context-api/PostboardData";
import ContractFormNew from "./new-context-api/ContractForm";

const newContextComponents = {
  AccountData: AccountDataNew,
  ContractData: ContractDataNew,
  ContractForm: ContractFormNew,
  PostboardData: PostboardDataNew,
};

export {
  AccountData,
  ContractData,
  ContractForm,
  PostboardData,
  LoadingContainer,
  newContextComponents,
};
