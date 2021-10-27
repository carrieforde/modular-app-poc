import s from './Forbidden.module.css';

const Forbidden = () => <section className={s.forbidden}>
    <h1>You may not proceed until you are logged in!</h1>
    <span style={{fontSize: '100px'}}>🧟</span>
    </section>

export default Forbidden;
