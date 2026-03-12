const { BrowserWindow, Menu } = require("electron");
const path = require("path");

class MainWindowFactory {
    static createWindow(view, options = {}) {
        Menu.setApplicationMenu(null);

        const isIndex = view === "index.html";

        const win = new BrowserWindow({
            width: 1000,
            height: 700,
            ...options,
            webPreferences: {
                preload: path.join(__dirname, "..", "..", "..", "preload", "preload.js"),
                contextIsolation: true,
                nodeIntegration: false,
                sandbox: true,
               
            },
        });

        const filePath = isIndex
            ? path.join(__dirname, "..", view)
            : path.join(__dirname, "..", "..", "page", view);

        win.loadFile(filePath);
        return win;
    }
}

module.exports = MainWindowFactory;