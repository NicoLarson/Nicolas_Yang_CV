import style from './PortfolioList.module.css';
import Link from 'next/link';

export default function PortfolioList() {
    return (
        <div className={style.portfolioList}>
            <h1>Portfolio</h1>
            <dl>
                <dt>Periclim</dt>
                <dd>
                    <Link href="#">
                        <a>Pericilm</a>
                    </Link>
                </dd>
                <dt>Blog</dt>
                <dd>
                    <Link href="#">
                        <a>Blog</a>
                    </Link>
                </dd>
                
            </dl>
        </div>
    )
}
