import {describe, test} from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'


describe('input', () => {
    test('it is an input element', () => {
        render(<Input />)
        expect(screen.getByRole('textbox'))
    })
})