import fs from "fs";

function renderPage(page, pageNewText, config = {}) {
 
    const navItemId = "nav-link-" + config.tabTitle.replaceAll(" ", "_");

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "")
                    .replace("$CSS_LINK", config.cssLink || "")
                    .replace(`${navItemId}" class="`, `${navItemId}" class="active `);

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

    return navbar + page + pageNewText + footer;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage
};
