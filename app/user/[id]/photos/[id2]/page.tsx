interface pr {
  params: { id2: string };
}
function Userphoto({ params: { id2 } }: pr) {
  return (
    <>
      <div>this is the id:{id2}</div>
    </>
  );
}
export default Userphoto;
