import HorizontalScroll from 'react-scroll-horizontal'
import styles from './mystyle.module.css'
import { ScrollBanner_3 } from './ScrollBanner_3'
import { ScrollBanner_1 } from './SrollBanner_1'
import { ScrollBanner_2 } from './SrollBanner_2'

export function BannersScroll(){
    return(
        <div className={styles.scroll}>
            <div className={styles.scroll_title}>Дополнительные возможности</div>
            <hr className={styles.scroll_line}></hr>
            <div className={styles.scroll_banners}>
                <HorizontalScroll>
                    <ScrollBanner_1/>
                    <ScrollBanner_2/>
                    <ScrollBanner_3/>
                </HorizontalScroll>
            </div>
        </div>
    )
}