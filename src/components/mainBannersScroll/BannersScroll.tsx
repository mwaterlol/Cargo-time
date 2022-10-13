import HorizontalScroll from 'react-scroll-horizontal'
import './mystyle.mainBannersScroll.css'
import { ScrollBanner_3 } from '../ScrollBanners/ScrollBanner_3'
import { ScrollBanner_1 } from '../ScrollBanners/SrollBanner_1'
import { ScrollBanner_2 } from '../ScrollBanners/SrollBanner_2'

export function BannersScroll(){
    return(
        <div className="scroll">
            <div className="scroll_title">Дополнительные возможности</div>
            <hr className="scroll_line"></hr>
            <div className="scroll_banners">
                <HorizontalScroll>
                    <ScrollBanner_1/>
                    <ScrollBanner_2/>
                    <ScrollBanner_3/>
                </HorizontalScroll>
            </div>
        </div>
    )
}