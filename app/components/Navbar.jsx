function Logo({ content, logo }) {
  return (
    <div className="flex gap-2 rounded-lg bg-yellow-100">
      <div>{logo}</div>
      <div className="rounded-full bg-green-300 outline-offset-0 bg-inherit border-red-300">
        {content}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 h-16 shadow-md bg-white z-50">
        <div>Wize</div>
        <div className="flex gap-4">
          <Logo content={"as"} logo={"Ashish"} />
          <Logo content={"as"} logo={"Account"} />
          <Logo content={"as"} logo={"Menu"} />
        </div>
      </div>
     
    </div>
  );
}
