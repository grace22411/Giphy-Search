import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearSearch, searchGiphyByKeyword } from '../../store/slices/giphy'
import { SearchContainer, ImageContain, Container } from './search-style'

const Search = () => {

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('')
  const { searchResults, isLoadingSearchResults } = useSelector(
    state => state.giphy
  )

  const handleChange = e => {
    const { value } = e.target
    setKeyword(value)
  }

  const handleSearch = () => {
    dispatch(searchGiphyByKeyword(keyword))
  }

  // useEffect(() => {
  //   dispatch(clearSearch())
  // }, [])

  return (
    <div>
      <SearchContainer>
        <i className="fas fa-search"></i>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for GIFs"
        />
        <button onClick={handleSearch} disabled={isLoadingSearchResults} data-testid="search-button">
          {isLoadingSearchResults ? 'Searching...' : 'Search'}
        </button>
      </SearchContainer>
      <Container>
        {isLoadingSearchResults
          ? 'Loading...'
          : searchResults.map(item => {
              const img = item.images.original.url
              const alt = item.images.original.title
              return (
                <ImageContain key={item.id}>
                  <Link to={`/details/${item.id}`}>
                    <img src={img} alt={alt} />
                  </Link>
                </ImageContain>
              )
            })}
      </Container>
    </div>
  )
}

export default Search
