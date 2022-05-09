const GET_HTML = document.querySelector("html");
const GET_MAIN = document.querySelector("main");
import { Ele } from "./utilities/element.js"; // tagName, props, nest

if (localStorage.getItem("termsIsAccepted") != "true") {
    GET_HTML.style.overflowY = "hidden";
    let modal = Ele.make("div", { class: "modal", id: "terms" }, [
        Ele.make("div", { class: "modal__background" }, [
            Ele.make("div", { class: "modal__content" }, [
                Ele.make("div", { class: "modal__text-container" }, [
                    Ele.make("h1", { }, "Vigtigt"),
                    Ele.make("p", { }, "Dette er ikke et rigtigt webbureau."),
                    Ele.make("p", { }, "Vi står ikke til ansvar for oplysninger der muligvis matcher eksisterende webbureau og/el. firmaer. Vi svarer tilbage på mails i et ubestemt tidsrum, der kan eller ikke kan forekomme. Vi har på intet tidspunkt tænkt os at producere produkter i form af hjemmesider/SEO/optimering, og vi står ikke til ansvar for bestilte kommissioner, både betalt og ubetalt. Alt og alle personlige informationer sendt vil blive slettet efter et tidsrum af to uger, og alt betaling/overførsel af penge vil ikke blive refunderet."),
                    Ele.make("p", { }, "Ved at klikke 'OK' accepterer du, at du har forstået de ovennævnte brugerbetingelser og selv står til ansvar for fejlagtige handlinger og misforståelser."),
                    Ele.make("button", {
                        class: "btn btn--square btn--secondary-solid", onclick: () => {
                            localStorage.setItem("termsIsAccepted", "true");
                            document.querySelector(".modal__content").style.top = "100vh";
                            setTimeout(() => {
                                document.querySelector(".modal").remove();
                                GET_HTML.style.overflowY = "inherit";
                            }, 1000);
                        }
                    }, "OK")
                ])
            ])
        ])
    ]);
    setTimeout(() => {
        document.querySelector(".modal__content").style.top = "100px";
    }, 1)
    GET_MAIN.appendChild(modal);
}




// let test = Ele.make("div", { class: "test", id: "test"}, [
//     Ele.make("h1", { class: "test", id: "test1"}, "Hello World"),
//     Ele.make("p", { class: "test", id: "test2"}, "This is a test"),
//     Ele.make("p", { class: "test", id: "test3"}, "This is a test2"),
// ]);

// let getTestContainer = document.querySelector("#test");
// getTestContainer.appendChild(test);
