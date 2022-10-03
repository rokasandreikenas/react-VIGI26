// Susikurti pagal reikiama standarta ieškoti Portfolio.js
// Pasikeisti index.js į <Items />
// Dizaina rasite 4 uzduotyje CodeAcademy platforma
// Optional: Add funkcionalumas, prisideti inputus ir add button
import Card from "../../components/Card/Card";
import "./Items.css";
import { useState, useEffect } from "react";

// Jeigu norime, kad useEffect suveiktų tik viena kartą - naudojam tuščia dependecy masyvą []

const Items = () => {
  const [products, setProducts] = useState([]); // useState() - 0, "", [], {}, null, undefined
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(`https://golden-whispering-show.glitch.me/?page=${page}`);
    fetch("https://golden-whispering-show.glitch.me")
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  // req.params.page
  // SQL SELECT * from items where page = 4 // 10[]

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.id !== productId)
    );
  };

  return (
    <>
      <h2>Page {page}</h2>
      <div onClick={() => setPage(page + 1)}>1 2 3 4 5</div>
      <div className="products">
        {isLoading && <h1>Duomenys kraunasi...</h1>}

        {products.map((item) => (
          <div key={item.id} onClick={() => handleDeleteProduct(item.id)}>
            <Card
              imageUrl={item.image}
              text={`${item.title} ($${item.price})`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
