import {describe, test} from 'vitest'
import { render, screen } from '@testing-library/react'
import { Board } from './Board'


describe('board', () => {
    test('it is an form element', () => {
        const element = render(<Board />)
        console.log('element', element)
        expect(element.getByRole('form'))
    })
})