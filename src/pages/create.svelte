<script lang="ts">
  import Navbar from "./_components/Navbar.svelte";
  import Dropzone from "svelte-file-dropzone";
  import { getStorage, ref, StorageService, uploadBytes } from "firebase/storage";
  import {addDoc,getFirestore, collection , serverTimestamp} from "firebase/firestore"
  import { firebaseApp } from "../firebaseConfig";
import type {CreateSlideshow} from "../types/Slideshow"
import { userStore } from "../stores/user";
import type { User } from "firebase/auth";

  let name = "Untitled Presentation";

  let files = {
    accepted: [],
    rejected: [],
  };


let user:User;

userStore.subscribe(u=>user=u)

  let uploadStatus = null;

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }

  async function createSlideshow() {
    const { accepted } = files;

    if (accepted.length <= 0) {
      alert("Upload at least one file to continue");
      uploadStatus = -1;
      return;
    }

    const createdDate = serverTimestamp()

    const slideshow:CreateSlideshow = {
        name,date:createdDate,
        creator:user.uid
        ,currentSlide:1,numSlides:accepted.length
    }

    const slideshowCollection = collection(getFirestore(),"slideshow");
    const slideshowDoc = await addDoc(slideshowCollection,slideshow)

    const storage = getStorage(firebaseApp);

    const slideshowId =slideshowDoc.id

    await uploadToStorage(storage,accepted,slideshowId)
  }

  async function uploadToStorage(storage:StorageService,files:any[],id:string){
    const promises = files.map((file, i) => {
      const imgRef = ref(storage, `${id}/${i + 1}`);
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
      on:click={createSlideshow}
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
