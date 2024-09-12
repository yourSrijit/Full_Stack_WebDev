import Link from "next/link"

function NotFound() {
  return (
    <div>Page is not exists
      <Link href={"/"}>Go back</Link>
    </div>
  )
}

export default NotFound