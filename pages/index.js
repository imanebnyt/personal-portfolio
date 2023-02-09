import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillBehanceSquare} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {HiMail} from 'react-icons/hi';

import {SiAdobeillustrator, SiJabber} from 'react-icons/si';
import {SiAdobephotoshop} from 'react-icons/si';
import {SiBlender} from 'react-icons/si';
import { SiAdobeaftereffects } from 'react-icons/si';

import {SiReact} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {FaDatabase} from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si';

import {SiSolidity} from 'react-icons/si';
import {SiJava} from 'react-icons/si';
import {SiCplusplus} from 'react-icons/si'
import { SiPython } from 'react-icons/si';

import { FaEthereum } from 'react-icons/fa';


import imane from '../public/imane.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>imane.codes</title>
        <meta name="description" content="imane.codes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className = "min-h-screen">
          <nav className="py-10 mb-12 flex justify-between px-10">
            <h1 className='text-xl font-montserrat font-bold'>imane.codes</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li><a href='#' className='bg-gradient-to-r from-pink-700 to-orange-600 text-white px-4 py-2 border-none rounded-md ml-8 font-montserrat font-semibold'>CV</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-pink-700 font-bold
             font-montserrat'>Imane</h2>
            <h3 className='text-2xl py-2 font-semibold font-montserrat'>Développement et design.</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Étudiante en Bachelor d'informatique et passionnée par le design 2D/3D, le développement (et aussi le sport) !</p>
          </div>
          <div className='text-5xl flex justify-center py-3 gap-16 text-gray-800'>
            <AiFillLinkedin/>
            <AiFillGithub/>
            <AiFillBehanceSquare/>
            <HiMail/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-pink-800 rounded-full w-80 h-80 mt-10 overflow-hidden'>
            <Image src = {imane} />
          </div>
        </section>
        <section className='min-h-screen flex items-center justify-center'>
          <div>
            <h3 className='text-3xl py-1 font-montserrat font-bold text-center'>Compétences</h3>
            <div className = 'py-10'>
              <div className='text-7xl flex justify-center py-7 gap-20 text-pink-800'>
                <div className='flex-row'>
                  <SiAdobeillustrator/>
                  <p className = 'text-sm font-montserrat text-center py-2 font-semibold'>Illustrator</p>
                </div>
                <div className='flex-row'>
                  <SiAdobephotoshop/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>Photoshop</p>
                </div>
                <div className='flex-row'>
                  <SiAdobeaftereffects/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>After Effects</p>
                </div>
                <div className='flex-row'>
                  <SiBlender/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>Blender</p>
                </div>
              </div>
              <div className='text-7xl flex justify-center py-7 gap-20 text-pink-800'>
                <div className='flex-row'>
                  <SiReact/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>React</p>
                </div>
                <div className='flex-row'>
                  <SiJavascript/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>Javascript</p>
                </div>
                <div className='flex-row'>
                  <SiMongodb/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>MongoDB</p>
                </div>
                <div className='flex-row'>
                  <FaDatabase/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>SQL</p>
                </div>
              </div>
              <div className='text-7xl flex justify-center py-7 gap-20 text-pink-800'>
                <div className='flex-row'>
                  <SiSolidity/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>Solidity</p>
                </div>
                <div className='flex-row'>
                  <SiJava/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>Java</p>
                </div>
                <div className='flex-row'>
                  <SiCplusplus/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>C++</p>
                </div>
                <div>
                  <SiPython/>
                  <p className='text-sm font-montserrat text-center py-2 font-semibold'>Python</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='min-h-screen px-20'>
          <div>
            <h3 className='text-3xl py-1 font-montserrat font-bold text-center'>Projets</h3>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-montserrat font-semibold pt-8 pb-2  ">
                Jeu Hex
              </h3>
              <p className="py-2">
                Implémentation Java du jeu Hex
              </p>
              <div className='flex pt-4 justify-center gap-1'>
                <p><a href='#' className='bg-gradient-to-r from-pink-700 to-orange-600 text-white px-4 py-2 border-none rounded-md font-montserrat font-semibold'>Code</a></p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-montserrat font-semibold pt-8 pb-2  ">
                To-do list
              </h3>
              <p className="py-2 font-montserrat">
                Une to-do list crée en React
              </p>
              <div className='flex pt-4 justify-center gap-1'>
                <p><a href='#' className='bg-gradient-to-r from-pink-700 to-orange-600 text-white px-4 py-2 border-none rounded-md font-montserrat font-semibold'>Site</a></p>
                <p><a href='#' className='bg-gradient-to-r from-pink-700 to-orange-600 text-white px-4 py-2 border-none rounded-md font-montserrat font-semibold'>Code</a></p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-montserrat font-semibold pt-8 pb-2  ">
                Tic-Tac-Toe
              </h3>
              <p className="py-2 font-montserrat">
                Tic-Tac-Toe crée en HTML, CSS et Javascript
              </p>
              <div className='flex pt-4 justify-center gap-1'>
                <p><a href='#' className='bg-gradient-to-r from-pink-700 to-orange-600 text-white px-4 py-2 border-none rounded-md font-montserrat font-semibold'>Site</a></p>
                <p><a href='#' className='bg-gradient-to-r from-pink-700 to-orange-600 text-white px-4 py-2 border-none rounded-md font-montserrat font-semibold'>Code</a></p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-montserrat font-semibold pt-8 pb-2  ">
                6 qui prend
              </h3>
              <p className="py-2 font-montserrat">
                Projet scolaire implémentant le jeu du 6 qui prend en Java
              </p>
              <div className='flex pt-4 justify-center gap-1'>

                <p><a href='#' className='bg-gradient-to-r from-pink-700 to-orange-600 text-white px-4 py-2 border-none rounded-md font-montserrat font-semibold'>Code</a></p>
              </div>
            </div>
          </div>
          <p className='font-montserrat text-right'><a href='' className='hover:underline'>Plus de projets sur Github</a> </p>
        </section>
        <section className='flex flex-col h-56 justify-end'>
            <p className='font-montserrat text-ce96nter font-semibold text-pink-800 text-xl pb-20 text-center'><a href = "mailto:imane.benyettou@etu.u-paris.fr" className='hover:underline'>Email : imane.benyettou@etu.u-paris.com</a></p>
        </section>
      </main>
    </>
  )
}

