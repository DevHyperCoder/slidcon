<script lang="ts">
  import Navbar from "./_components/Navbar.svelte";
  import Dropzone from "svelte-file-dropzone";
  import { getStorage, ref, uploadBytes } from "firebase/storage";
  import { firebaseApp } from "../firebaseConfig";

  let name = "Untitled Presentation";

  let files = {
    accepted: [],
    rejected: [],
  };

  let uploadStatus = null;

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }

  async function uploadToStorage() {
    const { accepted } = files;

    if (accepted.length <= 0) {
      alert("Upload at least one file to continue");
      uploadStatus = -1;
      return;
    }

    const storage = getStorage(firebaseApp);

    const slideshowId = "test";

    const promises = accepted.map((file, i) => {
      const imgRef = ref(storage, `${slideshowId}/${i + 1}`);
      return uploadBytes(imgRef, file);
    });

    try {
      uploadStatus = 1;
      console.time("upload");
      await Promise.all(promises);
      uploadStatus = 0;
      console.timeEnd("upload");
    } catch (e) {
      uploadStatus = -1;
      console.error(e.message);
    }
  }
</script>

<Navbar />
<div class="w-full md:px-0 md:w-4/5 lg:w-3/5 mx-auto p-3 h-full ">
  <input
    class="w-min text-gray-800 mx-auto block mt-10 mb-10 font-bold outline-none border-b-2 text-2xl md:text-4xl text-center "
    bind:value={name}
  />

  <!-- dropzone -->

  <Dropzone
    accept="image/*"
    on:drop={handleFilesSelect}
    disableDefaultStyles="true"
    containerClasses="w-full mx-auto border-2 border-dashed border-black"
  >
    <div class="w-full flex flex-col items-center justify-center py-16  ">
      <img src="/drag.png" alt="drag icon" class="w-16 h-16 mb-3" />

      <p class="text-black text-lg ">Drag it here</p>
    </div>
  </Dropzone>

  <div class="w-full flex justify-end">
    <button
      on:click={uploadToStorage}
      class="bg-primary text-white p-2 rounded mt-8 text-lg ">Create</button
    >
  </div>
  <p>Upload Status: {uploadStatus}</p>
  <ol>
    {#each files.accepted as file}
      <li>{file.name}</li>
    {/each}
  </ol>
</div>
