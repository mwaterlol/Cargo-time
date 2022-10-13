import './mystyle.Banners.css'

export function Banners(){

    return(
        <div className="banners">
            <div className="banner_1">
                <div className="title_and_button_banner_1">
                    <div className="title_banner_1">
                    Подписка на статус контейнеров
                    </div>
                    <button className="button_banner_1"><p className="button_banner_1_text">Подробнее</p>
                        <img className="button_banner_1_img" src={require("../templates/more_banner.png")}></img>
                    </button>
                </div>
                <img className="banner_1_img" src={require("../templates/mobile_1.png")}></img>
            </div>
            <div className="banner_2">
                <div className="title_and_button_banner_2">
                        <div className="title_banner_2">
                        Виджет для вашего сайта или сервиса
                        </div>
                        <button className="button_banner_2"><p className="button_banner_2_text">Подробнее</p>
                            <img className="button_banner_2_img" src={require("../templates/more_banner.png")}></img>
                        </button>
                </div>
            </div>
            <img className="banner_2_img" src={require("../templates/mobile_2.png")}></img>
        </div>
    )
}