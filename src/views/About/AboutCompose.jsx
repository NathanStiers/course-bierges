/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutCompose() {
    return (
        <>
            <Container>
                <center>
                    <h3>
                        Pour la première fois depuis leur création, les horizons de la 40e unité de Bierges vous convie à un évènement d'une
                        envergure sans pareil.
                Nous avons l'immense plaisir de vous annoncer le lancement de la course des <b>6 kilomètres de Bierges.</b><br />
                        Le but étant de nous aider à financer un voyage humanitaire en Croatie durant 15 jours en juillet<br /><br />
                        <img
                            src={require("assets/img/pis.png")}
                            width="200"
                            eight="auto"
                        ></img>
                        <br /><br />
                        Ouverte aux filles, aux garçons, aux jeunes et aux moins jeunes, cette course se veut intergénérationnelle et <b>ouverte à tous !</b>
                        Venez donc participer à cet évènement unique que ce soit pour essayer de finir sur le podium et de remporter la coupe ou bien
                simplement de passer du bon temps en bonne compagnie.<br /><br />
                        A côté de la course <b>plusieurs activités</b> seront prévues tel qu'une grande tambola et bien d'autres surprises.<br />
                        <b id="trajet">Le tout évidemment à un prix défiant toute  concurrence !</b><br /><br />
                        Le départ se fera à la salle Jules Colette et se terminera au même endroit.
                        On sait que vous avez déjà hâte d'y être alors nous
                        vous attendons en forme et avec votre bonne humeur pour mettre le feu.
                Pour les inscriptions, <a style={{ color: "red" }} href="https://chronolap.ledossard.com/inscription/index.php?id=786" title="lien d'inscription" target="_blank"><b>c'est par ici !</b></a>
                    </h3>
                </center>
            </Container>
        </>
    );
}

export default AboutCompose;
