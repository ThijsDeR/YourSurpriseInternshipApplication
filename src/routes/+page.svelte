<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import polyDecoder from "polyline-encoded";
    import { drawRadar, drawRoadwork, drawTrafficJam, type latLng } from "./map";
    export let data: { traffic: any } = { traffic: {} };

    import TrafficTable from "./traffic-table.svelte";
    let map: any;
    const roadEvents: any[] = [];
    const netherlands: latLng = [52, 5]

    data.traffic.roads.forEach((road: { segments: [] }) => {
        road.segments.forEach(
            (segment: { jams?: any[]; radars?: any[]; roadworks?: any[] }) => {
                if (segment.jams) roadEvents.push(...segment.jams);
                if (segment.radars) roadEvents.push(...segment.radars);
                if (segment.roadworks) roadEvents.push(...segment.roadworks);
            }
        );
    });

    roadEvents.forEach((event) => {
        if (event.category === "jams") event.goToMap = event.polyline ? polyDecoder.decode(event.polyline)[0] : [event.toLoc.lat, event.toLoc.lon]
        if (event.category === "radars") event.goToMap = [event.loc.lat, event.loc.lon]
        if (event.category === "roadworks") event.goToMap = event.polyline ? polyDecoder.decode(event.polyline)[0] : [event.toLoc.lat, event.toLoc.lon]
    })

    onMount(async () => {
        if (browser) {
            const L = await import("leaflet");
            const mapElement = document.querySelector("#map")! as HTMLElement;
            map = L.map(mapElement).setView(netherlands, 6);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            roadEvents
                .filter((e) => e.category === "jams")
                .forEach((jam) => {
                    drawTrafficJam(L, jam, map)
                });

            roadEvents
                .filter((e) => e.category === "radars")
                .forEach((radar) => {
                    drawRadar(L, radar, map)
                });

            roadEvents
                .filter((e) => e.category === "roadworks")
                .forEach((roadwork) => {
                    drawRoadwork(L, roadwork, map)
                });

        }
    });

    onDestroy(async () => {
        if (map) {
            console.log("Unloading Leaflet map.");
            map.remove();
        }
    });
</script>

<div class="grid grid-cols-10 p-12 gap-4">
    <div class="bg-white p-2 rounded col-span-4">
        <div id="map" />
    </div>
    <div class="col-span-6">
        <TrafficTable map={map} traffic={roadEvents} />
    </div>
</div>


<div class="flex justify-start flex-col gap-8 mt-24 mb-24 text-white px-8">
    <div>
        Legenda
    </div>
    <div class="grid grid-cols-10 gap-4">
        <span class="col-span-2 inline-flex items-center rounded-md bg-orange-400/10 px-2 py-1 text-xs font-medium text-orange-400 ring-1 ring-inset ring-orange-400/20">Below 10 min</span>
        <p class="col-span-8">This color is used when the delay in a traffic jam is below 10 min</p>
    </div>
    <div class="grid grid-cols-10 gap-4">
        <span class="col-span-2 inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">Above 10 min</span>
        <p class="col-span-8">This color is used when the delay in a traffic jam is above 10 min</p>
    </div>
    <div class="grid grid-cols-10 gap-4 bg-gray-300 p-2 rounded-md">
        <span class="col-span-2 inline-flex items-center rounded-md bg-gray-900/10 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-900/20">Roadworks / Closed</span>
        <p class="col-span-8 text-black">This color is used when the road is completely blocked off, either by roadworks or just closed</p>
    </div>
</div>

<style>
    @import "leaflet/dist/leaflet.css";
    #map {
        min-height: 100px;
        min-width: 100px;
        height: 100%;
    }
</style>
