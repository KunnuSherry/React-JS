import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchListofProduct } from "../react-query/api";
import { useState } from "react";

function ReactQueryExample() {
  const [productName, setProductName] = useState("");
  const queryClient = useQueryClient();

  const { mutateAsync: addNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["productList"]);
    },
  });

  async function handleAddNewProductSubmit() {
    await addNewProductMutation(productName);
    setProductName("");
  }

  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: fetchListofProduct,
  });

  if (isLoading) return <h1>Loading Please Wait</h1>;

  return (
    <>
      <h1>React Query Demo</h1>
      <div>
        <input
          type="text"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          name="name"
          placeholder="Enter the name of the product"
        />
        <button
          onClick={handleAddNewProductSubmit}
          disabled={productName.trim() === ""}
          type="button"
        >
          Add New Product
        </button>
      </div>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No Product Found</h3>
        )}
      </ul>
    </>
  );
}

export default ReactQueryExample;
