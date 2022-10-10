import { useState } from 'react'
import styles from './mystyle.module.css'
import { CSSTransition } from 'react-transition-group';
import { ButtonCalc } from './ButtonCalc';

export interface InputsCalculator {
    searchType: string
    containerId: string
    company: string
  }


export function Calculator({
    searchType,
    containerId,
    company
}: InputsCalculator){

    const [isActiveBtn1, setIsActiveBtn1] = useState(true)
    const [isActiveBtn2, setIsActiveBtn2] = useState(false)

    const handleClick1 = () => {
        setIsActiveBtn1(() => true)
        setIsActiveBtn2(() => false)

        
    }
    const handleClick2 = () => {
        setIsActiveBtn1(() => false)
        setIsActiveBtn2(() => true)
    }
    
    
    return(
        <div className={styles.calculator} id="calculator">
            <div className={styles.calculator_tabs}>
                <button 
                style={{
                    position: "absolute",
                    width: "165px",
                    height: "70px",
                    left: "70px",
                    top: "30px",
                    backgroundColor: isActiveBtn1 ? "#FFFFFF" : "",
                    borderRadius: "12px 12px 0px 0px"       
                }}
                onClick={handleClick1}>
                    <p className={styles.calculator_button_1_text}>
                        Простой трекинг
                    </p>
                </button>
                <button 
                style={{
                    position: "absolute",
                    width:"264px",
                    height: "70px",
                    left: "261px",
                    top: "30px",
                    backgroundColor: isActiveBtn2 ? "#FFFFFF" : "",
                    borderRadius: "12px 12px 0px 0px" 

                }}
                onClick={handleClick2} >
                    <div className={styles.calculator_button_2_div}>
                        <p className={styles.calculator_button_2_text}>
                            Пакетная загрузка номеров контейнеров
                        </p>
                    </div>
                </button>
            </div>
            <div className={styles.calculator_frame}>
                <div className={styles.calculator_forms}>
                    <CSSTransition in={isActiveBtn1} classNames='alert' timeout={300} unmountOnExit>
                        <div>
                            <div className={styles.calculator_simple_text}>
                                <p>Номер контейнера состоит из 4 буквенных символов, идентифицирующих компанию перевозчика, и 7 цифровых символов.</p>
                                <p>Например, <strong>XXXX1234567.</strong> XXXX — это префикс морской линии, 1234567 — семизначный цифровой идентификатор.</p>
                                <p>Укажите <span style={{color:"#BF271B"}}>либо</span> номер контейнера, либо номер коносамента!</p>
                            </div>
                            <form>
                            <div className={styles.calculator_simple_inputs}>
                                    <div className={styles.search_type}>
                                        <div className={styles.search_type_title}>Тип поиска: </div>
                                        <select className={styles.search_type_select}>
                                        <option value="auto">по номеру контейнера</option>
                                        <option value="phoneNumber">по номеру телефона</option>
                                        </select>
                                    </div>
                                    <div className={styles.search_id}>
                                        <div className={styles.search_id_title}>Номер контейнера: </div>
                                        <input type="text" placeholder='XXXX1234567' className={styles.search_id_input} />
                                    </div>
                                    <div className={styles.search_company}>
                                    <div className={styles.search_company_title}>Номер контейнера: </div>
                                        <select className={styles.search_company_select}>
                                            <option value="auto">Автоопределение</option>
                                        </select>
                                    </div>
                            </div>
                            <p className={styles.calc_btn_title}>Наиболее вероятные варианты:</p>
                            <ButtonCalc widthBtn='312px' heightBtn='46px' leftBtn='0px' topBtn='354px' valueBtn='W.E.C.(West European Container) Lines' />
                            <ButtonCalc widthBtn='146px' heightBtn='46px' leftBtn='324px' topBtn='354px' valueBtn='Emkay Lines' />
                            <ButtonCalc widthBtn='127px' heightBtn='46px' leftBtn='0px' topBtn='412px' valueBtn='Pan Asia Line' />
                            <ButtonCalc widthBtn='151px' heightBtn='46px' leftBtn='139px' topBtn='412px' valueBtn='PSL Navegacao' />
                            <button className={styles.calc_btn_find}>
                                    Найти контейнер
                            </button>
                            </form>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={isActiveBtn2} classNames='alert' timeout={300} unmountOnExit>
                        <div></div>
                    </CSSTransition>
                </div>
                <img className={styles.calculator_pic} src={require("./templates/map.png")}></img>
            </div>
        </div>
    )
}