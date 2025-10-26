import { useState } from 'react';
import './App.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function App() {

  const [clickedButton, setClickedButton] = useState<'About Me' | 'Experience' | 'Recommended'>('About Me');

  return (
    <>
      <section className='grid grid-cols-2 w-fit h-fit'>
        {/* descrition section starts */}
        <div
          className='description-section mt-[98px] ms-[29px] bg-[#616161D1] h-[95vh] w-[47vw] max-w-[836px], max-h-[689px] border border-[#96BEE7] rounded-[27px]'>
        </div>

        {/* description section ends */}


        <div className='flex flex-col justify-center  items-center me-5'>
          {/* tabs section starts */}

          <div
            className='tab-section grid grid-cols-[10%_1fr] bg-[#363C43] mt-24 rounded-[18.89px] h-[45vh] w-[90%] max-h-[316px] max-w-[720px] '>

            <div className='symbols mt-5 ms-1 flex flex-col items-center gap-20'>
              <img className='w-6 h-6' src="question-mark.png" alt="question-mark-design" />
              <img className='w-6 h-[30px]' src="design.png" alt="box-design" />
            </div>

            <div>
              <div className='tabs relative ms-3 mt-5 flex items-center justify-around gap-1.5 bg-[#171717] rounded-[15px] w-[90%] h-[20%] max-w-[614px] max-h-[62px] overflow-hidden'>

                {/* Slider */}
                <div
                  className="absolute left-1 w-[30%] h-[7vh] bg-[#99999925] rounded-xl transition-transform duration-300"
                  style={{
                    transform:
                      clickedButton === "About Me"
                        ? "translateX(1%)"
                        : clickedButton === "Experience"
                          ? "translateX(100%)"
                          : "translateX(220%)",
                  }}
                >
                </div>

                <button
                  onClick={() => setClickedButton('About Me')}
                  className={`about-btn font-poppins text-[18px] font-medium leading-[16.1px] max-w-[195px] max-h-[45px] px-6 py-1.5 cursor-pointer ${clickedButton === 'About Me' ? 'text-[#FFFFFF]' : 'text-[#A3ADB2]'}`}>
                  About Me
                </button>

                <button
                  onClick={() => setClickedButton('Experience')}
                  className={`experience-btn font-poppins text-[18px] font-medium leading-[16.1px] w-[30%] h-[6vh] max-w-[195px] max-h-[45px] px-6 py-1.5 cursor-pointer ${clickedButton === 'Experience' ? 'text-[#FFFFFF]' : 'text-[#A3ADB2]'}`}>
                  Experiences
                </button>

                <button
                  onClick={() => setClickedButton('Recommended')}
                  className={`recommended-btn font-poppins text-[18px] font-medium leading-[16.1px] w-[35%] h-[6vh] max-w-[195px] max-h-[45px] px-6 py-1.5 cursor-pointer ${clickedButton === 'Recommended' ? 'text-[#FFFFFF]' : 'text-[#A3ADB2]'}`}>
                  Recommended
                </button>
              </div>

              <div className='font-jakarta ms-3 mt-5 w-[90%] text-[16px] text-[#969696]'>
                <p className='mb-3'>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                </p>
                <p>
                  I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                </p>
              </div>
            </div>
          </div>

          {/* tabs section ends */}

          <hr className='line mt-5 mb-3 w-[40vw] h-1 max-w-[612px] max-h-1 border-none backdrop-blur-[9.84px] text-[rgba(255,255,255,0.05)] rounded-[2.46px] bg-linear-to-t from-[#282828] to-[#F8F8F8] fill-[rgba(255,255,255,0.05)]' />

          {/* gallery section starts */}
          <div
            className='gallery-section grid grid-cols-[10%_1fr] bg-[#363C43] w-[90%] h-[44vh] max-h-[330px] max-w-[720px] rounded-[18.89px]'>

            <div className='symbols mt-5 ms-1 flex flex-col items-center gap-20'>
              <img className='w-6 h-6' src="question-mark.png" alt="question-mark-design" />
              <img className='w-6 h-[30px]' src="design.png" alt="box-design" />
            </div>

            <div className='mt-5'>
              <div className='flex justify-between items-center'>
                <span
                  className='gallery-title bg-[#171717] rounded-[17px] max-w-[149px] max-h-[62px] font-poppins leading-auto text-[18px] text-[#FFFFFF] px-[2.2rem] py-3'>
                  Gallery
                </span>

                <div className='gallery-btn flex items-center gap-3 me-5'>
                  <button
                    className='add-image-btn text-[#FFFFFF]  font-jakarta text-[11px] font-semibold leading-[6.3px] px-4 py-4 me-5 rounded-[103px]'>
                    + ADD IMAGE
                  </button>

                  <button
                    className='left-arrow-btn p-3 rounded-full bg-linear-to-r from-[#303439] to-[#161718] transition-colors cursor-pointer'>
                    <FaArrowLeft
                      className='text-[#6F787C]' />
                  </button>

                  <button
                    className='right-arrow-btn p-3 rounded-full bg-linear-to-r from-[#303439] to-[#161718] cursor-pointer'>
                    <FaArrowRight
                      className='text-[#6F787C]' />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* gallery section ends */}

          <hr className='line mt-5 w-[40vw] h-1 max-w-[612px] max-h-1 border-none backdrop-blur-[9.84px] text-[rgba(255,255,255,0.05)] rounded-[2.46px] bg-linear-to-t from-[#282828] to-[#F8F8F8] fill-[rgba(255,255,255,0.05)]' />
        </div>

      </section>
    </>
  )
}

export default App
