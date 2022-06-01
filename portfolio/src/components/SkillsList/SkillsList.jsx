import style from './SkillsList.module.css';
export default function SkillsList() {
    return (
        <div className={style.skillsList}>
            <h1>Skills</h1>
            <dl>
                <dt>Language</dt>
                <dd>
                    <ul>
                        <li>JS</li>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>Rust</li>
                    </ul>
                </dd>
                <dt>Framework</dt>
                <dd>
                    <ul>
                        <li>React</li>
                        <li>Symfony</li>
                        <li>NextJs</li>
                    </ul>
                </dd>
            </dl>
        </div>
    )
}
