interface productid {
  params: {
    productId: string;
  };
}

const page = ({ params }: productid) => {
  const { productId } =  params;
  return <div>Product is here {productId}</div>;
};

export default page;
