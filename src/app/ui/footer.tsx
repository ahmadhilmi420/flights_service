import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white mt-10 px-10">
      <div className="container mx-auto px-3 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex-col-reverse items-center justify-between">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <ul>
              <li>Customer Service</li>
              <li>Service Protection</li>
              <li>Feedback Situs Web</li>
            </ul>
          </div>
          <div className="flex-col justify-center items-center">
            <h3 className="font-semibold mb-2">About Us</h3>
            <ul>
              <li>About TiketQ</li>
              <li>News</li>
              <li>Resources and Policies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Get The App</h3>
            <ul>
              <li>Android App</li>
              <li>Iphone App</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-sm text-gray-500">
            Hak cipta © 2015 TiketQ.com Travel Pte. Ltd. All rights reserved
            <br />
            PT. INITTIKETQUE | Batam, Indonesia
          </p>
          <div className="flex space-x-3 text-xl justify-center items-center mt-2">
            <a href="#">
              <Image src="/globe-svgrepo-com.svg" alt="File icon" width={25} height={25} />
            </a>
            <a href="#">
              <Image src="/twitter.29b6fbd9.svg" alt="File icon" width={25} height={25} />
            </a>
            <a href="#">
              <Image src="/instagram.7062f55e.svg" alt="File icon" width={25} height={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
