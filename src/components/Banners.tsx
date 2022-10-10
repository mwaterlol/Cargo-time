import styles from './mystyle.module.css'

export function Banners(){

    return(
        <div className={styles.banners}>
            <div className={styles.banner_1}>
                <div className={styles.title_and_button_banner_1}>
                    <div className={styles.title_banner_1}>
                    Подписка на статус контейнеров
                    </div>
                    <button className={styles.button_banner_1}><p className={styles.button_banner_1_text}>Подробнее</p>
                        <img className={styles.button_banner_1_img} src={require("./templates/more_banner.png")}></img>
                    </button>
                </div>
                <img className={styles.banner_1_img} src={require("./templates/mobile_1.png")}></img>
            </div>
            <div className={styles.banner_2}>
                <div className={styles.title_and_button_banner_2}>
                        <div className={styles.title_banner_2}>
                        Виджет для вашего сайта или сервиса
                        </div>
                        <button className={styles.button_banner_2}><p className={styles.button_banner_2_text}>Подробнее</p>
                            <img className={styles.button_banner_2_img} src={require("./templates/more_banner.png")}></img>
                        </button>
                </div>
            </div>
            <img className={styles.banner_2_img} src={require("./templates/mobile_2.png")}></img>
        </div>
    )
}