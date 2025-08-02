interface Props {
  params: {
    slug: string,
  };
}
const Docs = ({params}: Props) => {
    const slugurl = params.slug
if(slugurl?.length ===2){
  return( <h1>you are viewing the docs of feature {slugurl[0]} and concept of {slugurl[1]}  </h1>)
}else if (slugurl?.length===1 ){
  return (
    <h1> viewing docs for feature {slugurl[0]}</h1>
  )
}

  return <div>Docs slug page {slugurl}  </div>;
};

export default Docs;
