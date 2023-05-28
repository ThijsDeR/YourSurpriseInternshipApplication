<script>
    import "../app.css";
</script>



<main id="main" class="overflow-x-hidden overflow-y-auto">
    <div class="md:flex md:items-center md:justify-between p-4">
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">YourSurprise Internship Application</h2>
        </div>
      </div>
    <slot />
</main>


<style>
    #main {
        width: 100vw;
        height: 100vh;
        background-color: #000c0f;
    }

    *::-webkit-scrollbar {
      width: 10px;
    }
    
    *::-webkit-scrollbar-track {
        background-color: #011419 
    }
     
    *::-webkit-scrollbar-thumb {
      background: whitesmoke; 
    }
    
    *::-webkit-scrollbar-thumb:hover {
      background: gray; 
    }
</style>