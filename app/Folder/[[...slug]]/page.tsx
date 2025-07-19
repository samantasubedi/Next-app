interface place {
  params: { slug: string[] };
}
function Earth({ params: { slug } }: place) {
  return <div>this is {slug}</div>;
}
export default Earth;
