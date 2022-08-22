<template>
  <div class="w-full h-[30rem] bg-about bg-center bg-cover">
    <div class="h-full backdrop-blur backdrop-brightness-[.4]">
      <h1 class="text-white text-6xl md:text-9xl text-center pt-44 font-title">
        RO<span class="text-teal-800 text-8xl md:text-[10rem]">k</span>U
      </h1>
    </div>
  </div>
  <div class="p-12">
    <article class="w-[90%] mx-auto flex-col space-y-2">
      <h1 class="text-center font-bold text-2xl md:text-4xl">About Roku</h1>
      <p class="text-xl flex">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste
        et ipsam minima, dolorem similique voluptatum ea nobis enim animi? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error, natus quos.
        Sit error totam animi magnam quis!
      </p>
      <img
        src="../assets/images/reimond-de-zuniga.jpeg"
        alt=""
        class="md:w-1/3 p-6 w-full md:float-right"
      />

      <p class="text-xl flex">
        Ducimus, quidem maiores deleniti laudantium dolorem minima, quasi dicta
        at sunt eaque corporis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Commodi accusantium deleniti minima libero dignissimos
        assumenda voluptate corporis. Quaerat ipsa enim reprehenderit a
        quibusdam doloremque mollitia pariatur quod adipisci non at eos ut atque
        corrupti, excepturi quas molestiae repudiandae eligendi?
      </p>
      <p class="text-xl flex">
        Aspernatur incidunt nesciunt quam quibusdam laudantium maiores
        voluptatum tempore neque harum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus inventore dolorem ipsa obcaecati nam, velit
        odit officiis expedita natus excepturi accusantium amet facere
        distinctio possimus in, doloribus reiciendis molestiae placeat?
      </p>
    </article>
    <div class="h-30 partners text-center pt-6 md:w-3/5 w-full mx-auto">
      <h3>These partners make providing world class service possible</h3>
      <div class="carousel flex mx-auto justify-between">
        <img
          class="w-[40px] md:w-[100px] h-auto"
          src="../assets/icons/adobe.png"
          alt=""
        />
        <img
          class="w-[40px] md:w-[100px] h-auto"
          src="../assets/icons/ibm-logo.png"
          alt=""
        />
        <img
          class="w-[40px] md:w-[100px] h-auto"
          src="../assets/icons/microsoft-logo.png"
          alt=""
        />
        <img
          class="w-[40px] md:w-[100px] h-auto"
          src="../assets/icons/oracle-logo.png"
          alt=""
        />
      </div>
    </div>
    <div class="get-started md:flex justify-content-around items-center pt-12">
      <p
        class="md:text-4xl text-xl w-full md:w-2/5 text-black leading-[2.5rem]"
      >
        Ready to get started with <span class="font-title">ROkU?</span>
      </p>
      <form action="" class="mx-auto p-6 w-1/2">
        <label for="" class="m-3">Email Address</label>
        <input
          type="email"
          placeholder="Email address"
          class="block form-input m-4 rounded w-3/5 h-12"
        />
        <label for="" class="m-3">Your Name</label>
        <input
          type="text"
          placeholder="First name & Last name"
          class="block form-input m-4 rounded w-3/5 h-12"
        />
        <button
          class="p-2 w-52 text-white bottom-0 bg-green-800 rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
        >
          Get Started
        </button>
      </form>
    </div>
  </div>
</template>
