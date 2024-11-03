import Product from "../ui/Product";
import shopItems from "../../data/Data";

export default function Category() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-screen-xl lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Danh mục: Áo thun
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {shopItems.map((shopItems, index) => (
              <Product key={index} shopItems={shopItems} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
