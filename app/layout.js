import "./globals.css";
import { Inter} from "next/font/google"

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Reflct",
  description: "Journal App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0" />
        {/* header */}
        <main className="min-h-screen">{children}</main>
        <footer className="bg-orange-100 py-12 bg-opacity-10">
          <div className="mx-auto px-4 text-center text-gray-900">
            <p>Made with 💗 by Prabuddha</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
