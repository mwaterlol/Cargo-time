import './mystyle.Navbar.css'
import { useRef, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-scroll'
import { CompanyList } from '../CompanyList/CompanyList';


export function Navbar(){

    const [details, setDetails] = useState(false)
    

    return (
        <div className="navbar">
            <div style={{position: "absolute", width: "149px", left:"48px", }}>
            <img className="c_vector" src={require("../templates/c.png")}></img>
            <img className="a_vector" src={require("../templates/a.png")}></img>
            <img className="r_vector" src={require("../templates/r.png")}></img>
            <img className="g_vector" src={require("../templates/g.png")}></img>
            <img className="o_vector" src={require("../templates/o.png")}></img>
            <img className="t_vector" src={require("../templates/t.png")}></img>
            <img className="i_vector" src={require("../templates/i.png")}></img>
            <img className="i_2_vector" src={require("../templates/i_2.png")}></img>
            <img className="m_vector" src={require("../templates/m.png")}></img>
            <img className="e_vector" src={require("../templates/e.png")}></img>
            </div>
            <div className="menu">
                {/* Slow scroll to the tracker div when user presses the button 'Трекинг контейнеров' using react-scroll*/}
                <a className="link_1" href="#"><Link to="traker" spy={true} smooth={true}>Трекинг контейнеров</Link></a>
                <a className="link_2" href="#" 
                onClick={() => {setDetails(details => !details)}}>
                    Перевозчики
                </a>
                {/* Showing list of companies when user presses the button 'Перевозчики' using react-transition-group*/}
                <CSSTransition in={details} classNames='alert' timeout={300} unmountOnExit>
                <CompanyList changeSnowInfo={(details: boolean | ((prevState: boolean) => boolean)) => setDetails(details)} />
                </CSSTransition>
                <a className="link_3" href="#">Калькулятор доставки</a>
                <a className="link_4" href="#">Трекинг посылок</a>
                <a className="link_5" href="#">Калькулятор поездки</a>
                <a className="link_6" href="#">Полезное</a>
                <a className="link_7" href="#">Контакты</a>
                
            </div>
                <div className="search">
                    <img className="search_pic" src={require("../templates/search.png")}></img>
                </div>
        </div>
        
    )
        
}