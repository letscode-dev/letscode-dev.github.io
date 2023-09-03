import MenuButton from '../MenuButton'

const MenuHash = (props) => {
    const { item } = props

    return (
        <MenuButton>
            <a href={`#${item.hash}`}>{item.title}</a>
        </MenuButton>
    )
}

export default MenuHash
