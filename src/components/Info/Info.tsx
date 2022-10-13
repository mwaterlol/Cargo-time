import { useState } from 'react'
import './mystyle.Info.css'
import { CSSTransition } from 'react-transition-group';
import { CompanyList } from '../CompanyList/CompanyList';
import { Button } from 'react-scroll';

export function Info(){

    const [showInfo, setShowInfo] = useState(false)
    
    return(
        <div className="info">
            <div className="info_frame">
                <div className="info_title">
                Сейчас наш сервис позволяет производить трекинг контейнеров следующих компаний:
                </div>
                <div className="info_column_1">
                    <div className="info_column_list_1">
                        <ul style={{listStyle: "none"}}>
                            <li>Admiral Container Lines</li>
                            <li>Alianca</li>
                            <li>Avana Global FZCO (BALAJI)</li>
                            <li>BLPL Singapore, Blue Water Lines</li>
                            <li>BMC Line Shipping</li>
                            <li>CONCOR (Container Corporation<br /> of India Ltd)</li>
                            <li>CMA CGM Group</li>
                            <li>China United Lines</li>
                            <li>COSCO</li>
                            <li>Crowley Maritime</li>
                        </ul>
                    </div>
                    <div className="info_column_list_2">
                        <ul style={{listStyle: "none"}}>
                            <li>Dongjin Shipping</li>
                            <li>Deutsche Afrika-Linien,<p> Dong Young Shipping</p></li>
                            <li>Econship</li>
                            <li>ECU Worldwide</li>
                            <li>Emirates Shipping Line</li>
                            <li>Emkay Lines</li>
                            <li>Ethiopian Shipping Line</li>
                            <li>Evergreen</li>
                            <li>FESCO</li>
                            <li>Gold Star</li>
                        </ul>
                    </div>
                    <button onClick={() => {setShowInfo(!showInfo)}} className="info_column_1_btn">
                        Смотреть весь список
                    </button>
                </div>
                <div className="info_column_2">
                    <div className="info_column_2_text">
                    Список доступных компаний  постоянно расширяется. Вместе с его расширением мы также работаем над сервисом загрузки номеров контейнеров Excel-таблицей и другими приложениями, полезными для отрасли.
                    </div>
                    <div className="info_column_2_list_not_available">
                        <div className="info_column_2_list_not_available_title_and_text">
                            <div className="info_column_2_list_not_available_title">
                                Обратите внимение!
                            </div>
                            <div className="info_column_2_list_not_available_text">
                            Трекинг компаний ZIM Integrated Shipping Services, Arkas, Hyundai Merchant Marine (HMM), Meratus Line, Neptune Pacific Direct Line (NPDL), SITC, Nirint Shipping, China Navigation Company, Regional Container Lines (RCL) <strong>временно недоступен.</strong>
                            </div>
                            <button onClick={() => {setShowInfo(!showInfo)}} className="info_column_2_btn">
                                Смотреть весь список
                            </button>
                        </div>
                    </div>
                </div>
                <CSSTransition in={showInfo} classNames='alert' timeout={300} unmountOnExit>
                    <CompanyList changeSnowInfo={(showInfo: boolean | ((prevState: boolean) => boolean)) => setShowInfo(showInfo)} />
                </CSSTransition>
            </div>
        </div>
    )
}