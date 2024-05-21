import Navbar from "./_components/navbar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="text-purple-600">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
