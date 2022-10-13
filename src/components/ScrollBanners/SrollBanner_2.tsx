import './mystyle.ScrollBanners.css'

export function ScrollBanner_2(){
    return(
        <div className="scroll_banner_2">
                    <div className="scroll_banner_2_frame">
                        <div className="scroll_banner_2_title_and_text">
                            <div className="scroll_banner_2_title">
                            Виджет для интеграции на ваши сайты и сервисы
                            </div>
                            <div className="scroll_banner_2_text">
                            Небольшой текст с описанием виджета, его преимуществ и возможностей, который даст пользователю понимание его потребности в виджете
                            </div>
                        </div>
                        <div><ellipse className="scroll_circle_1"/></div>
                        <div><ellipse className="scroll_circle_2"/></div>
                        <div><ellipse className="scroll_circle_3"/></div>
                        <div><ellipse className="scroll_circle_4"/></div>
                        <div><ellipse className="scroll_circle_5"/></div>
                        <div><ellipse className="scroll_circle_6"/></div>
                        <div><ellipse className="scroll_circle_7"/></div>
                        <div className='scroll_2_stmall_text'>поддерживает работу во всех браузерах</div>
                        <div className="scroll_banner_2_advantage">
                        <a href='#'>Инструкция по установке</a>
                        </div>
                        
                    </div>
                    <img className="scroll_banner_2_img" src={require("../templates/iPad Pro 11.png")}></img>
        </div>
    )
}