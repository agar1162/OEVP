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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>      
      <body>
        {children}
      </body>
    </html>
  );
} 
