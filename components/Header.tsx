import Image from "next/image";
import Link from "next/link";
import Logo from '../public/img/logo.png';
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
export default function Header() {
    const { data: session } = useSession();
    return (
        <div>

            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-center justify-content-md-between">

                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-phone d-flex align-items-center"><span>+251 912178520</span></i>
                        {/* <i className="bi bi-envelope d-flex align-items-center ms-4"><span> kdigitalmagazine@gmail.com</span></i> */}
                    </div>

                    <div className="languages d-none d-md-flex align-items-center">
                        {(session) ? (

                            <ul>
                                <li onClick={() => signOut()}><i className="bi bi-box-arrow-right text-white">  Logout</i></li>
                            </ul>
                        ) : (

                            <ul>
                                <li><i className="bi bi-envelope text-white">  kdigitalmagazine@gmail.com</i></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <header id="header" className="fixed-top d-flex align-items-cente">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                    <Link href="/" ><a className="logo"><Image src={Logo} alt="Logo" width={220} height={85} /></a></Link>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link href="/"><a className="nav-link scrollto " href="#hero">Home</a></Link></li>
                            <li><Link href="/magazine"><a className="nav-link scrollto" href="#about">Magazines</a></Link></li>
                            {(session) ? (
                                <li className="dropdown"><a href="#"><span>Posts</span> <i className="bi bi-chevron-down"></i></a>
                                    <ul>
                                        <li><Link href="/posts">Latest Posts</Link></li>
                                        <li><Link href="/posts/create">Write a post</Link></li>
                                        {(session.user?.image == "a") && (<li><Link href="/posts/manage">Manage posts</Link></li>)}
                                    </ul>
                                </li>
                            ) : (
                                <li><Link href="/posts"><a className="nav-link scrollto" href="#menu">Posts</a></Link></li>
                            )}
                            <li><Link href="/team"><a className="nav-link scrollto" href="#specials">Team</a></Link></li>
                            <li><Link href="/contact"><a className="nav-link scrollto" href="#contact">Contact</a></Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <div className="d-flex">
                        {(session) ? (
                            <Link href="/"><a className="book-a-table-btn scrollto d-none d-lg-flex">{session.user?.name}</a></Link>
                        ) : (
                            <>
                                <Link href="/auth/login"><a className="book-a-table-btn scrollto d-none d-lg-flex">Login</a></Link>
                                <Link href="/auth/signup"><a className="book-a-table-btn scrollto d-none d-lg-flex">Create Account</a></Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </div>
    )
}