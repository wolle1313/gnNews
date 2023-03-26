import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { LayoutFilters } from 'components/sideMenu/LayoutFilters'
import { Provider } from 'react-redux'
import { store } from 'redux/store'


const layouts = {
    LIST: 'list',
    TILES: 'tiles',
  }

describe('Layout buttons', () => {
    test('renders the buttons', () => {
        render(<Provider store={store}>
            <LayoutFilters />
        </Provider>
        )

            const listButton =  screen.getByTestId(layouts.LIST)
            const tilesButton = screen.getByTestId(layouts.TILES)

            expect(listButton).toBeInTheDocument()
            expect(tilesButton).toBeInTheDocument()
    })

    test('Layout is changed after slice state is changed', () => {
        render(<Provider store={store}>
                <LayoutFilters />
            </Provider>
        )

        const tilesButton = screen.getByTestId(layouts.TILES)
        fireEvent.click(tilesButton)
        const state = store.getState()
        expect(state.newsLayout.order).toBe('tiles')
    })
})