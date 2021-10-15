import { render, screen } from "@testing-library/react"
import Search from "../containers/Search"

test('on intial render' = () => {
    render(<Search />)

    screen.debug()
})