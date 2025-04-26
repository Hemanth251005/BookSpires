import { useEffect, useState } from "react"
import { getAllBooks } from "@/lib/axios"
import { BookCard } from "@/components/BookCard"
import { CreateBookForm } from "@/components/CreateBookForm"

export function BooksPage() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)

  const fetchBooks = async () => {
    try {
      setLoading(true)
      const response = await getAllBooks()
      
      setBooks(response.data)
    } catch (error) {
      console.error('Error fetching books:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Books</h1>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
          {showCreateForm ? "Hide Form" : "Add New Book"}
        </button>
      </div>

      {showCreateForm && (
        <div className="mb-8">
          <CreateBookForm onSuccess={() => {
            fetchBooks()
            setShowCreateForm(false)
          }} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  )
}