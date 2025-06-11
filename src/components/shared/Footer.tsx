export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-stone-100 py-6">
      <div className="container-margins">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © {currentYear} Olivia Jardine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
