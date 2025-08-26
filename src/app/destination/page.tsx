import SearchBar from "../ui/searchbar";
import FilterBar from "../ui/filterbar";
import NoResult from "../ui/noresult";
import Navbar from "../ui/navbar";
import Header from "../ui/header";
import Footer from "../ui/footer";
import CardTiket from "../ui/cardticket";

export default function Destination() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SearchBar />
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <button className="bg-blue-600 text-white px-10 py-3 rounded-2xl space-x-15 -mt-8">Add Route</button>
      </div>
      <FilterBar />
      {/* <NoResult /> */}
      <CardTiket />
      <CardTiket />
      <CardTiket />
      <CardTiket />
      <Footer />
    </div>
  );
}
