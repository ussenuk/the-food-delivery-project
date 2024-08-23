
import classes from './main-header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/logo.jpg';
import NavLink from '../nav-link';

export default function MainHeader(){

    
    return (
        <>

        <header id='main-header'>
        <div id='logo'>

        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="An information platform for the elite" priority />

        NextNews

        </Link>
        </div>
        

        <nav>
            <ul>

                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <NavLink href="/news"> News</NavLink>

                </li>

                
                
                <li>
                    <NavLink href="/archive"> Archive</NavLink>

                </li>

            </ul>
        </nav>
        
        
        </header>
        
        </>
    )
}