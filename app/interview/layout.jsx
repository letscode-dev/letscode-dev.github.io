export const metadata = {
    title: 'Lets Interview',
    description: 'Подготовка к собеседованиям', 
}

const SawyerLayout = (props) => {
    const { children } = props

    return (
        <main>
            {children}
        </main>
    )
}

export default SawyerLayout
