import React from "react";
import { Css, Django, Flutter, Js, Python, Tf, Torch, Unity, HTML } from "../components/Icons";

export const projects  = [
    {
        id:1,
        name: 'GoVID',
        description: 'Hackon With Amazon Project',
        hardSkills: [<Django/>, <Flutter/>, <Python/>],
        techList : ['Anshuman', 'Chaitanya', 'Ashiqa', 'Sufiyan'],
        skill:"App Dev"
    },
    {
        id:2,
        name: 'Voctor 2.0',
        description: 'Hackon With Amazon Project',
        hardSkills: [<Python/>, <Tf/>],
        techList : ['Anshuman', 'Chaitanya', 'Ashiqa', 'Sufiyan'],
        skill: "ML"

    },
    {
        id:3,
        name: 'TalkAR',
        description: 'OIC NIW',
        hardSkills: [<Unity/>],
        techList : ['Aaditya','Ashiqa','Abdullah','Chaitanya','Sufiyan','Anshuman'],
        skill: "AR"
    },
    {
        id:4,
        name: 'Hactoberfest 2021',
        description: 'Maintained a Repository Open to Contribution',
        hardSkills: [<Python/>, <Django/>, <Flutter/>, <Js/>],
        techList : ['Sufiyan', 'Anshuman'],
        skill: "Open-Source"
    },
    {
        id:5,
        name: 'PyDobot M1',
        description: 'Drivers for a common robotic arm',
        hardSkills: [<Python/>],
        techList : ['Abdullah'],
        skill: "Robotics"
    },
    {
        id:6,
        name: 'Connect',
        description: 'A Blogging and Social Media Platform',
        hardSkills: [<Django/>, <Js/>, <HTML/>, <Css/>],
        techList : ['Chaitanya'],
        skill: "ML"
    },
    {
        id:6,
        name: 'UNiT',
        description: 'Reasearch Paper Implementation : Multimodal Multitask Learning with a Unified Transformer',
        hardSkills: [<Torch/>, <Python/>],
        techList : ['Chaitanya'],
        skill: "ML"
    }    
];