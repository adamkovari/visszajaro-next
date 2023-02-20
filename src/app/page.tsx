import Tab from '@/components/component'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="bg-white h-full">
      {/* 1 */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-[1] w-auto min-w-full max-w-none"
        >
          <source
            src="/assets/bg1.mp4"
            type="video/mp4"
          />
          
        </video>
        <div className='absolute z-[2] w-full h-full bg-white/80'>

        </div>
        <div className='z-[3] flex flex-col gap-x-5 items-center w-11/12 relative md:flex-row'>
          <div className='md:basis-1/2 flex flex-col'>
              <h1 className='text-5xl font-bold mb-5'>Visszajáró</h1>
              <h2 className='text-xl leading-8'>One pager</h2>
          </div>
          <div className='hidden md:flex md:basis-1/2 justify-center md:justify-end'>
            <div className='md:w-10/12 flex items-center'> 
              <img className='mx-auto h-2/3 md:h-3/4 rounded-lg' src="/assets/1.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="relative bg-[url('/assets/bg2.png')] bg-cover">
        <div className='absolute w-full h-full bg-purple-bg/80 z-[1]'></div>
        <div className='relative z-[2] w-11/12 mx-auto'>
            <h3 className='py-32 text-white text-3xl leading-10 font-semibold text-center'>A kedvenc vendéglátóhelyed vár vissza az <span className='bg-yellow'>igazi törzsvendégeknek</span> kijáró kedvességel, egyszerűbb fizetési lehetőséggel és még sok minden mással. Ez a Visszajáró.</h3>
        </div>
      </div>

      {/* 3 */}
      <div className='py-32 w-11/12 flex flex-col md:flex-row gap-x-8 mx-auto items-center'>
        <div className='basis-1/3 mb-14 md:mb-0'>
          <h3 className='text-3xl mb-3 leading[45px] font-semibold'>Kik vagyunk mi?</h3>
          <p className='text-xl font-normal mb-3'>Négy fiatalból álló csapat vagyunk, egy fontos közös tulajdonsággal: szeretünk a vendéglátásban a törzshelyeinken időt tölteni.</p>
          <p className='text-xl font-normal'>Szeretnénk a modern környezetünk lehetőségeit kihasználni a törzsvendég élmény javítására.</p>
        </div>
        <div className='basis-2/3'>
          <video
            autoPlay
            loop
            muted
            className="w-4/5 h-auto rounded-xl mx-auto"
          >
            <source
              src="/assets/2.mp4"
              type="video/mp4"
            />
            
          </video>
        </div>
      </div>

      {/* 4 */}
      <div className="relative bg-[url('/assets/bg3.png')] bg-cover">
        <div className='absolute w-full h-full bg-deep-purple/80'></div>
        <div className='relative py-32 w-11/12 mx-auto text-white text-center'>
          <h1 className='text-5xl leading-10 font-bold mb-12'>Mit nyújt a Visszajáró?</h1>
          <p className='text-white text-xl leading-7 font-normal text-start mb-5'><span className='bg-yellow'>A vendéglátó hely számára </span> kapcsolódási pontot nyújtunk a törzsvendégeivel. A Visszajáró vendégeket jutalmazni tudja, illetve az alkalmazáson keresztül fizetett fogyasztás által információhoz jut a fogyasztási szokásokról.</p>
          <p className='text-white text-xl leading-7 font-normal text-start'><span className='bg-yellow'>A vendég számára </span>egyszerűbb fizetési lehetőséget nyújtunk csoportos fizetés esetén. A vendég az asztal fogyasztását bármikor ellenőrizheti. Kedvenc éttermeivel közvetlenül kapcsolatba kerül, és élvezi az étterem visszajáró vendégeinek nyújtott kedvezményeket.</p>
        </div>
      </div>
      
      {/* 5 */}
      <div className="relative bg-white-bg">
        <div className='relative py-32 w-11/12 mx-auto text-center'>
          <h1 className='text-5xl leading-10 font-bold mb-12'>Hogyan működik?</h1>
          <p className='text-xl leading-7 font-normal text-start mb-5'>Az alkalmazásunk a vendéglátó hely által használt éttermi szoftverhez kapcsolódva működik, így nem kell megváltoztatni a vendéglátó hely belső működését. Az asztalokon kihelyezett QR-kódot beolvasva a vendég élőben követheti a fogyasztását, és választott tételeket (vagy akár az egészt asztalt is) könnyen érítésmentesen kifizetheti.</p>
          <p className='text-xl leading-7 font-normal text-start'>A vendéglátó hely szármára nyújtott felületünkön a vendéglátó egyszerűen tud kedvezményeket nyújtani a beálított paramétereknek (pl. havi 40 000 Ft fogyasztást elérő) vendégeknek, akik erről az alkalmazáson belül értesítést kapnak.</p>
        </div>
      </div>

      {/* 6 */}
      <div className="relative">
        <div className='relative py-32 w-11/12 mx-auto text-center'>
          <h1 className='text-5xl leading-10 font-bold mb-12'>Előnyök</h1>
          
          <Tab />


        </div>
      </div>

      {/* 7 */}
      <div className="relative bg-[url('/assets/bg4.png')] bg-cover bg-center">
        <div className='absolute w-full h-full bg-deep-purple/80'></div>
        <div className='relative py-32 w-11/12 mx-auto text-white text-start'>
          <h1 className='text-5xl leading-10 font-bold mb-12'>Írj nekünk.</h1>
          <p className='text-white text-xl leading-7 font-normal text-start mb-5'>Ha felkeltettük az érdeklődésedet, lépj velünk kapcsolatba!</p>
          <p className='mb-5'><a className='text-white text-xl leading-7 font-normal text-start' href="mailto:info@visszajaro.hu">info@visszajaro.hu</a></p>
          <p className='text-white text-xl leading-7 font-normal text-start mb-5'>+36 70 320 3786</p>
        </div>
      </div>
    </main>
  )
}
