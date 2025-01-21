import '../index.css'

function Home() {
    return (
        <div>
            <div className='text-3xl'>Bridging Language Gaps for Better Patient Care</div>
            
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-1 px-2 m-3 rounded-full">
              Button
            </button>

            <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-end">
  <div className="row-span-3 bg-purple-950">01</div>
  <div className="col-span-2 bg-purple-950">02</div>
  <div className="row-span-2 col-span-2 bg-purple-950">03</div>
</div>
          


          </div>
      );
    };

export default Home;
