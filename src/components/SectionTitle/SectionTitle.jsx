import css from './SectionTitle.module.css'

export default function SectionTitle({ text }) {
    return <h2 className={css.title}>Завдання {text}</h2>;
}