import Catalog from "../Main/Catalog.js";
import ChefInformation from "./ChefInformation.js";
import CustomerFeedback from "../Main/CustomerFeedback.js";
import OrderPreparation from "./OrderPreparation.js";
import ProductExample from "../Main/ProductExample.js";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title" id='catalog'>Для любых событий и дорогих вам людей </h1>
      <Catalog />
      <OrderPreparation />
      <ChefInformation />
      <CustomerFeedback />
      <ProductExample />
    </main>
  );
}

export default Main;