'use client'

import Tab from '@/components/component'
import Image from 'next/image'
import styles from './page.module.css'
import { useScrollPosition } from '@/hooks/UseScrollPositionHook'
import WorkflowCard from '@/components/workflowCard'

export default function Home() {

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition();

  const headers1 = [
    ['Személyre és étteremre szabható törzsvendég-jutalmazó rendszer', '#törzsvendégprogram'],
    ['Gyorsabb asztalzárás az érintésmentes fizetéssel', '#gyorsabbfizetés'],
    ['Zökkenőmentes integráció', '#integrálható']
  ]

  const features1 = [
    'Szerezz több visszajáró vendéget! A törzsvendégrendszer alkalmazásával egyszerűen tudod jutalmazni és motiválni azokat, akik gyakran térnek be hozzád.',
    'A vendégek a Visszajáróval gyorsabban és egyszerűbben tudnak fizetni, így többen tudnak Nálatok időt tölteni és a felszolgálóitoknak is több ideje marad a vendégekre.',
    'Nem kell még egy tablet! A Visszajáró gond nélkül kapcsolódik a vendéglátós szoftverek nagy részéhez, így a vendégláthelyek is könnyen tudnak csatlakozni hozzánk.'
  ]

  const images1 = [
    ['/assets/szemelyre-szabhato-torzsvendeg-rendszer.webp', 'Szerezz több törzsvendéget egyedi jutalmazórendszerrel!'],
    ['/assets/erintesmentes-fizetes.webp','Gyors, egyszerű és akár bontott fizetés érintésmentesen!'],
    ['/assets/zokkenomentes-integracio.webp', 'Integrálható az éttermi szoftverrel, hogy ne kelljen plusz rendszert bevezess!']
  ]

  const headers2 = [
    ['Egyszerű különfizetés', '#bontottfizetés'],
    ['Törzsvendégprogram', '#jutalmak'],
    ['Fogyasztás valós idejű követése', '#fogyasztáskövetés'],
    ['Akár a böngésződből is', '#appnélkülis']
  ]

  const features2 = [
    'Mondj búcsút a nehézkes és lassú különfizetésnek! Nem számít, hányan vagytok, mindenki egyszerűen és gyorsan tudja kifizetni a fogyasztását a telefonján!',
    'Sokat jársz egy helyre, de nem érzed, hogy törzsvendégként  kezelnek? Az alkalmazáson keresztül a vendéglátóhely pontosan és egyszerűen tudja jutalmazni a visszajáró vendégeket, így mindenki jól jár.',
    'Nincs több meglepetés! A Visszajáró segítségével élőben tudod követni a fogyasztásodat.',
    'Nincs még egy app! A Visszajáró akkor is működik, ha nincs letöltve az app, így mindenki számára könnyen elérhetőek az alkalmazás nyújtotta előnyök.'
  ]

  const images2 = [
    ['/assets/bontott-fizetes.webp', 'Fizessetek külön egyszerűen!'],
    ['/assets/torzsvendeg-jutalmazas.webp', 'Élvezd a személyre szabott kedvezményeidet a törzshelyeiden!'],
    ['/assets/fogyasztas-kovetes.webp', 'Kövesd élőben a fogyasztásodat!'],
    ['/assets/applikacio-nelkul.webp', 'Nem kell applikációt letölteni, használhatod a böngésződből is!']
  ]

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY.toString();

  }

  return (
    <main className="bg-white h-full">
      {/* 1 */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-[1] min-w-full min-h-full object-cover"
        >
          <source
            src="/assets/bg1.mp4"
            type="video/mp4"
          />
          
        </video>
        <div className='absolute z-[2] w-full h-full bg-white/60'>

        </div>
        <div className='z-[3] flex flex-col gap-x-5 items-center w-11/12 relative md:flex-row'>
          <div className='md:basis-1/2 flex flex-col'>
              <h1 className='text-5xl font-bold mb-5'>Visszajáró</h1>
            <h2 className='text-xl leading-8'>A törzsvendégapp, amivel megéri visszajárni</h2>
          </div>
          <div className='hidden md:flex md:basis-1/2 justify-center md:justify-end'>
            <div className='md:w-10/12 flex items-center relative'>
              <Image className='mx-auto h-full w-full xl:w-5/6 rounded-lg' src="/assets/vendeglatas.webp" width={2000}
                height={1600} priority={true} alt="Vendéglátás" />
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="relative bg-[url('/assets/bg2.webp')] bg-cover">
        <div className='absolute w-full h-full bg-blue/80 z-[1]'></div>
        <div className='relative z-[2] w-11/12 mx-auto'>
          <h2 className='py-32 text-white text-3xl leading-10 font-semibold text-center'>A kedvenc vendéglátóhelyeid igazi, <br className='lg:hidden' /><span className='w-auto h-auto relative z-[1]'><span className={classNames(scrollPosition > 250 ? 'w-full' : 'w-0', 'absolute h-full bg-yellow z-[-1] duration-[1000ms]',)}></span>törzsvendégeknek</span> kijáró kedvességgel, jutalmakkal, egyszerűbb fizetési lehetőségekkel és még sok minden mással várnak vissza. Ez a Visszajáró.</h2>
        </div>
      </div>

      {/* 3 */}
      <div className='py-32 w-11/12 flex flex-col md:flex-row gap-x-8 mx-auto items-center'>
        <div className='basis-1/3 mb-14 md:mb-0'>
          <h2 className='text-3xl mb-3 leading[45px] font-semibold'>Kik vagyunk mi?</h2>
          <p className='text-xl font-normal mb-3'>Fiatalokból álló csapat vagyunk egy fontos közös hobbival: szeretünk a törzshelyeinken minőségi időt eltölteni.</p>
          <p className='text-xl font-normal'>Szeretnénk a modern környezetünk lehetőségeit kihasználni a törzsvendég élmény javítására.</p>
        </div>
        <div className='basis-2/3'>
          <div className='flex flex-row justify-around mx-auto text-center items-center gap-x-4'>
              <div className='basis-1/3 relative'>
                <Image className='rounded-full w-full h-full' src="/assets/torzsvendeg-1.webp" width={500}
                  height={500} priority={true} alt="Szekeres Péter" />
                <p className='text-lg font-semibold'>Szekeres Péter</p>
              </div>
            <div className='basis-1/3 relative'>
                <Image className='rounded-full w-full h-full' src="/assets/torzsvendeg-2.webp" width={500}
                  height={500} priority={true} alt="Szabó Enikő" />
                <p className='text-lg font-semibold'>Szabó Enikő</p>
              </div>
            <div className='basis-1/3 relative'>
                <Image className='rounded-full w-full h-full' src="/assets/torzsvendeg-3.webp" width={500}
                  height={500} priority={true} alt="Kővári Ádám" />
                <p className='text-lg font-semibold'>Kővári Ádám</p>
              </div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="relative bg-[url('/assets/bg3.webp')] bg-cover">
        <div className='absolute w-full h-full bg-deep-blue/80'></div>
        <div className='relative py-32 w-11/12 mx-auto text-white text-center'>
          <h2 className='text-5xl leading-10 font-bold mb-12'>Mit nyújt a Visszajáró?</h2>
          <p className='text-white text-xl leading-7 font-normal text-start mb-5'><span className='w-auto h-auto relative z-[1]'><span className={classNames(scrollPosition > 1300 ? 'w-full' : 'w-0', 'absolute h-full bg-yellow z-[-1] duration-[1000ms]',)}></span>A vendéglátóhelyek számára</span> kapcsolatteremtési lehetőséget a törzsvendégeivel. A Visszajáróval a vendéglátóhely jutalmazhatja, motiválhatja törzsvendégeit, valamint az alkalmazással mérheti, elemezheti a fogyasztási szokásaikat, hogy értékes, adatalapú döntéseket hozhasson ezek alapján.</p>
          <p className='text-white text-xl leading-7 font-normal text-start'><span className='w-auto h-auto relative z-[1]'><span className={classNames(scrollPosition > 1300 ? 'w-full' : 'w-0', 'absolute h-full bg-yellow z-[-1] duration-[1000ms]',)}></span>A vendégek számára</span> egyszerű fizetési lehetőséget nyújt, mellyel nemcsak gyorsabb a fizetési procedúra, hanem a bontott fizetés is könnyen kezelhető. A vendégek élőben követhetik az asztaluk fogyasztását, valamint kiválaszthatják saját tételeiket. Az alkalmazásban lehetőségük van böngészni a kedvenc helyeik és az általuk ajánlott személyre szabott kedvezmények között.</p>
        </div>
      </div>

      {/* 6 */}
      <div className='relative bg-white-bg'>
        <div className='relative py-32 w-11/12 mx-auto text-center'>
          <h2 className='text-5xl leading-10 font-bold'>Hogyan működik?</h2>
          <div className='flex pt-12 flex-row flex-wrap justify-center overflow-hidden gap-4'>
              <WorkflowCard className={classNames(scrollPosition > 1900 ? 'translate-x-0 opacity-100' : 'translate-x-[-20rem] opacity-0', 'basis-full sm:basis-2/5 duration-[1000ms]',)} dir={false} head={'QR kód beolvasása'} text={'Érkezéskor a vendég beszkenneli az asztalánál található QR kódot, így látja az appban az asztalát, menüt, stb. A vendég megjelenik a POS rendszerben az asztalánál.'} icon={'/assets/onepager/2.svg'} idx={1} />

              <WorkflowCard className={classNames(scrollPosition > 1900 ? 'translate-x-0 opacity-100' : 'translate-x-[20rem] opacity-0', 'hidden sm:flex basis-2/5 duration-[1000ms]',)} dir={true} head={'Saját tételek kiválasztása'} text={'A vendég kiválaszthatja az asztalról a saját rendeléseit az appban. A POS rendszerben megjelennek a kiválasztott tételek az adott székhez rendelve.'} icon={'/assets/onepager/3.svg'} idx={3} />

              <WorkflowCard className={classNames(scrollPosition > 2100 ? 'translate-x-0 opacity-100' : 'translate-x-[-20rem] opacity-0', 'basis-full sm:basis-2/5 duration-[1000ms]',)} dir={false} head={'Rendelés leadása a pincérnél'} text={'A pincér felveszi a rendelést a saját rendszerében, amely megjelenik az appban is.'} icon={'/assets/onepager/1.svg'} idx={2} />

              <WorkflowCard className={classNames(scrollPosition > 1900 ? 'translate-x-0 opacity-100' : 'translate-x-[20rem] opacity-0', 'basis-full sm:hidden duration-[1000ms]',)} dir={true} head={'Saját tételek kiválasztása'} text={'A vendég kiválaszthatja az asztalról a saját rendeléseit az appban. A POS rendszerben megjelennek a kiválasztott tételek az adott székhez rendelve.'} icon={'/assets/onepager/3.svg'} idx={3} />

              <WorkflowCard className={classNames(scrollPosition > 2100 ? 'translate-x-0 opacity-100' : 'translate-x-[20rem] opacity-0', 'basis-full sm:basis-2/5 duration-[1000ms]',)} dir={true} head={'Fizetés'} text={'A vendég fizet az appban, vagy a pincérnél. Fizetheti a teljes asztalt, vagy csak a saját tételeit. A POS rendszer jelzi, ha az egész asztalt kifizették.'} icon={'/assets/onepager/4.svg'} idx={4} />
          </div>
        </div>
      </div>

      {/* 7 */}
      <div className="relative">
        <div className='relative py-32 w-11/12 mx-auto text-center'>
          <h2 className='text-5xl leading-10 font-bold mb-12 break-words'>Előnyök Vendéglátó<span className='md:hidden'>-</span>helyeknek</h2>
          
          <Tab headers={headers1} features={features1} images={images1} dir={false}/>


        </div>
      </div>

      {/* 8 */}
      <div className="relative">
        <div className='relative py-32 w-11/12 mx-auto text-center'>
          <h2 className='text-5xl leading-10 font-bold mb-12'>Előnyök Vendégeknek</h2>
          
          <Tab headers={headers2} features={features2} images={images2} dir={true}/>


        </div>
      </div>

      {/* 9 */}
      <div className="relative bg-[url('/assets/bg4.webp')] bg-cover bg-center">
        <div className='absolute w-full h-full bg-deep-blue/80'></div>
        <div className='relative py-32 w-11/12 mx-auto text-white text-start'>
          <h2 className='text-5xl leading-10 font-bold mb-12'>Írj nekünk!</h2>
          <p className='text-white text-xl leading-7 font-normal text-start mb-5'>Élvezd Te is a Visszajáró nyújtotta előnyöket, keress minket elérhetőségeink egyikén!</p>
          <p className='mb-5'><a className='text-white text-xl leading-7 font-normal text-start' href="mailto:info@visszajaro.com">info@visszajaro.com</a></p>
          <p className='text-white text-xl leading-7 font-normal text-start mb-5'><a href="tel:+36 70 320 3786">+36 70 320 3786</a></p>
        </div>
      </div>
    </main>
  )
}
