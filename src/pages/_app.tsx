import './globals.css';
import { Titillium_Web } from 'next/font/google'

const poppins = Titillium_Web({ subsets: ['latin'], weight: ['300', '400','600', '700'], variable: '--font-poppins' })

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${poppins.variable} font-sans`}>
            <Component {...pageProps} />
        </div>
        )
}