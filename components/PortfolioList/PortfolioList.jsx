import style from './PortfolioList.module.css';
import Link from 'next/link';

export default function PortfolioList() {
    return (
        <div className={style.portfolioList}>
            <h1>Portfolio</h1>
            <table>
                <thead>
                    <tr>
                        <th>Projets</th>
                        <th>Technologies</th>
                        <th>Liens</th>
                        <th>Années</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Periclim</th>
                        <td><ul>
                            <li>React</li>
                            <li>NoSQL</li>
                        </ul></td>
                        <td><ul>
                            <li>
                                <Link href="https://github.com/NicoLarson/periclim">
                                    <a>GitHub<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://nicolarson.github.io/periclim/">
                                    <a>Link<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link></li>
                        </ul></td>
                        <td><p>2022</p></td>
                    </tr>
                    <tr>
                        <th>GPSS</th>
                        <td><ul>
                            <li>HTML/CSS</li>
                            <li>Vanilla JS</li>
                        </ul></td>
                        <td><ul>
                            <li>
                                <Link href="https://github.com/NicoLarson/gpss">
                                    <a>GitHub<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Link<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                        </ul></td>
                        <td><p>2022</p></td>
                    </tr>
                    <tr>
                        <th>Projet Harpie</th>
                        <td><ul>
                            <li>Symfony</li>
                            <li>PostgrSQL</li>
                        </ul></td>
                        <td><ul>
                            <li>
                                <Link href="https://github.com/NicoLarson/Harpie">
                                    <a>GitHub<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Link<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link></li>
                        </ul></td>
                        <td><p>2022</p></td>
                    </tr>
                    <tr>
                        <th>Astro React</th>
                        <td><ul>
                            <li>React</li>
                        </ul></td>
                        <td><ul>
                            <li>
                                <Link href="https://github.com/NicoLarson/astro-react">
                                    <a>GitHub<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://nicolarson.github.io/astro-react/">
                                    <a>Link<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                        </ul></td>
                        <td><p>2022</p></td>
                    </tr>
                    <tr>
                        <th>Anticipation of sunshine</th>
                        <td><ul>
                            <li>Python</li>
                        </ul></td>
                        <td><ul>
                            <li>
                                <Link href="https://github.com/NicoLarson/anticipation-of-sunshine">
                                    <a>GitHub<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                        </ul></td>
                        <td><p>2022</p></td>
                    </tr>
                    <tr>
                        <th>Chatbot FAQ</th>
                        <td><ul>
                            <li>PHP</li>
                            <li>JS</li>
                            <li>SQL</li>
                        </ul></td>
                        <td><ul>
                            <li>
                                <Link href="https://github.com/NicoLarson/chatbot-faq">
                                    <a>GitHub<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                        </ul></td>
                        <td><p>2021</p></td>
                    </tr>
                    <tr>
                        <th>Premier Blog</th>
                        <td><ul>
                            <li>Symfony</li>
                            <li>MySQL</li>
                        </ul></td>
                        <td><ul>
                            <li>
                                <Link href="https://github.com/NicoLarson/Premier_Blog">
                                    <a>GitHub<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Link<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    </a>
                                </Link></li>
                        </ul></td>
                        <td><p>2021</p></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Projet</th>
                        <th>Technologie</th>
                        <th>Liens</th>
                        <th>Année</th>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}
