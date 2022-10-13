import './mystyle.ScrollBanners.css'

export function ScrollBanner_3(){
    return(
        <div className="scroll_banner_3">
                    <div className="scroll_banner_3_frame">
                        <div className="scroll_banner_3_title_and_text">
                            <div className="scroll_banner_3_title">
                                Интеграция трекинга контейнеров в свой сервис через API
                            </div>
                            <div className="scroll_banner_3_text">
                            Вы можете автоматизировать работу с сервисом и интегрировать трекинг контейнеров в свой сервис через API
                            </div>
                        </div>
                        <div className="scroll_banner_3_button">
                        <a href='#'>Связаться с нами</a>
                        </div>
                    </div>
                    <div className="scroll_3_screen"></div>
                    <img className="scroll_banner_3_img" src={require("../templates/iPad Pro 11.png")}></img>
        </div>
    )
}