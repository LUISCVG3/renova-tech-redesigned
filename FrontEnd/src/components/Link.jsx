import { useRouter } from "../Hooks/useRouter"

export function Link({ children, href, ...restOfProps }) {
    const { navigateTo } = useRouter()

    const handleClick = (event) => {
        event.preventDefault()

        navigateTo(href)
    }
    return (
        <a href={href} onClick={handleClick} {...restOfProps}>
            {children}
        </a>
    )
}