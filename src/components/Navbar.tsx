import { styled } from "../lib/stitches.config"

export const Navbar = () => <Container>
    <LeftContent>
        <Item>File</Item>
        <Item>Language</Item>
        <Item>Dev mode</Item>
    </LeftContent>
    <Item>Github</Item>
</Container>

const Container = styled('nav', {
    display: "flex",
    justifyContent: 'space-between',
    backgroundColor: '$red1',
})

const Item = styled('div', {
    padding: '$2 $2',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '$gray4'
    }
});

const LeftContent = styled('div', {
    display: "flex",
    gap: '$4',
})