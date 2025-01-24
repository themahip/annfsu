import Image from 'next/image'
import Header from '../../components/Header'

const executives = [
  {
    name: 'Ram Sharma',
    position: 'President',
    image: '/placeholder.svg?height=200&width=200',
    bio: 'Ram Sharma is committed to improving campus facilities and student welfare.'
  },
  {
    name: 'Sita Gurung',
    position: 'Vice President',
    image: '/placeholder.svg?height=200&width=200',
    bio: 'Sita Gurung has been a strong advocate for gender equality in education.'
  },
  // Add more executives here...
]

export default function CentralCampusCommittee() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">ANNFSU Kathmandu University Central Campus Committee</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((exec, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <Image src={exec.image || "/placeholder.svg"} alt={exec.name} width={200} height={200} className="w-full h-auto rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{exec.name}</h2>
              <h3 className="text-lg text-gray-600 mb-2">{exec.position}</h3>
              <p>{exec.bio}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2023 ANNFSU Kathmandu University. All rights reserved.
        </div>
      </footer>
    </div>
  )
}