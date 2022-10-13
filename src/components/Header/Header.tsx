import './mystyle.Header.css'


export function Header(){

    return (
        <div className="aaa">
            <img className="header_pic" src={require("../templates/img.png")}></img>
            <div className="title_header">
                <div className="breadcrumbs">
                    Главная - Трекинг контейнеров
                </div>
                <div className="title_and_header">
                    <div className="heading_in_title">
                        <b>Трекинг контейнеров</b>
                    </div>
                    <div className="text_title">
                    Трекинг контейнеров — сервис, с помощью которого
                     вы можете отследить, где находится контейнер 
                    с определённым номером. Для этого необходимо
                    ввести девятизначный номер морского контейнера
                    в строку поиска.
                    </div>
                </div>

            </div>
        </div>
    )
}