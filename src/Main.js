import Catalog from "./Catalog";
import ChefInformation from "./ChefInformation.js";
import CustomerFeedback from "./CustomerFeedback.js";
import OrderPreparation from "./OrderPreparation.js";
import ProductExample from "./ProductExample.js";

function Main() {
  return (
    <main className="main">
      <Catalog />
      <OrderPreparation />
      <ChefInformation />
      <CustomerFeedback />
      <ProductExample />
    </main>
  );
}

export default Main;