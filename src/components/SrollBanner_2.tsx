import styles from './mystyle.module.css'

export function ScrollBanner_2(){
    return(
        <div className={styles.scroll_banner_2}>
                    <div className={styles.scroll_banner_2_frame}>
                        <div className={styles.scroll_banner_2_title_and_text}>
                            <div className={styles.scroll_banner_2_title}>
                            Виджет для интеграции на ваши сайты и сервисы
                            </div>
                            <div className={styles.scroll_banner_2_text}>
                            Небольшой текст с описанием виджета, его преимуществ и возможностей, который даст пользователю понимание его потребности в виджете
                            </div>
                        </div>
                        <div className={styles.scroll_banner_2_advantage}>
                        <a href='#'>Инструкция по установке</a>
                        </div>
                    </div>
                    <img className={styles.scroll_banner_2_img} src={require("./templates/iPad Pro 11.png")}></img>
        </div>
    )
}