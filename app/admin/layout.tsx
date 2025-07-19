import { ReactNode } from "react";
interface prop {
  children: ReactNode; //ReactNode is a type that represents any thing that can be rendered by react like stirng ,numbers,Fragments (<>...</>)etc.
}

const Adminlayout = ({ children }: prop) => {
  return (
    <div className="flex">
      <aside className="bg-gray p-5 ">
        sidebar
        <div>{children}</div>
      </aside>
    </div>
  );
};

export default Adminlayout;
