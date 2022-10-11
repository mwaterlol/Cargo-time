import styles from './mystyle.module.css'
import { useRef, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-scroll'
import { CompanyList } from './CompanyList';


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
                <a className={styles.link_1} href="#"><Link to="traker" spy={true} smooth={true}>Трекинг контейнеров</Link></a>
                <a className={styles.link_2} href="#" 
                onClick={() => {setDetails(details => !details)}}>
                    Перевозчики
                </a>
                <CSSTransition in={details} classNames='alert' timeout={300} unmountOnExit>
                <CompanyList changeSnowInfo={(details: boolean | ((prevState: boolean) => boolean)) => setDetails(details)} />
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