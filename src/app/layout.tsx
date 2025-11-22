import "./globals.css";

export const metadata = {
  title: "Essence Magazine",
  description:
    "A curated magazine exploring design, culture, and thoughtful living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
