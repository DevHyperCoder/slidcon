<div class="lg:grid lg:grid-cols-2 px-5 lg:px-0 justify-items-center h-screen">
  <div class=" justify-center h-full items-center flex flex-col w-full">
    <slot />
  </div>

  <div
    class="hidden justify-center h-full items-center lg:flex bg-primary w-full"
  >
    <div class="text-center">
      <img src="/login.png" class="w-3/5 h-3/5 mx-auto" alt="asdf" />
      <p class="font-bold text-5xl mt-10 text-white">SlidCon</p>
    </div>
  </div>
</div>
