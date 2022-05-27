import Image from 'next/image'
import LogoPic from './logo.png'
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <div className={styles.logo}>
        <p>Nicolas YANG</p>
            {/* <Image src={LogoPic} alt="logo"
                width={70 + 'rem'}
                height={60 + 'rem'}
            /> */}
        </div>
    )

}
