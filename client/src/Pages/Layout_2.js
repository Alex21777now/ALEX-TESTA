import React, { Component } from 'react'
import text1 from './Layout_1'


export default function Layout_2() {


  const [text3, setText3] = React.useState("");
  const [text4, setText4] = React.useState(<img src="./img/borders/rama-01.png" alt="Багетная №1" title="Багетная №1"
       width="120" height="150" />);

  const moveText2 = () => {
    setText3(text4);
    setText4(text3);
  };

      return (
        <div>
        <div className="constructor-page">

            <div className="container_12">
                <div className="grid_12">
                    <div id="constructor" className="constructor-block">
                        <div className="cb-top-line">
                            <a href="/">
                            <div className="cb-step" data-step="cb-item1" id="cb-step1">
                                <p>
                                    <span>1</span>
                                    Изображение
                                </p>
                            </div>
                            </a>
                            <div className="cb-step cb-step--current" data-step="cb-item2" id="cb-step2">
                                <p>
                                    <span>2</span>
                                    Рама
                                </p>
                            </div>
                            <a href="/contacts">
                            <div className="cb-step" data-step="cb-item3" id="cb-step3">
                                <p>
                                    <span>3</span>
                                    Заголовок
                                </p>
                            </div>
                            </a>
                            <a href="/blog">
                            <div className="cb-step" data-step="cb-item4" id="cb-step4">
                                <p>
                                    <span>4</span>
                                    Цвет отпечатков
                                </p>
                            </div>
                            </a>
                        </div>
                        <div className="cb-result">
                            <div className="cb-result__title">
                                <p>Ваша картина</p>
                            </div>
                            <div className="cb-result__content">
                                <p className="cb-result__data">
                                    <span>Изображение:</span>
                                    <strong></strong>
                                    <strong>Не выбрано</strong>
                                </p>
                                <p className="cb-result__data">
                                    <span>Рама:</span>
                                    <strong></strong>
                                    <strong>Не выбрано</strong>
                                </p>
                                <div className="cb-result__data">
                                    <span>Отпечатки:</span>
                                    <strong>Не выбраны</strong>

                                </div>
                                <div className="cb-result__object">
                                    <div className="cb-result__img">
                                      {text1}
                                    </div>
                                    <div className="cb-result__border">
                                      {text3}
                                    </div>
                                    <p className="cb-result__text__title ariston"></p>
                                    <p className="cb-result__text__name ariston"></p>
                                    <p className="cb-result__text__date ariston"></p>
                                </div>
                            </div>
                            <div className="cb-result__bottom">
                                <form action="" method="POST">
                                <a className="cb-next" href="/contacts">Далее
                                    {/*<button className="cb-next">Далее</button>*/}
                                    {/*<input name="result" id="" type="text" hidden="" />*/}
                                </a>
                                </form>
                            </div>
                        </div>
                        <div className="cb-wrapper">
                            <div id="cb-items" className="cb-item2">
                                <div className="cb-item">
                                    <p className="cb-item__title">
                                        Выберите изображение
                                    </p>
                                    <p className="cb-item__text">
                                        для начала выберите основу, саму картину, на которую вы и гости вашего праздника будете
                                        наносить отпечатки пальцев с пожеланиями
                                    </p>
                                    <div className="cb-item-pics">

                                        <div className="cb-item-pic">
                                            <img src="./img/pics/01.jpg" alt="Картинка №1" title="Картинка №1" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/02.jpg" alt="Картинка №2" title="Картинка №2" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/03.jpg" alt="Картинка №3" title="Картинка №3" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/04.jpg" alt="Картинка №4" title="Картинка №4" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/05.jpg" alt="Картинка №5" title="Картинка №5" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/06.jpg" alt="Картинка №6" title="Картинка №6" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/07.jpg" alt="Картинка №7" title="Картинка №7" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/08.jpg" alt="Картинка №8" title="Картинка №8" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/09.jpg" alt="Картинка №9" title="Картинка №9" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/10.jpg" alt="Картинка №10" title="Картинка №10" width="176"
                                                 height="220" />
                                        </div>
                                        <div className="cb-item-pic">
                                            <img src="./img/pics/11.jpg" alt="Картинка №11" title="Картинка №11" width="176"
                                                 height="220" />
                                        </div>
                                    </div>
                                </div>
                                <div className="cb-item">
                                    <p className="cb-item__title">
                                        Рама
                                    </p>
                                    <p className="cb-item__text">
                                        подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не просто
                                        оставляете "пальчики", а создаете предмет декора для дома и офиса:
                                    </p>
                                    <div className="cb-item-borders">

                                        <div className="cb-item-border" onClick={moveText2}>
                                            <img src="./img/borders/rama-01.png" alt="Багетная №1" title="Багетная №1"
                                                 width="120" height="150"/>

                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-02.png" alt="Багетная №2" title="Багетная №2"
                                                 width="120" height="150" />

                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-03.png" alt="Багетная №3" title="Багетная №3"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.03.jpg" title="Багетная №3"
                                                                    rel="gal-2"></a><a
                                                className="cb-item-border__prev fancybox gallery" href="./img/borders/prev.03.1.jpg"
                                                title="Багетная №3" rel="gal-2"></a><a
                                                className="cb-item-border__prev fancybox gallery" href="./img/borders/prev.03.2.jpg"
                                                title="Багетная №3" rel="gal-2"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-04.png" alt="Багетная №4" title="Багетная №4"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.04.jpg" title="Багетная №4"
                                                                    rel="gal-3"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-05.png" alt="Багетная №5" title="Багетная №5"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.05.jpg" title="Багетная №5"
                                                                    rel="gal-4"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-06.png" alt="Багетная №6" title="Багетная №6"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.06.jpg" title="Багетная №6"
                                                                    rel="gal-5"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-07.png" alt="Багетная №7" title="Багетная №7"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.07.jpg" title="Багетная №7"
                                                                    rel="gal-6"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-08.png" alt="Багетная №8" title="Багетная №8"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.08.jpg" title="Багетная №8"
                                                                    rel="gal-7"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-09.png" alt="Багетная №9" title="Багетная №9"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.09.jpg" title="Багетная №9"
                                                                    rel="gal-8"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-10.png" alt="Багетная №10" title="Багетная №10"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.10.jpg" title="Багетная №10"
                                                                    rel="gal-9"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-11.png" alt="Багетная №11" title="Багетная №11"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.11.jpg" title="Багетная №11"
                                                                    rel="gal-10"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-12.png" alt="Багетная №12" title="Багетная №12"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.12.jpg" title="Багетная №12"
                                                                    rel="gal-11"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-13.png" alt="Багетная №13" title="Багетная №13"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.13.jpg" title="Багетная №13"
                                                                    rel="gal-12"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-14.png" alt="Багетная №14" title="Багетная №14"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.14.jpg" title="Багетная №14"
                                                                    rel="gal-13"></a>
                                        </div>
                                        <div className="cb-item-border">
                                            <img src="./img/borders/rama-15.png" alt="Багетная №15" title="Багетная №15"
                                                 width="120" height="150" />
                                            <a className="cb-item-border__prev fancybox gallery"
                                                                    href="./img/borders/prev.15.jpg" title="Багетная №15"
                                                                    rel="gal-14"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="cb-item">
                                    <p className="cb-item__title">
                                        Заголовок
                                    </p>
                                    <p className="cb-item__text">
                                        персонализируйте ваше "Дерево пожеланий"; вверху и внизу картины есть специальные поля,
                                        которые можно заполнить по вашему усмотрению: вписать имена виновников торжества, или
                                        особые пожелания, добавить дату, или логотип компании, если речь идет о корпоративном
                                        подарке.
                                    </p>
                                    <div className="cb-item__line">
                                        <input id="pic-title" placeholder="Наша Свадьба" maxlength="22" type="text" />
                                        <span>Заголовок картины</span>

                                    </div>
                                    <div className="cb-item__line">
                                        <input id="pic-name" placeholder="Анастасия и Константин" maxlength="36" type="text" />
                                        <span>Подпись</span>
                                    </div>
                                    <div className="cb-item__line">
                                        <input id="pic-date" placeholder="29 июля 2015" maxlength="26" type="text" />
                                        <span>Дата события</span>
                                    </div>
                                    <div className="cb-item__line--btns">
                          <span id="ariston" className="btn-font btn-font--active">
                            Ariston
                          </span>
                                        <span id="davinci" className="btn-font">
                            DaVinci
                          </span>
                                        <span id="brody" className="btn-font">
                            Brody
                          </span>
                                    </div>
                                </div>


                                <div className="cb-item">
                                    <p className="cb-item__title">
                                        Цвет отпечатков
                                    </p>
                                    <p className="cb-item__text">
                                        наконец, подберите самые подходящие цвета красок, с помощью которых вы и оставите на
                                        картине свой след на память!<br/>
                                        <strong>Обратите внимание: более 2-х цветов увеличат стоимость</strong>
                                    </p>

                                    <div className="cb-item-marks">
                                        <div className="cb-item-mark">
                                            <input id="mark0" type="checkbox" />
                                            <label for="mark0" title="BahamaBlue"></label>
                                            <img src="./img/marks/BahamaBlue.jpg" alt="BahamaBlue" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark1" type="checkbox" />
                                            <label for="mark1" title="BambooLeaves"></label>
                                            <img src="./img/marks/BambooLeaves.jpg" alt="BambooLeaves" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark2" type="checkbox" />
                                            <label for="mark2" title="LilacPosies"></label>
                                            <img src="./img/marks/LilacPosies.jpg" alt="LilacPosies" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark3" type="checkbox" />
                                            <label for="mark3" title="PearTart"></label>
                                            <img src="./img/marks/PearTart.jpg" alt="PearTart" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark4" type="checkbox" />
                                            <label for="mark4" title="RhubarbStalk"></label>
                                            <img src="./img/marks/RhubarbStalk.jpg" alt="RhubarbStalk" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark5" type="checkbox" />
                                            <label for="mark5" title="Tangelo"></label>
                                            <img src="./img/marks/Tangelo.jpg" alt="Tangelo" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark6" type="checkbox" />
                                            <label for="mark6" title="CottageIvy"></label>
                                            <img src="./img/marks/CottageIvy.jpg" alt="CottageIvy" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark7" type="checkbox" />
                                            <label for="mark7" title="PearTart"></label>
                                            <img src="./img/marks/PearTart.jpg" alt="PearTart" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark8" type="checkbox" />
                                            <label for="mark8" title="BahamaBlue"></label>
                                            <img src="./img/marks/BahamaBlue.jpg" alt="BahamaBlue" width="136" height="136" />
                                        </div>
                                        <div className="cb-item-mark">
                                            <input id="mark9" type="checkbox" />
                                            <label for="mark9" title="PottersClay"></label>
                                            <img src="./img/marks/PottersClay.jpg" alt="PottersClay" width="136" height="136" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cb-bottom-line">
                            <div className="cb-total">
                                <span className="cb-total__text">Стоимость:</span><span className="cb-total__amount"> 550</span>
                                <span className="cb-total__currency"> грн</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
      )

}
