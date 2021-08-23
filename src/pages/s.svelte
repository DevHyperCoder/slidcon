<script lang="ts">
import Navbar from "./_components/Navbar.svelte";

  import {
    getStorage,
    ref,
    getDownloadURL,
  } from "firebase/storage";
import { firebaseApp } from "../firebaseConfig";


const id  = "jk0pkR6UkXWmENJNSwxN"

async function loadImages(inital:number,n:number){
    const storage = getStorage(firebaseApp)
    const download = []

    for (let i =1; i <=n; i ++){

        // TODO try catch here to save against more than numSlides
        try{
            const downloadUrl = getDownloadURL(ref(storage,`${id}/${inital+i}`))
            download.push(downloadUrl)
        } catch(e){

        }

    }

return await Promise.all(download)

}

let imageUrl = loadImages(0,1)

let currentSlide = 1



</script>

<div class="h-screen flex flex-col">

<Navbar />
<div class=" flex flex-grow  mt-4  mx-5 gap-5">
    <div class=" overflow-y-auto w-64 bg-opacityPrimary flex flex-col gap-5 items-center">

        <button><img src="/up.png" alt="UP"/></button>
        <div class="flex-grow overflow-y-auto">
        {#await imageUrl then urls}
            {#each urls as url, i}
                <div class="flex items-center gap-3 {`bg-lightPrimary`}">
                    <p>{i+1}</p>
                    <div class="w-32">
                    <img class="border-2 rounded-md border-primary" src={url} alt="thumb"/>
</div>
                </div>
            {/each}
            
        {/await}
        </div>
        <button><img src="/down.png" alt="DOWN"/></button>

    </div>
    <div class="flex-grow flex flex-col pt-3 px-32">
        <h1 class="text-center text-3xl font-extrabold mb-3">Ahanfa pro</h1>
        <div class="">
        {#await imageUrl then urls}

            <img src={urls[currentSlide-1]} class="max-w-64 object-contain max-h-3/4" alt="slide"/>
        {/await}</div>
        <div class=" flex justify-center mt-3 gap-5">
            <button><img class="w-5 h-5" src="/left.png" alt="prev" />  </button>
            <button><img class="w-5 h-5" src="/fullscreen.png" alt="fullscreen" />  </button>
            <button><img class="w-5 h-5" src="/right.png" alt="next" /></button>
        </div>
    </div>
</div>
</div>
<div>
    <p>footer text</p>
</div>
