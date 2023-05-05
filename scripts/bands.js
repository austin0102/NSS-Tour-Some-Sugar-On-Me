import { getBands } from "./database.js";

const bands = getBands()

export const bandList = () => {
    let bandHTML = "<ul>";

    for (const band of bands) {
        bandHTML += `<li data-type="band" data-bandid="${band.id}">
        ${band.name}
        </li>`
    }
    bandHTML += "<ul>";

    return bandHTML;
}