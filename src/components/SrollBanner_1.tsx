import styles from './mystyle.module.css'

export function ScrollBanner_1(){
    return(
        <div className={styles.scroll_banner_1}>
                    <div className={styles.scroll_banner_1_frame}>
                        <div className={styles.scroll_banner_1_title_and_text}>
                            <div className={styles.scroll_banner_1_title}>
                            Подписка на статус контейнеров через Telegram-бот
                            </div>
                            <div className={styles.scroll_banner_1_text}>
                            Подписывайтесь на номера контейнеров и получайте автоматические оповещения об изменении их статусов с помощью телеграм-бота. Вам не нужно заходить на сайт, вводить трек-номер контейнера и следить за его перемещением - Telegram-бот <strong>сделает это за Вас.</strong>
                            </div>
                        </div>
                        <div className={styles.scroll_banner_1_quote}>
                        <p>Переходите в Telegram по ссылке <span style={{color:"#BF271B"}}>@CargotimeTrackingBot</span> и знакомьтесь со списком доступных команд.</p>
                        </div>
                    </div>
                    <img className={styles.scroll_banner_1_img} src={require("./templates/mobile_3.png")}></img>
                </div>
    )
}