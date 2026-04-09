import Link from 'next/link';

export function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <Link href="/" className="header-logo">MensFix</Link>
                <nav className="header-nav">
                    <Link href="/blog" className="header-nav-link">お役立ち記事</Link>
                    <Link href="/services" className="header-nav-link">サービス一覧</Link>
                </nav>
            </div>
        </header>
    );
}
