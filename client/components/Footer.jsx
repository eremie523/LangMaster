
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 ">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-white-600 text-sm">
          © {new Date().getFullYear()} LangMaster. All rights reserved.
        </p>
      </div>
    </footer>
  )
}