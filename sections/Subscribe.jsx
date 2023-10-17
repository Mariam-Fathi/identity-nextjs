const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10 sm:px-16 px-8 sm:py-32 py-16 w-full'
    >
      <h3 className='text-4xl leading-[68px] text-white xl:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-lime-500'> Updates </span>& Newsletter
      </h3>
      <div className='xl:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@identity.com' className='input bg-black' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-lime-500 text-white border-slate-gray rounded-full w-full`}
          >
            Sign Up
          </button>          
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
