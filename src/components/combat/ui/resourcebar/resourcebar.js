import styles from "./resourcebar.module.scss";

const Resourcebar = ({
    resource
}) => {
    return (
        <section id="rage" className={styles.resourcebar}>
            {resource}
        </section>
    )
}

export default Resourcebar;