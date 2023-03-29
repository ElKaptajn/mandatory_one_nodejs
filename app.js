import express from 'express';
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

import templateEngine from "./util/templateEngine.js";

//  PAGES

    // Front page
    const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
    let frontpageNewText = `<p id="pageNewText"></p>`;
    const frontpagePage = templateEngine.renderPage(frontpage, frontpageNewText, {
        tabTitle: "Home",
        active: "active"
    });

    // Introduction page
    const introduction = templateEngine.readPage("./public/pages/introduction/introduction.html");
    let introductionNewText = `<p id="pageNewText"></p>`;
    const introductionPage = templateEngine.renderPage(introduction, introductionNewText, {
        tabTitle: "Introduction",
        active: "active"
    });

    // First server page
    const firstServer = templateEngine.readPage("./public/pages/firstServer/firstServer.html");
    let firstServerNewText = `<p id="pageNewText"></p>`;
    const firstServerPage = templateEngine.renderPage(firstServer, firstServerNewText, {
        tabTitle: "First Server",
        active: "active"
    });

    // Serving HTML
    const servingHTML = templateEngine.readPage("./public/pages/servingHTML/servingHTML.html");
    let servingHTMLNewText = `<p id="pageNewText"></p>`;
    const servingHTMLPage = templateEngine.renderPage(servingHTML, servingHTMLNewText, {
        tabTitle: "Serving HTML",
        active: "active"
    });

    // Time
    const time = templateEngine.readPage("./public/pages/time/time.html");
    let timeNewText = `<p id="pageNewText"></p>`;
    const timePage = templateEngine.renderPage(time, timeNewText, {
        tabTitle: "Time",
        active: "active"
    });

    // Export Import
    const exportImport = templateEngine.readPage("./public/pages/exportImport/exportImport.html");
    let exportImportNewText = `<p id="pageNewText"></p>`;
    const exportImportPage = templateEngine.renderPage(exportImport, exportImportNewText, {
        tabTitle: "Export Import",
        active: "active"
    });

    // server side vs client side
    const serverSideVsClientSide = templateEngine.readPage("./public/pages/serverSideVsClinetSide/serverSideVsClinetSide.html");
    let serverSideVsClientSideNewText = `<p id="pageNewText"></p>`;
    const serverSideVsClientSidePage = templateEngine.renderPage(serverSideVsClientSide, serverSideVsClientSideNewText, {
        tabTitle: "Server Side vs Client Side",
        active: "active"
    });

    // Server side rendering
    const serverSideRendering = templateEngine.readPage("./public/pages/serverSideRendering/serverSideRendering.html");
    let serverSideRenderingNewText = `<p id="pageNewText"></p>`;
    const serverSideRenderingPage = templateEngine.renderPage(serverSideRendering, serverSideRenderingNewText, {
        tabTitle: "Server Side Rendering",
        active: "active"
    });

    // Login
    const login = templateEngine.readPage("./public/pages/loginpage/loginpage.html");
    const loginNewText = "";
    const loginPage = templateEngine.renderPage(login, loginNewText, {
        tabTitle: "Login",
        active: "active"
    });

    // Admin
    const admin = templateEngine.readPage("./public/pages/adminpage/adminpage.html");
    const adminNewText = "";
    const adminPage = templateEngine.renderPage(admin, adminNewText, {
        tabTitle: "Admin",
        active: "active"
    });


//  ROUTES

app.get("/", (req, res) => {

    if(frontpageNewText === `<p id="pageNewText"></p>`){
        res.send(frontpagePage);
    } else {
        const frontpagePageUpdated = templateEngine.renderPage(frontpage, frontpageNewText, {
            tabTitle: "Home",
            active: "active"
        });
        res.send(frontpagePageUpdated);
    }

});

app.get("/introduction", (req, res) => {
    if(introductionNewText === `<p id="pageNewText"></p>`){
    res.send(introductionPage);
    } else {
        const introductionPageUpdated = templateEngine.renderPage(introduction, introductionNewText, {
            tabTitle: "Introduction",
            active: "active"
        });
        res.send(introductionPageUpdated);
    }
});

app.get("/firstServer", (req, res) => {
    if(firstServerNewText === `<p id="pageNewText"></p>`){
    res.send(firstServerPage);
    } else {
        const firstServerPageUpdated = templateEngine.renderPage(firstServer, firstServerNewText, {
            tabTitle: "First Server",
            active: "active"
        });
        res.send(firstServerPageUpdated);
    }
});

app.get("/servingHTML", (req, res) => {
    if(servingHTMLNewText === `<p id="pageNewText"></p>`){
    res.send(servingHTMLPage);
    } else {
        const servingHTMLPageUpdated = templateEngine.renderPage(servingHTML, servingHTMLNewText, {
            tabTitle: "Serving HTML",
            active: "active"
        });
        res.send(servingHTMLPageUpdated);
    }
});

app.get("/time", (req, res) => {
    if(timeNewText === `<p id="pageNewText"></p>`){
    res.send(timePage);
    } else {
        const timePageUpdated = templateEngine.renderPage(time, timeNewText, {
            tabTitle: "Time",
            active: "active"
        });
        res.send(timePageUpdated);
    }
});

app.get("/exportImport", (req, res) => {
    if(exportImportNewText === `<p id="pageNewText"></p>`){
    res.send(exportImportPage);
    } else {
        const exportImportPageUpdated = templateEngine.renderPage(exportImport, exportImportNewText, {
            tabTitle: "Export Import",
            active: "active"
        });
        res.send(exportImportPageUpdated);
    }
});

app.get("/serverSideVsClientSide", (req, res) => {
    if(serverSideVsClientSideNewText === `<p id="pageNewText"></p>`){
    res.send(serverSideVsClientSidePage);
    } else {
        const serverSideVsClientSidePageUpdated = templateEngine.renderPage(serverSideVsClientSide, serverSideVsClientSideNewText, {
            tabTitle: "Server Side vs Client Side",
            active: "active"
        });
        res.send(serverSideVsClientSidePageUpdated);
    }
});

app.get("/serverSideRendering", (req, res) => {
    if(serverSideRenderingNewText === `<p id="pageNewText"></p>`){
    res.send(serverSideRenderingPage);
    } else {
        const serverSideRenderingPageUpdated = templateEngine.renderPage(serverSideRendering, serverSideRenderingNewText, {
            tabTitle: "Server Side Rendering",
            active: "active"
        });
        res.send(serverSideRenderingPageUpdated);
    }
});

app.get("/login", (req, res) => {
    res.send(loginPage);
});

app.post("/admin", (req, res) => {
    if(req.body.username === "admin" && req.body.password === "admin") {
    res.send(adminPage);
    } else {
        res.send("Wrong username or password");
    }
});

app.post("/addParagraph", (req, res) => {
    const text = req.body.newText;
    const page = req.body.formPage;

    switch (page) {
        case "/frontpage":
            frontpageNewText = `<p class="container" id="pageNewText">${text}</p>`;
            res.redirect("/");
            break;
        case "/introduction":
            introductionNewText = `<p class="container" id="pageNewText">${text}</p>`;
            res.redirect("/introduction");
            break;
        case "/firstServer":
            firstServerNewText = `<p class="container" id="pageNewText">${text}</p>`;
            res.redirect("/firstServer");
            break;
        case "/servingHTML":
            servingHTMLNewText = `<p class="container" id="pageNewText">${text}</p>`;
            res.redirect("/servingHTML");
            break;
        case "/time":
            timeNewText = `<p class="container" id="pageNewText">${text}</p>`;
            res.redirect("/time");
            break;
        case "/exportImport":
            exportImportNewText = `<p class="container" id="pageNewText">${text}</p>`;
            res.redirect("/exportImport");
            break;
        case "/serverSideVsClientSide":
            serverSideVsClientSideNewText = `<p class="container" id="pageNewText">${text}</p>`;
            res.redirect("/serverSideVsClientSide");
            break;
        case "/serverSideRendering":
            serverSideRenderingNewText = `<p class="container" id="pageNewText">${text}</p>`;
            res.redirect("/serverSideRendering");
            break;
        default:
            alert("Page not found");
    };
  });

//  SERVER

if (process.env.ENV === "DEV") {
    console.log("Running in development mode");
}

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});


