<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    export let traffic: any;
    export let map: any;


    onMount(async () => {
        (document.querySelectorAll(".map-button") as NodeListOf<HTMLElement>).forEach((button) => {
            button.addEventListener("click", () => {
                map.setView([button.dataset.lat, button.dataset.lon], 12)
            })
        })
    })
</script>

<div class="px-4 sm:px-6 lg:px-8 overflow-y-auto" style="height: 80vh">
    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-white">
                Traffic Jams & Roadworks
            </h1>
            <p class="mt-2 text-sm text-gray-100">
                A list of all the incidents currently happening in the Netherlands.
            </p>
        </div>
    </div>
    <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
                class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                                >Road</th
                            >
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >Category</th
                            >
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >Incident</th
                            >
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >Extra info</th
                            >
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                >Map</th
                            >
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        {#each traffic as event}
                            <tr>
                                <td
                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
                                >
                                    {event.road}
                                </td>
                                <td
                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
                                    >{event.category.charAt(0).toUpperCase() + event.category.slice(1)}</td
                                >
                                <td
                                    class="px-3 py-4 text-sm text-gray-300 w-48"
                                    >{event.reason ?? event.events[0].text}</td
                                >
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    {#if event.category == "jams"}
                                        {#if event.delay != undefined && event.distance != undefined}
                                            ~{Math.round(event.delay / 60)}Min - {Math.round(event.distance / 100) / 10} km
                                        {/if}
                                    {/if}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    <svg class="map-button cursor-pointer w-6 h-6" data-lat="{event.goToMap[0]}" data-lon="{event.goToMap[1]}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>                                      
                                </td>
                            </tr>
                        {/each}
                        <!-- More people... -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<style>
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