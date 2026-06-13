import SubHeader from "@/app/_components/SubHeader";
import Footer from "@/app/_components/Footer";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SubHeader />
      {children}
      <Footer />
    </>
  );
}
