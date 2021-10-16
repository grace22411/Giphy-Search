import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Search from '../containers/Search'
import { Provider } from 'react-redux'

it('renders correctly', () => {
    const {queryByTestId, queryByPlaceholderText} = render(<Search />)

    expect(queryByTestId('search-button')).toBeTruthy()
    expect(queryByPlaceholderText('Search for GIFs')).toBeTruthy()
})

describe('input value', () => {
    it('update on change', () => {
        const {queryByPlaceholderText} = render(<Search />)
        const searchInput  = queryByPlaceholderText('Search for GIFs');

        fireEvent.change(searchInput, {target: {value:"food"}})
        expect(searchInput.value).toBe('food')
    })
})

describe('Search button', () => {
    describe('empty query', () => {
        it('does not trigger handleSearch function', () => {
            const requestSearch = jest.fn();
            const {queryByTestId} = render(<Search />)
            fireEvent.click(queryByTestId('search-button'))
            expect(requestSearch).not.toHaveBeenCalled()
        })
        
    })
})