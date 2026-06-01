import Heading from "@/components/ui/Heading"

export default function SearchPage({searchParams}: {searchParams: { search: string }}) {
  console.log(searchParams.search)
  return (
    <>
      <Heading>Resultados de búsqueda</Heading>
    </>
  )
}
