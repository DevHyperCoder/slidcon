<script lang="ts">
  import Navbar from "./_components/Navbar.svelte";
  import Dropzone from "svelte-file-dropzone";

  let name = "Untitled Presentation";
</script>

<Navbar />
<div class="w-full md:px-0 md:w-4/5 lg:w-3/5 mx-auto p-3 h-full ">
  <input
    class="w-min text-gray-800 mx-auto block mt-10 mb-10 font-bold outline-none border-b-2 text-2xl md:text-4xl text-center "
    bind:value={name}
  />

  <!-- dropzone -->

  <Dropzone
    disableDefaultStyles="true"
    containerClasses="w-full mx-auto border-2 border-dashed border-black"
  >
    <div class="w-full flex flex-col items-center justify-center py-16  ">
      <img src="/drag.png" alt="drag icon" class="w-16 h-16 mb-3" />

      <p class="text-black text-lg ">Drag it here</p>
    </div>
  </Dropzone>

  <div class="w-full flex justify-end">
    <button class="bg-primary text-white p-2 rounded mt-8 text-lg "
      >Create</button
    >
  </div>
</div>
