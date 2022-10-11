import React, { useEffect, useState } from 'react'
import styles from './mystyle.module.css'

 export function CompanyList(props:any){
    return(
        <div>
            <div className={styles.list_full}>
                        <div className={styles.list_full_body}>
                            <div className={styles.list_full_title_and_icon}>
                                <div className={styles.list_full_title}>
                                Сейчас наш сервис позволяет производить трекинг<br /> контейнеров следующих компаний:
                                </div>
                                <button  onClick={() => props.changeSnowInfo(false)}>
                                    <img className={styles.list_full_icon_close} src={require("./templates/icon_close.png")}></img></button>
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
        </div>
    )
}

