interface user {
  params: { id: string };
}
function Userdetailpage({ params: { id } }: user) {
  return (
    <>
      <div>this is id:{id}</div>
    </>
  );
}
export default Userdetailpage;
