import './App.css'
import starLogo from './assets/StarLogo5.svg'
import PixelBlast from './components/PixelBlast'
import TextType from './components/TextType'
import teamPic from './assets/team.jpeg'
import robotPic from './assets/robot.jpeg'
import LogoLoop from './LogoLoop/LogoLoop'
import sponLogo from './assets/spon.svg'


const imageLogos = [
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg", 
    alt: "Vite", 
    href: "https://vitejs.dev" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", 
    alt: "React", 
    href: "https://react.dev/" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg", 
    alt: "Android Studio", 
    href: "https://developer.android.com/studio" 
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kotlin_icon_%282021-present%29.svg",
    alt: "Kotlin",
    href: "https://kotlinlang.org/"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "TailwindCSS",
    href: "https://tailwindcss.com/"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    alt: "Python",
    href: "https://www.python.org/"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/github-light.webp",
    alt: "GitHub",
    href: "https://github.com/home"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/git.webp",
    alt: "Git",
    href: "https://git-scm.com/"
  },
];
function App() {

  return (
    <>
      {/* Fixed header container */}
      <div className='fixed top-0 left-0 right-0 z-50 p-1 backdrop-blur-sm'>
        {/* Nav bar without the extra margins */}
        <div className='text-white bg-transparent flex h-15 w-full justify-center items-center'>
          <div className='bg-transparent flex w-full h-full justify-start items-center'>
            <a href="https://github.com/starb1t0robotics-max" className='bg-zinc-900 py-2 px-4 rounded-full'>Resources</a>
          </div>
          <div className='bg-transparent flex w-full h-full justify-center items-center'>
            <a href="https://www.paypal.com/donate/?hosted_button_id=S35PL35MXSEDN" className='bg-linear-to-r from-violet-900 via-indigo-800 to-indigo-700 py-2 px-4 rounded-full'>
              Donate
            </a>
          </div>
          <div className='bg-transparent flex w-full h-full justify-end items-center'>
            <a  href="https://linktr.ee/B1T0_Robotics?utm_source=linktree_profile_share&ltsid=f297f943-164a-4789-b35d-62fe737f8af0" className='bg-zinc-900 py-2 px-4 rounded-full'>Contact</a>
          </div>
        </div>
      </div>


      {/* First Section */}

      <div className='w-screen h-screen bg-zinc-950 flex flex-col relative'>

         <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="circle"
              pixelSize={3}
              color="#B19EEF"
              patternScale={8}
              patternDensity={0.6}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}

              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
        </div>

        <div className='w-full h-full bg-transparent flex flex-col flex-3 relative z-10 justify-center items-center'>
          <img className="w-100 mr-7 mt-4" src={starLogo} alt="" />
          <div className='bg-transparent  w-full relative z-10 flex flex-row justify-center items-end flex-1 h-full'>
            <p className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-violet-600 font-extrabold'>{'>_'}</p>
            <TextType className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-widest'

            text={[" Think It. Build It. Innovate.", " Change The Game"]}

            typingSpeed={120}

            pauseDuration={3500}

            showCursor={true}

            cursorCharacter="▌"

            cursorClassName='text-violet-600'
          />
          </div>
        </div>
        <div className='w-full flex flex-1 relative z-10 h-full bg-transparent'>

        </div>
        <div className='w-full flex flex-1 relative z-10 h-full bg-transparent'>

        </div>
      </div>

      {/* Second Section */}

      <div className='w-screen h-screen bg-zinc-950 flex flex-col relative'>
        <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="circle"
              pixelSize={3}
              color="#B19EEF"
              patternScale={8}
              patternDensity={0.6}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}

              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
        </div>
        <div className='w-screen h-30 bg-transparent relative z-10'>
        </div>
        <div className='w-screen h-40 p-20 bg-transparent flex justify-center items-center relative z-10'>
          <div className='w-screen h-20 border-l-4 border-r-4 border-indigo-600 flex justify-center items-center backdrop-blur-lg rounded-full'>
          <p className='text-zinc-100 text-2xl tracking-widest'>Our Mission</p>
        </div>
        </div>
        <div className='w-screen h-full p-5 flex justify-center rounded-4xl items-start bg-transparent relative z-10'>
          <p className='text-white backdrop-blur-xs'>
            We are a passionate and dedicated group of students who share a common
             interest in engineering, innovation, and, of course, robots! From design 
             and fabrication to coding and strategy, each member brings unique skills and 
             perspectives to the team. We're not just building machines; we're building friendships,
              learning valuable lessons, and creating unforgettable experiences as we tackle exciting 
              challenges in the world of robotics competitions. We're proud of our teamwork
             and the spirit of collaboration that drives us to learn, grow, and achieve our goals, one robot at a time.
          </p>
        </div>
        <div className='w-screen h-full flex justify-center items-center bg-transparent relative z-10'>
          <img className="w-100 rounded-4xl" src={teamPic} alt="" />
        </div>

      </div>

      {/* Third Sectoin */}

      <div className='bg-zinc-950 w-screen h-screen flex flex-col relative'>
        <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="circle"
              pixelSize={3}
              color="#B19EEF"
              patternScale={8}
              patternDensity={0.6}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}

              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
        </div>
        <div className='w-screen h-40 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-120 flex flex-col justify-center items-center bg-transparent relative z-10'>
          <p className='text-violet-400 text-3xl tracking-widest'>Creativity</p>
          <p className='text-zinc-100 text-2xl tracking-wide'>meets</p>
          <p className='text-indigo-400 text-3xl tracking-widest'>Professionalism</p>
        </div>
        <div className='w-full h-full flex flex-col justify-start items-center bg-transparent relative z-10'>
          <div className='w-screen flex justify-start items-center p-5 h-40 bg-transparent'>
            <p className='text-white'>Our Design Team is using Fusion 360 as their workhorse, a profesional 3D CAD software enabling us
              to deliver precision in each of our robots systems design.
            </p>
          </div>
          <img className="w-70 rounded-4xl border-t-4 border-b-4 border-zinc-950" src={robotPic} alt="" />
        </div>
        <div className='w-full h-full flex flex-col justify-start items-center bg-transparent relative z-10'>
          <div className='w-screen flex justify-start items-center p-5 h-40 bg-transparent'>
            <p className='text-white'>Our Programming team works hard on embeded systems as the robot
              and web development using latest tech soulutions and making sure every code source meets
              professional criteria. 
            </p>
          </div>
          <LogoLoop className='mt-10'
            logos={imageLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000ff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>

      {/* Forth Section */}

      <div className='w-screen h-screen bg-zinc-950 flex flex-col relative'>
        <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="circle"
              pixelSize={3}
              color="#B19EEF"
              patternScale={8}
              patternDensity={0.6}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}

              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
        </div>
        <div className='w-full h-20 bg-transparent relative z-10'></div>
        <div className='w-full h-5 bg-transparent relative z-10'></div>
        <div className='w-full h-20 bg-transparent flex justify-center items-center text-white/70 relative z-10'>
          <p className='text-xl tracking-widest'>Presented To You By</p>
        </div>
        <div className='w-full h-20 bg-transparent flex justify-center items-center text-white relative z-10'>
          <p className='text-2xl tracking-widest'>The Star B1T0 Robotics Team</p>
        </div>
        <div className='w-full h-5 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-15 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-indigo-300 text-xl'>Pavel Oarga</p>
          <p className='text-violet-400 text-xl'>Code Wizard & Team Lead</p>
        </div>
        <div className='w-full h-5 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-15 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-indigo-300 text-xl'>Bogdan Andrei Cernat</p>
          <p className='text-violet-400 text-xl'>Design Master & Team Lead</p>
        </div>
        <div className='w-full h-10 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-20 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-white text-xl'>Miheea Calaban | Ana Filimon</p>
          <p className='text-white text-xl'>Dragos Constandin</p>
          <p className='text-zinc-200 text-xl'>--Programming--</p>
        </div>
        <div className='w-full h-10 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-15 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-white text-xl'>Matei Riurean</p>
          <p className='text-white text-xl'>--Design--</p>
        </div>
        <div className='w-full h-10 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-20 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-white text-xl'>Ana Gabriela Petru | Mihai Ioan Grosu</p>
          <p className='text-white text-xl'>Bogdan Bragar</p>
          <p className='text-white text-xl'>--Assembly--</p>
        </div>
        <div className='w-full h-40 bg-transparent flex flex-row justify-center items-center relative z-10'>
          <img className="w-35" src={sponLogo} alt="" />
        </div>
      </div>

    </>
  )
}

export default App
