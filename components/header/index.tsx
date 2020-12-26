import Main from './style';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Header() {
    return (
        <>
            <Main />
            <Container className="container-primary text-center" maxWidth="lg">
                <Typography className="title" component="h1">
                    Desenvolvedor Full Stack
                </Typography>
            </Container>
        </>
    )
}