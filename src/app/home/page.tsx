'use client'

import React from 'react'
import {
    AboutMe,
    Content,
    HireMe,
    IconBottom,
    IconLeft,
    IconRight,
    IconTop,
    MyImage,
    MyImageAboutMe, OrganizeCards,
    Relative,
    Spacebetween,
    Spinborder
} from "./style";
import {Typography, Box} from "@mui/material";
import {faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FlipCard} from "@/app/components/cardflipp";
import {faBook, faCode, faSchool} from "@fortawesome/free-solid-svg-icons";

const projectsSteps = [
    "Saúde controle e IAMSPE",
    "Senac Retrô Desktop, Mobile e Web",
    "Desenvolvimento Sustentável",
    "CannonAttack",
    "Dashboard Responsivo",
    "Portfolios",
];

const schoolSteps = [
    "Ensino Médio Completo",
    "Tecnologia da Informação - SENAC",
    "Ciência da Computação - UNIP 7/8",
    "+6 Certificados relacionados a programação",
];

const devSteps = [
    "Javascript, Node.js, Express.js",
    "Python, Java, C#, Dart",
    "React.js, React Native, HTML, CSS, Material UI",
    "MYSQL, sqlite3",
    "GitHub, Gerenciamento de Branches, Scrum e Kanban",
    "Inglês Intermediário",
];

const Home = () => {
    return (
        <Content>
            <Spacebetween>
                <Box sx={{width: '50%'}}>
                    <Typography>Oi eu sou</Typography>
                    <Typography variant='h5'>Julio César</Typography>
                    <Typography variant='h2' sx={{fontWeight: 700}}>Desenvolvedor</Typography>
                    <Typography variant='h2' sx={{fontWeight: 700, padding: '0 0 25px 3em'}}>Fullstack JR</Typography>
                    <Typography variant='body1' sx={{textAlign: 'justify'}}>
                        Sou apaixonado pela tecnologia, games, e programação de códigos comecei minha jornada aos 16
                        anos
                        fazendo um curso de Ti no senac, hoje aos 21 anos estou terminando meu bacharelado em Ciência da
                        Computação
                        graças aos meus esforços estou trabalhando como PJ para as empresas, siga mais adiante e veja
                        minhas competências,
                        ficarei grato em suprir suas necessidades.
                    </Typography>
                    <Box sx={{paddingTop: '2em'}}>
                        <HireMe>Contate-me<FontAwesomeIcon icon={faWhatsapp} size='lg'/></HireMe>
                    </Box>
                </Box>
                <Relative>
                    <Spinborder>
                        <IconTop>
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                        </IconTop>
                        <IconBottom>
                            <FontAwesomeIcon icon={faInstagram} size="2xl"/>
                        </IconBottom>
                        <IconRight>
                            <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                        </IconRight>
                        <IconLeft>
                            <FontAwesomeIcon icon={faFacebook} size="2xl"/>
                        </IconLeft>
                    </Spinborder>
                    <MyImage>
                        <img
                            src="/image/avatar3.png"
                            alt="Minha foto"
                        />
                    </MyImage>
                </Relative>

            </Spacebetween>
            <AboutMe>
                <Box sx={{display: 'flex', gap: '48px', alignItems: 'center'}}>
                    <MyImageAboutMe>
                        <img
                            src="/image/avatar3.png"
                            alt="Minha foto"
                        />
                    </MyImageAboutMe>
                    <Box sx={{width: '70%', height: '600px'}}>
                        <Typography variant='h3' fontWeight={600} sx={{paddingBottom: '12px'}}>Sobre Mim</Typography>
                        <Box>
                            <Box sx={{paddingBottom: '24px', textAlign: 'justify', width: '100%', maxWidth: '1100px', minWidth: '800px'}}>
                            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Nesciunt placeat qui
                                quo vitae voluptates voluptatum. Adipisci commodi, consequatur deserunt exercitationem
                                inventore modi natus obcaecati placeat quia sint sunt, tempore veritatis?
                            </Typography>
                            </Box>
                            <OrganizeCards>
                                <FlipCard
                                    frontBackground="#F3EBFE"
                                    frontIcon={faCode}
                                    backBackground="#E1CEFC"
                                    backTitle="Conhecimento"
                                    frontDescription='Desenvolvimento'
                                    backDescription=""
                                    skills={devSteps}

                                />

                                <FlipCard
                                    frontBackground="#E1CEFC"
                                    frontIcon={faBook}
                                    backBackground="#D2BEF3"
                                    backTitle="Projetos"
                                    frontDescription='Projetos'
                                    backDescription="Crio interfaces web modernas e responsivas."
                                    skills={projectsSteps}
                                />

                                <FlipCard
                                    frontBackground="#F3EBFE"
                                    frontIcon={faSchool}
                                    backBackground="#E1CEFC"
                                    backTitle="Escolaridade"
                                    frontDescription='Escolaridade'
                                    backDescription="Participei de +10 projetos open-source e startups."
                                    skills={schoolSteps}
                                />
                            </OrganizeCards>
                        </Box>
                    </Box>
                </Box>
            </AboutMe>
        </Content>
    );
}

export default Home