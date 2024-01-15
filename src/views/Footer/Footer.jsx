import { Logo } from '../../components/Logo/Logo'
import { Contacts } from '../../components/Contacts/Contacts'
import { DeveloperList } from '../../components/DeveloperList/DeveloperList'
import { Container } from '../Container/Container'
import s from './Footer.module.scss'

export const Footer = () => (
    <footer className={s.footer}>
        <Container className={s.container}>
            <div className={s.logo}>
                <Logo />
            </div>
            <div className={s.contacts}>
                <Contacts />
            </div>
            <div className={s.developer}>
                <DeveloperList />
            </div>
            <p className={s.copyright}>© Koff, 2024</p>
        </Container>
    </footer>
)