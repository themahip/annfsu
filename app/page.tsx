import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"

const works = [
  { id: 1, title: "Student Rights Campaign", description: "Advocating for student rights and welfare" },
  { id: 2, title: "Educational Reform Initiative", description: "Pushing for improvements in the education system" },
  { id: 3, title: "Community Outreach Program", description: "Engaging with local communities for social impact" },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to ANNFSU Kathmandu University</h1>
            <p className="text-lg mb-4">
              ANNFSU Kathmandu University is a student organization dedicated to promoting student rights, fostering
              academic excellence, and contributing to social progress. We strive to create a vibrant and inclusive
              campus community while addressing key issues affecting students and society at large.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work) => (
                <Link
                  href={`/work/${work.id}`}
                  key={work.id}
                  className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p>{work.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Committees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/rastriya-committee"
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-2">ANNFSU Kathmandu University Rastriya Committee</h3>
                <p>Learn more about our Rastriya Committee and its members.</p>
              </Link>
              <Link
                href="/central-campus-committee"
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-2">ANNFSU Kathmandu University Central Campus Committee</h3>
                <p>Learn more about our Central Campus Committee and its members.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2023 ANNFSU Kathmandu University. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
