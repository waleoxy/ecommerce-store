import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async ({ params }: { params: { id: string } }) => {
  const products = await getProducts({
    isFeatured: true,
    categoryId: "",
    colorId: "",
    sizeId: "",
  });
  const billboard = await getBillboard("95038568-30bc-4f76-94ed-8042971e3da0");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>{" "}
      </div>
    </Container>
  );
};

export default HomePage;
