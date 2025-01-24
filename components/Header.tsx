"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [language, setLanguage] = useState<"en" | "ne">("en")

  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ANNFSU KU
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/rastriya-committee">Rastriya Committee</Link>
            </li>
            <li>
              <Link href="/central-campus-committee">Central Campus Committee</Link>
            </li>
            <li>
              <button
                onClick={() => setLanguage(language === "en" ? "ne" : "en")}
                className="bg-white text-blue-800 px-2 py-1 rounded"
              >
                {language === "en" ? "नेपाली" : "English"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
