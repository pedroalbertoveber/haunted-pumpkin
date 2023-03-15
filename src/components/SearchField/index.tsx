import { SlMagnifier } from 'react-icons/sl'
import { SearchFieldContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import z from 'zod'
import { useRouter } from 'next/router'

const SearchFieldValidation = z.object({
  search: z
    .string()
    .min(1)
    .max(25, 'Your search cannot be more than 25 characters'),
})

export type SearchFieldType = z.infer<typeof SearchFieldValidation>

export function SearchField() {
  const { push } = useRouter()

  const { register, handleSubmit } = useForm<SearchFieldType>({
    resolver: zodResolver(SearchFieldValidation),
    defaultValues: {
      search: '',
    },
  })

  function handleSearchMoviesByTitle(data: SearchFieldType) {
    return push(`/movies/search/${data.search.toLocaleLowerCase()}`)
  }

  return (
    <SearchFieldContainer onSubmit={handleSubmit(handleSearchMoviesByTitle)}>
      <input
        type="text"
        required
        id="searchField"
        placeholder="Search by movie title"
        {...register('search')}
      />
      <button type="submit">
        <SlMagnifier size={20} />
      </button>
    </SearchFieldContainer>
  )
}
