export const banner = () => {
  if (navigator.userAgent.includes('Zalo')) {
    return `<div class="video-container">
 <img src="/fallbackBanner.jpg" alt="IT Banner Preview" />
  <div class="overlay flex justify-center justify-items-center flex-col mx-auto">
    <div class="max-sm:w-full md:w-full xl:w-8/12 mx-auto text-center">
      <h1 class="mb-4 text-white max-sm:text-3xl sm:text-4xl lg:text-5xl">Hi, <span> I'm Thạnh</span>
        <br>— an IT support specialist
        <br>with experience in maintaining systems <b>&</b> <span>troubleshooting technical issues </span>
        <br>for small and medium - sized businesses.</span>.
      </h1>
    </div>
  </div>
</div>`
  }
  return `<div class="video-container">
  <video autoplay muted playsinline loop>
    <source src="/61037-497754241.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="overlay flex justify-center justify-items-center flex-col mx-auto">
    <div class="max-sm:w-full md:w-full xl:w-8/12 mx-auto text-center">
      <h1 class="mb-4 text-white max-sm:text-3xl sm:text-4xl lg:text-5xl">Hi, <span> I'm Thạnh</span>
        <br>— an IT support specialist
        <br>with experience in maintaining systems <b>&</b> <span>troubleshooting technical issues </span>
        <br>for small and medium - sized businesses.</span>.
      </h1>
    </div>
  </div>
</div>`
};

