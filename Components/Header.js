import Head from 'next/head'

export default function Header() {
    return (
        <>
            <Head>
                <title>Battleship</title>
            </Head>
            <header>
                <div className='app-name'>
                    <div className='logo-img-container'>
                        <a href='https://github.com/SamuelMereau' target='_blank'>
                            <img className='logo-img' src='/logo.png' alt='Logo'/>
                        </a>
                    </div>
                    <h1 className='logo-header'>Battleship</h1>
                </div>
            </header>
        </>
    );
}