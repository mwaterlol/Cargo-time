import styles from './mystyle.module.css'
import { useRef, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-scroll'


export function Navbar(){

    const [details, setDetails] = useState(false)
    

    return (
        <div className={styles.navbar}>
            <div style={{position: "absolute", width: "149px", left:"48px", }}>
            <img className={styles.c_vector} src={require("./templates/c.png")}></img>
            <img className={styles.a_vector} src={require("./templates/a.png")}></img>
            <img className={styles.r_vector} src={require("./templates/r.png")}></img>
            <img className={styles.g_vector} src={require("./templates/g.png")}></img>
            <img className={styles.o_vector} src={require("./templates/o.png")}></img>
            <img className={styles.t_vector} src={require("./templates/t.png")}></img>
            <img className={styles.i_vector} src={require("./templates/i.png")}></img>
            <img className={styles.i_2_vector} src={require("./templates/i_2.png")}></img>
            <img className={styles.m_vector} src={require("./templates/m.png")}></img>
            <img className={styles.e_vector} src={require("./templates/e.png")}></img>
            </div>
            <div className={styles.menu}>
                <a className={styles.link_1} href="#"><Link to="calculator" spy={true} smooth={true}>Трекинг контейнеров</Link></a>
                <a className={styles.link_2} href="#" 
                onClick={() => {setDetails(prev => !prev)}}>
                    Перевозчики
                </a>
                <CSSTransition in={details} classNames='alert' timeout={300} unmountOnExit>
                    <div className={styles.list_full}>
                        <div className={styles.list_full_body}>
                            <div className={styles.list_full_title_and_icon}>
                                <div className={styles.list_full_title}>
                                Сейчас наш сервис позволяет производить трекинг<br /> контейнеров следующих компаний:
                                </div>
                                <button  onClick={() => setDetails(prev => !prev)}><img className={styles.list_full_icon_close} src={require("./templates/icon_close.png")}></img></button>
                            </div>
                            <div className={styles.list_full_list}>
                                <div className={styles.list_full_column_1}>
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
                                <div className={styles.list_full_column_2}>
                                    <ul style={{listStyle: "none"}}>
                                        <li>Dongjin Shipping</li>
                                        <li>Deutsche Afrika-Linien, Dong Young Shipping</li>
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
                                <div className={styles.list_full_column_3}>
                                    <ul style={{listStyle: "none"}}>
                                    <li>Dongjin Shipping</li>
                                        <li>Deutsche Afrika-Linien, Dong Young Shipping</li>
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
                            </div>  

                        </div>
                    </div>
                </CSSTransition>
                <a className={styles.link_3} href="#">Калькулятор доставки</a>
                <a className={styles.link_4} href="#">Трекинг посылок</a>
                <a className={styles.link_5} href="#">Калькулятор поездки</a>
                <a className={styles.link_6} href="#">Полезное</a>
                <a className={styles.link_7} href="#">Контакты</a>
                
            </div>
                <div className={styles.search}>
                <img className={styles.search_pic} src={require("./templates/search.png")}></img>
                </div>
        </div>
        
    )
        
}