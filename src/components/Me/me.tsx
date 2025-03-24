const Me = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gradient-to-b from-red-800 to-zinc-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[120px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Mina
                </h1>
              </div>
                <div className="overflow-auto, flex">
                  <img alt="img1" width={300} src="/images/gallery/Kunst3.png" />
                  <div className="mx-10">
                    <p>Minu nimi on Liisbet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Me;
