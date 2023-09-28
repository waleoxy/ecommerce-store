import getProducts from "@/actions/get-products";

interface CategoryProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const Category: React.FC<CategoryProps> = async ({ params, searchParams }) => {
  const product = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    isFeatured: true,
  });

  return <div>This is the Category Page</div>;
};

export default Category;
