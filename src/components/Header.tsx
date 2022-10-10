import styles from './mystyle.module.css'


export function Header(){

    return (
        <div>
            <img className={styles.header_pic} src={require("./templates/img.png")}></img>
            <div className={styles.title_header}>
                <div className={styles.breadcrumbs}>
                    Главная - Трекинг контейнеров
                </div>
                <div className={styles.title_and_header}>
                    <div className={styles.heading_in_title}>
                        <b>Трекинг контейнеров</b>
                    </div>
                    <div className={styles.text_title}>
                    Трекинг контейнеров — сервис, с помощью которого
                     вы можете отследить, где находится контейнер 
                    с определённым номером. Для этого необходимо
                    ввести девятизначный номер морского контейнера
                    в строку поиска.
                    </div>
                </div>

            </div>
        </div>
    )
}