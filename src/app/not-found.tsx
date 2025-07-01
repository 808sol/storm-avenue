import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a1a1a' }}>
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary-black mb-4" style={{ color: '#fdfcf3' }}>404</h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-6">Page Not Found</h2>
          <p className="text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary-black text-white rounded-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#fdfcf3', color: '#1a1a1a' }}
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
