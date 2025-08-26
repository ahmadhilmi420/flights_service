import Navbar from "../ui/navbar";
import Header from "../ui/header";
import Footer from "../ui/footer";

export default function HomeFlight() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header />

      {/* Airlines & Payment Partners */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div>
            <h2 className="font-semibold mb-4">Airlines Partners</h2>
            <p>Domestic & International Airlines Partners</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img className="bg-gray-200 flex items-center justify-center" src="/Image1.png" />
              <img className="bg-gray-200 flex items-center justify-center" src="/Image3.png" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Payment Partners</h2>
            <div className="grid p-2">
              <img className="bg-gray-200 flex items-center justify-center" src="/Image2.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl flex items-center justify-center mb-2">
              <img className="h-auto w-40 flex items-center justify-center" src="/SecuredPayment2.png" />
            </div>
            <h3 className="font-bold">Secure Transaction Guaranteed</h3>
            <p className="text-sm mt-2">Security and privacy of your online transaction are protected by RapidSSL. Receive instant confirmation and e-ticket in your email.</p>
          </div>
          <div>
            <div className="text-3xl flex items-center justify-center mb-2">
              <img className="h-auto w-40 flex items-center justify-center" src="/Assistant.png" />
            </div>
            <h3 className="font-bold">Assistance and Support</h3>
            <p className="text-sm mt-2">We can help you navigate changes in travel plans, delays, or unforeseen circumstances.</p>
          </div>
          <div>
            <div className="text-3xl flex items-center justify-center mb-2">
              <img className="h-auto w-40 flex items-center justify-center  " src="/SecuredPayment.png" />
            </div>
            <h3 className="font-bold">Various Payment Option</h3>
            <p className="text-sm mt-2">Easy transaction with various options from ATM Transfer, Credit Card, or Internet Banking.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
