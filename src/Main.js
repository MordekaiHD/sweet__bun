import Catalog from "./Catalog";
import ChefInformation from "./ChefInformation.js";
import CustomerFeedback from "./CustomerFeedback.js";
import OrderPreparation from "./OrderPreparation.js";

function Main() {
  return (
    <section className="main">
      <h1 className="main__title">Для любых событий и дорогих вам людей </h1>
      <Catalog />
      <OrderPreparation />
      <ChefInformation />
      <CustomerFeedback />
    </section>
  );
}

export default Main;