import Image from 'next/image'
import LogoPic from './logo.png'
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <>
            <Image src={LogoPic} alt="logo"
                width={60 + 'rem'}
                height={50 + 'rem'}
            />
        </>
    )

}
