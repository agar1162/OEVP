import { icons } from "lucide-react";
import "./globals.css";


export const metadata = {
  title: "UC Berkeley EVP",
  description: "Association of Students of University of California Office of the Executive Vice-President website. Tools, resources, and links for UC Berkeley students!",
  icons: {
    icon: '/ASUC-logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 
