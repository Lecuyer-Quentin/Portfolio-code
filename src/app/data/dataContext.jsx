import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { images as Images } from './images';
import { logos } from './images';
const { image1P1, image2P1, image3P1 } = Images;
const { image1P2, image2P2, image3P2, image4P2, image5P2, image6P2 } = Images;
const { image1P3, image2P3, image3P3, image4P3, image5P3 } = Images;
const { image1P4, image2P4, image3P4 } = Images;
const { image1P5, image2P5, image3P5, image4P5, image5P5, image6P5 } = Images;
const { image1P6, image2P6, image3P6, image4P6, image5P6, image6P6, image7P6, image8P6, image9P6, image10P6, image11P6, image12P6, image13P6 } = Images;
const { image1P7, image2P7, image3P7 } = Images;
const { image1P8, image2P8, image3P8 } = Images;
const { bankTreeImage, editUsername, transaction } = Images;
const {htmlLogo, cssLogo, javascriptLogo, reactLogo, nodeLogo, trelloLogo, figmaLogo, notionLogo, lightHouseLogo, waveLogo, jestLogo, devtoolsLogo, sassLogo } = logos;


const Projects = [
    {
        id: '0',
        title: 'Riding Cities',
        description: 'Association de passionnés de skateboards. Nous organisons des événements et des compétitions de skateboards dans les villes de France.',
        images: [
            {
                name: 'Image 1',
                src: image1P1,
            },
            {
                name: 'Image 2',
                src: image2P1,
            },
            {
                name: 'Image 3',
                src: image3P1,
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: 'Mettre en place un site vitrine pour l\'association Riding Cities',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: 'Créer une section pour les membres fondateurs de l\'association',
                priority: 'Low',
            },
            {
                title: 'Task 3',
                description: 'Créer des CTA pour télécharger les plannings des cours',
                priority: 'Low',
            }
        ],
        technologies: [
            {
                name: 'Html',
                image: htmlLogo,
            },
            {
                name: 'Css',
                image: cssLogo,
            }
        ],
        comments: 'Project 1 comments'

    },
    {
        id: '1',
        title: 'Booki',
        description: 'Site de réservation de logements pour les vacances',
        images: [
            {
                name: 'Image 1',
                src: image1P2,
            },
            {
                name: 'Image 2',
                src: image2P2,
            },
            {
                name: 'Image 3',
                src: image3P2,
            },
            {
                name: 'Image 4',
                src: image4P2,
            },
            {
                name: 'Image 5',
                src: image5P2,
            },
            {
                name: 'Image 6',
                src: image6P2,
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: 'Transformer le design Figma en site web',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: 'Le site doit être responsive sur tous les devices',
                priority: 'Low',
            }
        ],
        technologies: [
            {
                name: 'Html',
                image: htmlLogo,
            },
            {
                name: 'Css',
                image: cssLogo,
            }
        ],
        comments: 'Project 2 comments'

    },
    {
        id: '2',
        title: 'OhMyFood',
        description: 'Site de réservation de restaurants',
        images: [
            {
                name: 'Image 1',
                src: image1P3,
            },
            {
                name: 'Image 2',
                src: image2P3,
            },
            {
                name: 'Image 3',
                src: image3P3,
            },
            {
                name: 'Image 4',
                src: image4P3,
            },
            {
                name: 'Image 5',
                src: image5P3,
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: 'Transformer le design Figma en site web',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: 'Le site doit être responsive sur tous les devices',
                priority: 'Low',
            },
            {
                title: 'Task 3',
                description: 'Mettre en place des animations CSS',
            }
        ],
        technologies: [
            {
                name: 'Html',
                image: htmlLogo,
            },
            {
                name: 'Css',
                image: cssLogo,
            },
            {
                name: 'Sass',
                image: sassLogo,
            }
        ],
        link: "https://github.com/Lecuyer-Quentin/Ohmyfood",
        url: "https://lecuyer-quentin.github.io/Ohmyfood/"

    },
    {
        id: '3',
        title: 'Print It',
        description: 'Site d\'impression de photos',
        images: [
            {
                name: 'Image 1',
                src: image1P4,
            },
            {
                name: 'Image 2',
                src: image2P4,
            },
            {
                name: 'Image 3',
                src: image3P4,
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: 'Creations d\'un site vitrine pour Print It',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: 'Creation d\'un carousel pour les photos',
                priority: 'High',
            }
        ],
        technologies: [
            {
                name: 'Html',
                image: htmlLogo,
            },
            {
                name: 'Css',
                image: cssLogo,
            },
            {
                name: 'Javascript',
                image: javascriptLogo,
            }
        ],
        link: "https://github.com/Lecuyer-Quentin/Print-It",
        url: "https://lecuyer-quentin.github.io/Print-It/"

    },
    {
        id: '4',
        title: 'Sophie Bluel Portfolio',
        description: 'Portfolio d\'une architecte d\'intérieur',
        images: [
            {
                name: 'Image 1',
                src: image1P5,
            },
            {
                name: 'Image 2',
                src: image2P5,
            },
            {
                name: 'Image 3',
                src: image3P5,
            },
            {
                name: 'Image 4',
                src: image4P5,
            },
            {
                name: 'Image 5',
                src: image5P5,
            },
            {
                name: 'Image 6',
                src: image6P5,
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: 'Transformer le design Figma en site web',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: 'Mettre en place une selection des projets par catégories',
                priority: 'Low',
            },
            {
                title: 'Task 3',
                description: 'Mettre en place un mode edition pour créer, modifier et supprimer des projets',
                priority: 'Low',
            }
        ],
        technologies: [
            {
                name: 'Html',
                image: htmlLogo,
            },
            {
                name: 'Css',
                image: cssLogo,
            },
            {
                name: 'Javascript',
                image: javascriptLogo,
            },
            {
                name: 'Node.js',
                image: nodeLogo,
            }
        ],
        link:"https://github.com/Lecuyer-Quentin/Portfolio-Sophie-Bluel",
    },

    {
        id: '5',
        title: 'Menu Maker by Qwenta',
        description: 'Gestion d\'un projet de développement de site web avec la méthode agile',
        images: [
            {
                name: 'Image 1',
                src: image1P6,
            },
            {
                name: 'Image 2',
                src: image2P6,
            },
            {
                name: 'Image 3',
                src: image3P6,
            },
            {
                name: 'Image 4',
                src: image4P6,
            },
            {
                name: 'Image 5',
                src: image5P6,
            },
            {
                name: 'Image 6',
                src: image6P6,
            },
            {
                name: 'Image 7',
                src: image7P6,
            },
            {
                name: 'Image 8',
                src: image8P6,
            },
            {
                name: 'Image 9',
                src: image9P6,
            },
            {
                name: 'Image 10',
                src: image10P6,
            },
            {
                name: 'Image 11',
                src: image11P6,
            },
            {
                name: 'Image 12',
                src: image12P6,
            },
            {
                name: 'Image 13',
                src: image13P6,
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: 'En tant que chef de projet, organiser le projet avec la méthode agile',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: 'Créer un planning pour le projet',
                priority: 'Low',
            },
            {
                title: 'Task 3',
                description: 'Mettre en place un système de gestion de projet',
                priority: 'Low',
            },
            {
                title: 'Task 4',
                description: 'Mettre en place une veille technologique',
                priority: 'Low',
            },
            {
                title: 'Task 5',
                description: 'Réaliser une presentation de la gestion de projet',
                priority: 'Low',
            }
        ],
        technologies: [
            {
                name: 'Trello',
                image: trelloLogo,
            },
            {
                name: 'Figma',
                image: figmaLogo,
            },
            {
                name: 'Notion',
                image: notionLogo,
            }
        ],
    },
    {
        id: '6',
        title: 'Nina Carducci Portfolio',
        description: 'Amelioration du SEO et de l\'accessibilité du site web d\'une photographe',
        images: [
            {
                name: 'Image 1',
                src: image1P7,
            },
            {
                name: 'Image 2',
                src: image2P7,
            },
            {
                name: 'Image 3',
                src: image3P7
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: '',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: '',
                priority: 'Low',
            }
        ],
        technologies: [
            {
                name: 'Wave',
                image: waveLogo,
            },
            {
                name: 'LightHouse',
                image: lightHouseLogo,
            },
        ],
        link: "https://github.com/Lecuyer-Quentin/Nina-Carducci",
        url:"https://lecuyer-quentin.github.io/Nina-Carducci/"

    },
    {
        id: '7',
        title: '77events',
        description: 'Debugger le site d\'une agence d\'événementiel avec les DevTools et Jest',
        images: [
            {
                name: 'Image 1',
                src: image1P8,
            },
            {
                name: 'Image 2',
                src: image2P8,
            },
            {
                name: 'Image 3',
                src: image3P8,
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: 'Identifier les bugs du site grace aux DevTools et tests Jest',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: 'Correction des bugs',
                priority: 'High',
            },
            {
                title: 'Task 3',
                description: 'Écriture de nouveaux tests Jest',
            }
        ],
        technologies: [
            {
                name: 'Jest',
                image: jestLogo,
            },
            {
                name: 'DevTools',
                image: devtoolsLogo,
            },
        ],
        link: "https://github.com/Lecuyer-Quentin/77events",
        url: "https://77events-bmnj139ij-lecuyer-quentin.vercel.app/"
    },
    {
        id: '8',
        title: 'Argent Bank',
        description: `Create a modern banking site with a minimalistic design, Interfaced with a REST API,
        and focused on routing and state management.`,
        images: [
            {
                name: 'Image 1',
                src: bankTreeImage,
            },
            {
                name: 'Image 2',
                src: editUsername,
            },
            {
                name: 'Image 3',
                src: transaction,
            }
        ],
        tasks: [
            {
                title: 'Task 1',
                description: 'Créer l’application web complète et responsive avec React et Redux',
                priority: 'High',
            },
            {
                title: 'Task 2',
                description: 'Mettre en place la gestion de la connexion et de la déconnexion',
                priority: 'Low',
            },
            {
                title: 'Task 3',
                description: 'Mettre en place la gestion de la modification du nom d\'utilisateur',
                priority: 'Low',
            }
        ],
        technologies: [
            {
                name: 'React',
                image: reactLogo,
            },
            {
                name: 'Node.js',
                image: nodeLogo,
            },
            {
                name: 'Sass',
                image: sassLogo,
            }
        ],
        link: "https://github.com/Lecuyer-Quentin/ArgentBank",
        url: "https://argent-bank-5hgmc7h6s-lecuyer-quentin.vercel.app/"
    },
];

const DataContext = createContext();

const ProjectsDataProvider = ({ children }) => {

    const [projectsData, setProjectsData] = useState(Projects);
    const addProject = (project) => {
        setProjectsData([...projectsData, project]);
    }
    const getProject = (id) => {
        const project = projectsData.find(project => project.id === id);
        if (!project) {
            throw new Error(`Project with id ${id} not found`);
        }
        return project;
    }
    const getProjects = () => {
        return projectsData;
    }
    return (
        <DataContext.Provider value={{ addProject, getProject, getProjects }}>
            {children}
        </DataContext.Provider>
    );
}
ProjectsDataProvider.propTypes = {
    children: PropTypes.element.isRequired
}

export { DataContext, ProjectsDataProvider };
    

    

