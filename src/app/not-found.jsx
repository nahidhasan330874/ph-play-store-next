import Link from "next/link";

 

 

const  NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black text-center px-4">
      
      <h1 className="text-6xl font-bold text-red-500 mb-4">
        Oops!
      </h1>

      <h2 className="text-2xl text-white font-semibold mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-500 mb-6">
        An unexpected error has occurred.
      </p>

      <div className="flex ">
        {/* Go Home Button */}
        <Link href={'/'}>
          <button className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition">
            Go Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default  NotFoundPage;