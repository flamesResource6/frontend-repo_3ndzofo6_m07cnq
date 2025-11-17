export default function Footer() {
  return (
    <footer className="mt-20 pb-10 pt-12 bg-gradient-to-t from-emerald-50/50 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Energie Egypt — Made for smart savers.</p>
          <div className="text-xs text-gray-500">Arabic support soon • أسعار الكهرباء في مصر</div>
        </div>
      </div>
    </footer>
  );
}
