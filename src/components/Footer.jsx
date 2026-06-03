import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-blue-950 text-white mt-20 px-10 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
          src="/logo/fsbm.jpeg"
            className="h-19 w-auto"
          />
          <h1 className="text-2xl font-bold mt-3">
            Club Ibn Khaldoun - CIK
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Un club étudiant dynamique qui vise la réussite,
            l’innovation et l’impact positif.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Contact
          </h2>
          <div className="space-y-3 text-gray-300">
            <a
              href="mailto:fahilmohamed928@gmail.com"
              className="flex gap-2 items-center hover:text-white"
            >
              <Mail size={18} />
              fahilmohamed928@gmail.com
            </a>
            <a
              href="https://wa.me/212761642457"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:text-white"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>
          <div className="flex gap-4 mt-5 text-xl">
            <a
              href="https://www.instagram.com/cik_fsbm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558039119162&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © 2026 Club Ibn Khaldoun - CIK. Tous droits réservés.
      </div>
    </footer>
  );
}
export default Footer;