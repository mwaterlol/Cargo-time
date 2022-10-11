import { useState } from 'react'
import styles from './mystyle.module.css'
import { CSSTransition } from 'react-transition-group';
import { ButtonCalc } from './ButtonCalc';

export interface InputsCalculator {
    searchType: string
    containerId: string
    company: string
  }


export function Traker({
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
        <div className={styles.traker} id="traker">
            <div className={styles.traker_tabs}>
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
                    <p className={styles.traker_button_1_text}>
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
                    <div className={styles.traker_button_2_div}>
                        <p className={styles.traker_button_2_text}>
                            Пакетная загрузка номеров контейнеров
                        </p>
                    </div>
                </button>
            </div>
            <div className={styles.traker_frame}>
                <div className={styles.traker_forms}>
                    <CSSTransition in={isActiveBtn1} classNames='alert' timeout={300} unmountOnExit>
                        <div>
                            <div className={styles.traker_simple_text}>
                                <p>Номер контейнера состоит из 4 буквенных символов, идентифицирующих компанию перевозчика, и 7 цифровых символов.</p>
                                <p>Например, <strong>XXXX1234567.</strong> XXXX — это префикс морской линии, 1234567 — семизначный цифровой идентификатор.</p>
                                <p>Укажите <span style={{color:"#BF271B"}}>либо</span> номер контейнера, либо номер коносамента!</p>
                            </div>
                            <form>
                            <div className={styles.traker_simple_inputs}>
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
                            <p className={styles.traker_btn_title}>Наиболее вероятные варианты:</p>
                            <ButtonCalc widthBtn='312px' heightBtn='46px' leftBtn='0px' topBtn='354px' valueBtn='W.E.C.(West European Container) Lines' />
                            <ButtonCalc widthBtn='146px' heightBtn='46px' leftBtn='324px' topBtn='354px' valueBtn='Emkay Lines' />
                            <ButtonCalc widthBtn='127px' heightBtn='46px' leftBtn='0px' topBtn='412px' valueBtn='Pan Asia Line' />
                            <ButtonCalc widthBtn='151px' heightBtn='46px' leftBtn='139px' topBtn='412px' valueBtn='PSL Navegacao' />
                            <button className={styles.traker_btn_find}>
                                    Найти контейнер
                            </button>
                            </form>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={isActiveBtn2} classNames='alert' timeout={300} unmountOnExit>
                        <div>
                            <div className={styles.package_text}>
                                <p>Пакетная загрузка позволяет вам получать статус заказа сразу нескольких котнейнеров.</p>
                                <p>Для получения результата загрузите excel-файл со всеми необходимыми трек-номерами контейнеров, статус которых необходимо определить</p>
                            </div>
                            <div className={styles.package_download}>
                                <a href='#'>
                                <img className={styles.package_download_pic} src={require("./templates/download_img_1.png")}></img>
                                <p className={styles.package_download_text}>Скачать шаблон для заполнения таблицы пакетной загрузки</p>
                                <p className={styles.package_download_text_bottom}>xlsx, вес до 25Mb</p>
                                </a>
                                <p className={styles.package_download_text_info}>Шаблон позволяет корректно заполнять информацию по вашим контейнера, а нам - максимально точно найти их статусы!</p>
                            </div>
                            <div className={styles.package_add}>
                                <a href='#'>
                                <img className={styles.package_add_pic} src={require("./templates/add_img.png")}></img>
                                <p className={styles.package_add_text}>Прикрепить файл</p>
                                <p className={styles.package_add_text_bottom}>Доступные форматы: xlsx, вес до 25Mb</p>
                                </a>
                            </div>
                            <p className={styles.package_add_text_info}>Результат будет выгружен в формате .xlsx</p>
                            <div className={styles.package_comment}>*Результаты будут выгружены в формате .xlsx</div>
                            <button className={styles.traker_btn_find}>
                                    Найти контейнеры
                            </button>
                        </div>
                    </CSSTransition>
                </div>
                <img className={styles.traker_pic} src={require("./templates/map.png")}></img>
            </div>
        </div>
    )
}