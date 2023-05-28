import polyDecoder from "polyline-encoded";

export type latLng = [number, number]
export type LatBounds = [latLng, latLng]
export type Event = {
    id: number,
    road: string,
    category: string,
    incidentType: string,
    goToMap: latLng,
    fromLoc?: {
        lat: number,
        lon: number
    },
    toLoc?: {
        lat: number,
        lon: number
    },
    events: {
        text: string
    }[],
    polyline?: string
    reason?: string,
    distance?: number,
    delay?: number
    
}

export function getDescriptionString(event: Event) {
    let string = `${event.road}: ${event.incidentType}`
    if (event.events && event.events[0]) string += `<br/> ${event.events[0].text}`;
    if (event.delay != undefined && event.distance != undefined) string += `<br/> ~${Math.round(event.delay / 60)}Min - ${Math.round(event.distance / 100) / 10} km`;

    return string
}

export function drawLine(L: any, event: Event, map: L.Map, color: string, eventListener?: () => void) {
    // Get all the coordinates from the encoded polyline
    const latLngs = polyDecoder.decode(event.polyline);
    const polyLine = L.polyline(latLngs, {
        color: color,
    })
    if (eventListener) polyLine.addEventListener("click", eventListener)
    polyLine.addTo(map);
}

export function drawMarker(L: any, event: Event, map: L.Map, iconUrl: string, size: latLng = [15, 15], eventListener?: () => void) {
    const icon = L.icon({
        iconUrl: iconUrl,
        iconSize: size,
    })
    const marker = L.marker(event.goToMap, { icon: icon })
    if (eventListener) marker.addEventListener("click", eventListener)
    marker.addTo(map)
}

export function showPopupFunction(L: any, event: Event, map: L.Map, latLng: latLng) {
    L.popup()
        .setLatLng(latLng)
        .setContent(getDescriptionString(event))
        .openOn(map)
        .openPopup();
}

export function drawTrafficJam(L: any, event: Event, map: L.Map) {
    drawMarker(L, event, map, "images/trafficjam.png", [35, 35], () => {
        showPopupFunction(L, event, map, event.goToMap)
    })
    if (!event.polyline) return;
    drawLine(
        L,
        event,
        map,
        event.delay ?
            event.delay >= 600 ? "#ff0000" : "#ffae00"
            : "#000000",
        () => {
            showPopupFunction(L, event, map, event.goToMap)
        }
    )
}

export function drawRadar(L: any, event: Event, map: L.Map) {
    drawMarker(L, event, map, "images/speedcamera.png")
}

export function drawRoadwork(L: any, event: Event, map: L.Map) {
    drawMarker(L, event, map, "images/roadwork.png", [15, 15], () => {
        showPopupFunction(L, event, map, event.goToMap)
    })
    if (!event.polyline) return;
    drawLine(L, event, map, "#000000", () => {
        showPopupFunction(L, event, map, event.goToMap)
    })
}
